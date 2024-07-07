// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import FormHelperText from '@mui/joy/FormHelperText';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import {Toast} from 'primereact/toast'
// import axios from 'axios';

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate,  useLocation } from 'react-router-dom';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SepioLogo from './../image/Sepio_Logo.png';
import { Toast } from 'primereact/toast';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

export default function TwoFactorAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({ token: '', status: 'initial' });
  const [qrCode, setQrCode] = useState(location.state?.qrCode || '');
  const username = location.state?.username; // Get the username from the location state
  const toast = useRef(null);

  const showSuccess = (message) => {
    toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
  }

  const showError = (message) => {
    toast.current.clear();
    toast.current.show({severity: 'error', summary: 'Error', detail: message, life: 3000});
  }

  useEffect(() => {
    if (!username) {
      console.error('Username is not provided to TwoFactorAuth component');
    } else {
      console.log(username);
    }
  }, [username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      console.error('Username is missing. Cannot submit 2FA token.');
      setData((current) => ({ ...current, status: 'failure' }));
      showError('Incorrect 2FA code.');
      return;
    }

    console.log(`Verifying 2FA for user: ${username} with token: ${data.token.trim()}`);
    axios.post('/verify', { username: username, token: data.token.trim() })
      .then(response => {
        if (response.data.verified) {
          showSuccess('2FA successful!');
          setData((current) => ({ ...current, status: 'loading' }));
          setTimeout(() => {
            setData({ token: '', status: 'sent' });
            navigate('/querytool');
          }, 1500);
        } else {
          console.log(`Verification failed: ${response.data.message}`);
          setData((current) => ({ ...current, status: 'failure' }));
          showError('Incorrect 2FA code.');
        }
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        setData((current) => ({ ...current, status: 'failure' }));
        showError('Incorrect 2FA code.');
      });
  };


  const standart = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: 'linear-gradient(to top ,#9EADB7, #93B8D4)',
		boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.18)',
		border: '4px solid #D6D6D6',
		maxWidth: '525px',
		margin: 'auto',
		marginTop: '100px'
	}

	const styleButtonLogin = {
		fontSize: '20px',
		marginTop: '10px',
		padding: '30px 0',
		background: '#0D385A',
		color: '#fff',
		width: '517px',
		height: '40px',
		"--Button-radius": "0px",
		transition: 'all .30s ease',
		'&:active': {
			background: '#0D395C',
		}
	}

	const styleInput = {
		"--Input-placeholderOpacity": 1,
		"--Input-radius": "0px",
		background: '#5D7F99',
		color: '#fff',
		marginBottom: '30px',
		borderBottom: '2px solid',
		borderColor: '#9dafbd',
		'&:hover': {
			borderColor: 'neutral.outlinedHoverBorder',
		},
		'&::before': {
			border: '1px solid #0c3859',
			transform: 'scaleX(0)',
			left: 0,
			right: 0,
			bottom: '-2px',
			top: 'unset',
			transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
			borderRadius: 0,
		},
		'&:focus-within::before': {
			transform: 'scaleX(1)',
		},

	}

  return (
    <div style = {{marginRight: '-40px'}}>
    <div style={standart}>
      <Toast ref = {toast}/>
      <img src={SepioLogo} alt="Welcome" style={{ marginTop: '10px', height: 70 }} />
      {qrCode && (
        <div>
          <img src={qrCode} alt="QR Code" style = {{marginTop: '15px'}} />
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Scan this QR code with your authenticator app to set up 2FA.</p>

          {/* <p style = {{marginTop: '20px'}}>Scan this QR code with your authenticator app to set up 2FA.</p> */}
        </div>
      )}
      <div className='form-token'>
        <form onSubmit={handleSubmit} id="demo">
          <FormControl style={{ display: 'inline-flex', justifyContent: 'center', maxWidth: '500px', marginTop: '15px', paddingTop: '15px' }}>
            <FormLabel sx={(theme) => ({ '--FormLabel-color': theme.vars.palette.primary.plainColor })}>
              2FA Code
            </FormLabel>
            <Input
              startDecorator={<PersonIcon style={{ color: 'fff' }} />}
              sx={styleInput}
              placeholder="Enter 2FA Code"
              type="text"
              variant = 'soft'
              required
              value={data.token}
              onChange={(event) => setData({ token: event.target.value, status: 'initial' })}
              error={data.status === 'failure'}
            />
            
          </FormControl>
          <Button
              variant="solid"            
              type="submit"
              sx={styleButtonLogin}
            >
             {data.status === 'loading' ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Verify'}
            </Button>
           
        </form>
      </div>
    </div>
    </div>
  );
}