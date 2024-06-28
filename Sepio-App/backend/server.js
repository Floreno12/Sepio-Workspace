

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// Server script
app.get('/user/all', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.log('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
});



app.post('/user/privileges', async (req, res) => {
  const { username, password, privileges } = req.body;  // Correct the spelling here
  console.log(`Check user: ${username}`);

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name: username,
        password: hashedPassword,
        otp_secret: '',
        otp_verified: false,
        privileges: privileges  // Correct the spelling here
      },
    });
    console.log('User created successfully', newUser);
    res.json({ success: true });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ success: false, message: 'Error' });
  }
});



app.post('/update-password', async (req, res) => {
  const { password } = req.body;
  const username = 'admin';  // Hardcoded username

  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const updatedUser = await prisma.user.update({
      where: { name: username },
      data: {
        password: hashedPassword,
        credentialsUpdated: true, // Update credentialsUpdated to true
      },
    });

    res.json({ success: true, credentialsUpdated: user.credentialsUpdated });
  } catch (error) {
    console.error('Error updating password for user:', error);
    res.status(500).json({ success: false, message: 'Error updating password for user' });
  }
});


// Combined authenticate and update password
app.post('/authenticate', async (req, res) => {
  const { username, password } = req.body;
  console.log(`Authenticating user: ${username}`);

  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (!user) {
      console.log(`Authentication failed for user: ${username}`);
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare password with hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`Authentication failed for user: ${username}`);
      return res.status(401).json({ message: 'Authentication failed' });
    }

    if (!user.credentialsUpdated) {
      // Update the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      await prisma.user.update({
        where: { name: username },
        data: {
          password: hashedPassword,
          credentialsUpdated: true, // Update credentialsUpdated to true
        },
      });

      console.log(`Password updated for user: ${username}`);
      return res.json({ credentialsUpdated: false });
    }

    if (user.otp_verified) {
      console.log(`User ${username} has completed OTP setup`);
      return res.json({ otpRequired: true, credentialsUpdated: true });
    } else {
      console.log(`User ${username} has not completed OTP setup, generating secret`);
      const secret = speakeasy.generateSecret({ length: 20 });
      console.log(`Generated secret for user ${username}: ${secret.base32}`);

      const otpauth_url = speakeasy.otpauthURL({
        secret: secret.base32,
        label: encodeURIComponent(username),
        issuer: 'YourApp',
        encoding: 'base32',
      });

      // Store secret in db
      await prisma.user.update({
        where: { name: username },
        data: { otp_secret: secret.base32 },
      });

      // Generate QR code for 2FA Authentication
      qrcode.toDataURL(otpauth_url, (err, data_url) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'QR code generation failed' });
        }
        console.log(`Generated QR code for user ${username}`);
        res.json({ otpRequired: true, qrCode: data_url, secret: secret.base32, credentialsUpdated: true });
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// Verify token
app.post('/verify', async (req, res) => {
  const { username, token } = req.body;
  console.log(`Verifying token for user: ${username}`);

  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (!user || !user.otp_secret) {
      console.log(`User ${username} not set up for 2FA`);
      return res.status(400).json({ verified: false, message: 'User not set up for 2FA' });
    }

    const verified = speakeasy.totp.verify({
      secret: user.otp_secret,
      encoding: 'base32',
      token: token.trim(),
      window: 5,
    });

    // Verified connection with Google Authenticator 
    if (verified) {
      console.log(`Token verified for user: ${username}`);
      await prisma.user.update({
        where: { name: username },
        data: { otp_verified: true },
      });
      res.json({ verified: true });
    } else {
      console.log(`Invalid token for user: ${username}`);
      res.json({ verified: false, message: 'Invalid token' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

app.use(express.static(path.join(__dirname, '../front-end/build')));

// Serve React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
