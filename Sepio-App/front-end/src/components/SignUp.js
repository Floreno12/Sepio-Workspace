



// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import {Toast} from 'primereact/toast';
// import axios from 'axios';

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');


//     axios.post('/signup', formData)
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('User created successfully');
//           setTimeout(() => {
//           navigate('/checkpassword');
//           }, 1500)
          
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Sign up error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//     <Toast ref = {toast}/>
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Username</FormLabel>
//           <Input
//           placeholder = "Username"
//             type="text"
//             required
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//           />
//           <FormLabel>Password</FormLabel>
//           <Input
//           placeholder = "Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <Button
//             loading = {status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Sign Up
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Sign up failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//       variant = 'solid'
//       color = 'secondary'
//       sx = {{marginTop: '20px'}}
//       onClick = {handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }









// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import {Toast} from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       toast.current.show({severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 3000});
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/checkpassword');
//           }, 1500)
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//         variant='solid'
//         color='secondary'
//         sx={{ marginTop: '20px' }}
//         onClick={handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }









// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import { Toast } from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       toast.current.show({ severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 3000 });
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/'); // Navigate to checkpassword page
//           }, 1500)
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//         variant='solid'
//         color='secondary'
//         sx={{ marginTop: '20px' }}
//         onClick={handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }















// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import { Toast } from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const showError = (message) => {
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       showError('Passwords do not match');
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/'); // Navigate to login page
//           }, 1500)
//         } else {
//           showError('Password update failed');
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         showError('Password update failed');
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>

//     </div>
//   );
// }



















// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import { Toast } from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   };

//   const showError = (message) => {
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       showError('Passwords do not match');
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/'); // Navigate to login page
//           }, 1500);
//         } else {
//           showError('Password update failed');
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         showError('Password update failed');
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     axios.post('/reset-credentials-updated')
//       .then(response => {
//         if (response.data.success) {
//           navigate('/');
//         } else {
//           showError('Failed to reset credentials update status');
//         }
//       })
//       .catch(error => {
//         console.error('Reset credentials update status error:', error);
//         showError('Failed to reset credentials update status');
//       });
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleLoginRedirect}
//             sx={{ marginTop: '10px' }}
//           >
//             Go Back to Login
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//     </div>
//   );
// }

















import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function UpdatePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [status, setStatus] = useState('initial');
  const toast = useRef(null);

  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  };

  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');

    if (formData.password !== formData.confirmPassword) {
      showError('Passwords do not match');
      setStatus('initial');
      return;
    }

    axios.post('/update-password', { password: formData.password })
      .then(response => {
        if (response.data.success) {
          showSuccess('Password updated successfully');
          setTimeout(() => {
            navigate('/'); // Navigate to login page
          }, 1500);
        } else {
          showError('Password update failed');
          setStatus('failure');
        }
      })
      .catch(error => {
        console.error('Update password error:', error);
        showError('Password update failed');
        setStatus('failure');
      });
  };

  const handleLoginRedirect = () => {
    axios.post('/reset-credentials-updated')
      .then(response => {
        if (response.data.success) {
          navigate('/');
        } else {
          showError('Failed to reset credentials update status');
        }
      })
      .catch(error => {
        console.error('Reset credentials update status error:', error);
        showError('Failed to reset credentials update status');
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
      <Toast ref={toast} />
      <img src={SepioLogo} alt="Welcome" style={{ marginTop: '10px', height: 70 }} />
      <div className='form-token' >
      <form onSubmit={handleSubmit} id="demo" >
        <FormControl style={{ display: 'inline-flex', justifyContent: 'center', maxWidth: '500px', marginTop: '15px', paddingTop: '15px' }}>
        <Input
          placeholder="Password"
          type="password"
          variant='soft'
          startDecorator={<LockIcon style={{ color: 'fff' }} />}
          required
          value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
    
    
    
          sx={styleInput}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          variant='soft'
          startDecorator={<LockIcon style={{ color: 'fff' }} />}
          required
          value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}    
          style={{ width: '450px' }}
          sx={styleInput}
        />
            
        </FormControl>
        <Button variant="solid" type="submit" sx={styleButtonLogin}>
        {status === 'loading' ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Update Password'}
        </Button>
      </form>
      </div>
    </div>
    </div>
    );
    
    }