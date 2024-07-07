// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import FormHelperText from '@mui/joy/FormHelperText';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import {Toast} from 'primereact/toast';
// import axios from 'axios';

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '', status: 'initial' });
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
//   }

//   const showError = (message) => {
//     toast.current.clear();
//     toast.current.show({severity: 'error', summary: 'Error', detail: message, life: 3000});
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setData({...data, status: 'loading'});
//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password
//       });

//       if (response.data.otpRequired) {
//         showSuccess('Logging in Successful');
//         setTimeout(() => {
//         setUsername(data.username);
//         navigate('/querypassword');
//         }, 1500)
        
//       } else {
//         setUsername(data.username);
//         navigate('/querytool');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setData({ ...data, status: 'failure' });
//       showError('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref = {toast}/>
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <div className='form-token'>
//         <form onSubmit={handleSubmit} id="demo">
//           <FormControl>
//             <FormLabel>User name</FormLabel>
//             <Input
//               placeholder="User name"
//               type="text"
//               required
//               value={data.username}
//               onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="Password"
//               type="password"
//               required
//               value={data.password}
//               onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <Button loading = {data.status === 'loading'}  variant="solid" color="primary" type="submit" style = {{marginTop: '22px'}}>
//               Log in
//             </Button>
          
//           </FormControl>
//         </form>
//       </div>
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

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '', status: 'initial' });
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const showError = (message) => {
//     toast.current.clear();
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setData({ ...data, status: 'loading' });

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password
//       });

//       if (response.data.credentialsUpdated === false) {
//         showSuccess('Logging in Successful');
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         // Check if credentials are updated
//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa'); // Navigate to 2fa page if credentials are updated
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setData({ ...data, status: 'failure' });
//       showError('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <div className='form-token'>
//         <form onSubmit={handleSubmit} id="demo">
//           <FormControl>
//             <FormLabel>User name</FormLabel>
//             <Input
//               placeholder="User name"
//               type="text"
//               required
//               value={data.username}
//               onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="Password"
//               type="password"
//               required
//               value={data.password}
//               onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <Button loading={data.status === 'loading'} variant="solid" color="primary" type="submit" style={{ marginTop: '22px' }}>
//               Log in
//             </Button>
//           </FormControl>
//         </form>
//       </div>
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

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '', status: 'initial' });
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const showError = (message) => {
//     toast.current.clear();
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setData({ ...data, status: 'loading' });

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password
//       });

//       if (response.data.credentialsUpdated === false) {
//         showSuccess('Logging in Successful');
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         // Check if credentials are updated
//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } }); // Navigate to 2fa page if credentials are updated
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setData({ ...data, status: 'failure' });
//       showError('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <div className='form-token'>
//         <form onSubmit={handleSubmit} id="demo">
//           <FormControl>
//             <FormLabel>User name</FormLabel>
//             <Input
//               placeholder="User name"
//               type="text"
//               required
//               value={data.username}
//               onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="Password"
//               type="password"
//               required
//               value={data.password}
//               onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <Button loading={data.status === 'loading'} variant="solid" color="primary" type="submit" style={{ marginTop: '22px' }}>
//               Log in
//             </Button>
//           </FormControl>
//         </form>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginPage from '@react-login-page/page6'; // Assuming this is your login page component
// import SepioLogo from './../image/Sepio_Logo.png';
// import axios from 'axios';

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (data) => {
//     setLoading(true);

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password,
//       });

//       setLoading(false);

//       if (response.data.credentialsUpdated === false) {
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } });
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setLoading(false);
//       setErrorMessage('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: `url('https://sepio-hac-1-ng.sepiocyber.com/assets/img/bg/sepio-bg-1x.small2.png')`,
//       backgroundSize: 'cover',
//       minHeight: '100vh', // Ensure the background covers the entire viewport
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <LoginPage
//         onSubmit={handleSubmit}
//         loading={loading}
//         errorMessage={errorMessage}
//         logo={SepioLogo}
//         fields={[
//           { label: 'Username', type: 'text', name: 'username', placeholder: 'Username', required: true },
//           { label: 'Password', type: 'password', name: 'password', placeholder: 'Password', required: true },
//         ]}
//         submitButton={{
//           label: 'Log In',
//         }}
//       />
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginPage from '@react-login-page/page9'; // Import the LoginPage component from the library
// import SepioLogo from './../image/Sepio_Logo.png'; // Verify the path to your SepioLogo image
// import axios from 'axios';

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (data) => {
//     setLoading(true);

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password,
//       });

//       setLoading(false);

//       if (response.data.credentialsUpdated === false) {
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } });
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setLoading(false);
//       setErrorMessage('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: `url('https://sepio-hac-1-ng.sepiocyber.com/assets/img/bg/sepio-bg-1x.small2.png')`,
//       backgroundSize: 'cover',
//       minHeight: '100vh', // Ensure the background covers the entire viewport
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//       <LoginPage
//         onSubmit={handleSubmit}
//         loading={loading}
//         errorMessage={errorMessage}
//         logo={SepioLogo} // Ensure SepioLogo is correctly imported and its path is accurate
//         fields={[
//           { label: 'Username', type: 'text', name: 'username', placeholder: 'Username', required: true },
//           { label: 'Password', type: 'password', name: 'password', placeholder: 'Password', required: true },
//         ]}
//         submitButton={{
//           label: 'Log In',
//         }}
//       />
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

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '', status: 'initial' });
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const showError = (message) => {
//     toast.current.clear();
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setData({ ...data, status: 'loading' });

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password
//       });

//       if (response.data.credentialsUpdated === false) {
//         showSuccess('Logging in Successful');
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         // Check if credentials are updated
//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } }); // Navigate to 2fa page if credentials are updated
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setData({ ...data, status: 'failure' });
//       showError('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <div className='form-token'>
//         <form onSubmit={handleSubmit} id="demo">
//           <FormControl>
//             <FormLabel>User name</FormLabel>
//             <Input
//               placeholder="User name"
//               type="text"
//               required
//               value={data.username}
//               onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="Password"
//               type="password"
//               required
//               value={data.password}
//               onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <Button loading={data.status === 'loading'} variant="solid" color="primary" type="submit" style={{ marginTop: '22px' }}>
//               Log in
//             </Button>
//           </FormControl>
//         </form>
//       </div>
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

// export default function InputSubscription({ setUsername }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '', status: 'initial' });
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const showError = (message) => {
//     toast.current.clear();
//     toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setData({ ...data, status: 'loading' });

//     try {
//       const response = await axios.post('/authenticate', {
//         username: data.username,
//         password: data.password
//       });

//       if (response.data.credentialsUpdated === false) {
//         showSuccess('Logging in Successful');
//         setTimeout(() => {
//           setUsername(data.username);
//           navigate('/querypassword');
//         }, 1500);
//       } else {
//         setUsername(data.username);

//         // Check if credentials are updated
//         if (response.data.credentialsUpdated === true) {
//           navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } }); // Navigate to 2fa page if credentials are updated
//         }
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setData({ ...data, status: 'failure' });
//       showError('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <div className='form-token'>
//         <form onSubmit={handleSubmit} id="demo">
//           <FormControl>
//             <FormLabel>User name</FormLabel>
//             <Input
//               placeholder="User name"
//               type="text"
//               required
//               value={data.username}
//               onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <FormLabel>Password</FormLabel>
//             <Input
//               placeholder="Password"
//               type="password"
//               required
//               value={data.password}
//               onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
//               error={data.status === 'failure'}
//             />
//             <Button loading={data.status === 'loading'} variant="solid" color="primary" type="submit" style={{ marginTop: '22px' }}>
//               Log in
//             </Button>
//           </FormControl>
//         </form>
//       </div>
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

export default function InputSubscription({ setUsername }) {
	const navigate = useNavigate();
	const [data, setData] = useState({ username: '', password: '', status: 'initial' });
	const toast = useRef(null);

	const showSuccess = (message) => {
		toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
	}

	const showError = (message) => {
		toast.current.clear();
		toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setData({ ...data, status: 'loading' });

		try {
			const response = await axios.post('/authenticate', {
				username: data.username,
				password: data.password
			});

			if (response.data.credentialsUpdated === false) {
				showSuccess('Logging in Successful');
				setTimeout(() => {
					setUsername(data.username);
					navigate('/querypassword');
				}, 1500);
			} else {
				setUsername(data.username);

				// Check if credentials are updated
				if (response.data.credentialsUpdated === true) {
					navigate('/2fa', { state: { qrCode: response.data.qrCode, username: data.username } }); // Navigate to 2fa page if credentials are updated
				}
			}
		} catch (error) {
			console.error('Error logging in:', error);
			setData({ ...data, status: 'failure' });
			showError('Error logging in. Please check your credentials.');
		}
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
							placeholder="User name"
							type="text"
							variant='soft'
							startDecorator={<PersonIcon style={{ color: 'fff' }} />}
							required
							value={data.username}
							onChange={(event) => setData({ ...data, username: event.target.value, status: 'initial' })}
							error={data.status === 'failure'}
							sx={styleInput}
						/>
						<Input
							placeholder="Password"
							type="password"
							variant='soft'
							startDecorator={<LockIcon style={{ color: 'fff' }} />}
							required
							value={data.password}
							onChange={(event) => setData({ ...data, password: event.target.value, status: 'initial' })}
							error={data.status === 'failure'}
							style={{ width: '450px' }}
							sx={styleInput}
						/>

					</FormControl>
					<Button  variant="solid" type="submit" sx={styleButtonLogin}>
          {data.status === 'loading' ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Login'}
					</Button>
				</form>
			</div>
		</div>
    </div>
	);

}