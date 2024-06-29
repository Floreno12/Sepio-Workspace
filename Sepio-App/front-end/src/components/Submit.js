// import React, { useEffect, useState, useRef } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { Avatar } from 'primereact/avatar';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Menu, MenuItem } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import SepioLogo from './../image/Sepio_Logo.png';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Buttons from '@mui/joy/Button';
// import axios from 'axios';


// export default function Layout({ icon_username }) {
// 	const navigate = useNavigate();
// 	const [logoHeight, setLogoHeight] = useState('60px');
// 	const [isScrollDisabled, setIsScrollDisabled] = useState(true);
//     const [formData, setFormData] = useState({username: '', password: '', privileges: ''});

// //call to the server
//    const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post().then(response => {

//     })  

    
//    }

// 	const handleResize = () => {
// 		if (window.innerWidth <= 480) {
// 			setLogoHeight('20px');
// 		} else if (window.innerWidth <= 868) {
// 			setLogoHeight('20px');
// 		} else {
// 			setLogoHeight('40px');
// 		}
// 	};

// 	useEffect(() => {
// 		if (isScrollDisabled) {
// 			document.body.style.overflow = 'hidden';
// 		} else {
// 			document.body.style.overflow = 'auto';
// 		}

// 		return () => {
// 			document.body.style.overflow = 'auto';
// 		}
// 	}, [isScrollDisabled]);


// 	useEffect(() => {
// 		window.addEventListener('resize', handleResize);
// 		handleResize(); // Call it initially to set the correct size

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		};
// 	}, []);

// 	const [dropDown, setDropDown] = useState(null)
// 	const open = Boolean(dropDown);
// 	const handleClick = (event) => {
// 		setDropDown(event.currentTarget)
// 	};
// 	const handleClose = () => {
// 		setDropDown(null);
// 	};



// 	const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
// 	const end = (
// 		<div className='flex align-items-center gap-2'>
// 			<NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
// 				<span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
// 				Logout
// 			</NavLink>
// 			<Menu
// 				anchorEl={dropDown}
// 				id='account-menu'
// 				open={open}
// 				onClose={handleClose}
// 				onClick={handleClose}
// 				PaperProps={{
// 					elevation: 5,
// 					sx: {
// 						width: '120px',
// 						borderRadius: '10px',
// 						overflow: 'visible',
// 						mt: 1,
// 						'&::before': {
// 							content: '""',
// 							display: 'inline-block',
// 							position: 'absolute',
// 							top: 0,
// 							right: 10,
// 							width: 10,
// 							height: 10,
// 							bgcolor: 'background.paper',
// 							transform: 'translateY(-50%) rotate(45deg)',
// 							zIndex: 0,
// 						},
// 					},
// 				}}
// 				transformOrigin={{
// 					vertical: 'top',
// 					horizontal: 'center',
// 				}}
// 				anchorOrigin={{
// 					vertical: 'bottom',
// 					horizontal: 'center',
// 				}}
// 			>
// 				<MenuItem sx={{ display: 'flex', justifyContent: 'center' }} title='Profile'>
// 					<p style={{ marginBottom: '0px' }}>
// 						User: {icon_username}
// 					</p>
// 				</MenuItem>
// 			</Menu>

// 			<Button
// 				style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
// 				icon="pi pi-user"
// 				rounded
// 				text
// 				severity="secondary"
// 				aria-label="User"
// 				className="mr-2"
// 				onClick={handleClick}
// 				aria-controls={open ? 'account-menu' : undefined}
// 				aria-haspopup="true"
// 				aria-expanded={open ? 'true' : undefined}
// 			/>
// 		</div>
// 	);

// 	return (
// 		<div>
// 			<Menubar start={start} end={end} />
// 			<div>
// 				<CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
// 					<CSidebarNav>
// 						<CContainer fluid>
// 							<CForm className='d-flex'>
// 							</CForm>
// 						</CContainer>
// 						<CNavItem>
// 							<NavLink to='/querytool/mac' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' />MAC
// 							</NavLink>
// 						</CNavItem>
// 						<CNavItem>
// 							<NavLink to='/querytool/settings' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' /> Settings
// 							</NavLink>
// 							<NavLink to='/querytool/createuser' className='nav-link'>
// 								<RiDashboardLine className='nav-icon' /> Users
// 							</NavLink>
// 						</CNavItem>
// 					</CSidebarNav>
// 				</CSidebar>
               




// 			</div>
// 		</div>
// 	);
// }






import React, { useEffect, useState, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
import { RiDashboardLine } from 'react-icons/ri';
import {Toast} from 'primereact/toast';
import SepioLogo from './../image/Sepio_Logo.png';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import axios from 'axios';

export default function Layout({ icon_username }) {
    const navigate = useNavigate();
    const [logoHeight, setLogoHeight] = useState('60px');
    const [isScrollDisabled, setIsScrollDisabled] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '', privileges: '' });
    const [status, setStatus] = useState('initial');
    const toast = useRef(null);

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
      }
    
      const showError = (message) => {
        toast.current.clear();
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
      }

    // Handle form input changes
    const handleInputChange = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSelectChange = (event, newValue) => {
        setFormData({ ...formData, privileges: newValue });
    };

    // Call to the server
    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('loading');
        axios.post('/user/privileges', formData)
            .then(response => {
                if(response.data.success){
                    showSuccess('User has been created');
                console.log('User created:', response.data);
                // Navigate to the users list page or any other page
                setTimeout(() => {
                navigate('/querytool/createuser');
                }, 1500);
                }else{
                    setStatus('failure')
                    console.log('Error');
                    showError('Error');
                }
            })
            .catch(error => {
                setStatus('failure');
                console.error('There was an error creating the user!', error);
                showError('Error creating the user!');
            });
    };

    const handleResize = () => {
        if (window.innerWidth <= 480) {
            setLogoHeight('20px');
        } else if (window.innerWidth <= 868) {
            setLogoHeight('20px');
        } else {
            setLogoHeight('40px');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the correct size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [dropDown, setDropDown] = useState(null);
    const open = Boolean(dropDown);
    const handleClick = (event) => {
        setDropDown(event.currentTarget);
    };
    const handleClose = () => {
        setDropDown(null);
    };

    const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
    const end = (
        <div className='flex align-items-center gap-2'>
            <NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
                <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
                Logout
            </NavLink>
            <Menu
                anchorEl={dropDown}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 5,
                    sx: {
                        width: '120px',
                        borderRadius: '10px',
                        overflow: 'visible',
                        mt: 1,
                        '&::before': {
                            content: '""',
                            display: 'inline-block',
                            position: 'absolute',
                            top: 0,
                            right: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} title='Profile'>
                    <p style={{ marginBottom: '0px' }}>
                        User: {icon_username}
                    </p>
                </MenuItem>
            </Menu>

            <Button
                style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
                icon="pi pi-user"
                rounded
                text
                severity="secondary"
                aria-label="User"
                className="mr-2"
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
        </div>
    );

    const secondMenubarEnd = (
        <div style={{ color: 'white', padding: '10px', borderRadius: '5px', marginLeft: '10px' }}>
            User new record
        </div>
    );

    return (
        <div>
            <Toast ref = {toast}/>
            <Menubar start={start} end={end} />
            <div>
                <CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
                    <CSidebarNav>
                        <CContainer fluid>
                            <CForm className='d-flex'>
                            </CForm>
                        </CContainer>
                        <CNavItem>
                            <NavLink to='/querytool/mac' className='nav-link'>
                                <RiDashboardLine className='nav-icon' /> MAC
                            </NavLink>
                        </CNavItem>
                        <CNavItem>
                            <NavLink to='/querytool/settings' className='nav-link'>
                                <RiDashboardLine className='nav-icon' /> Settings
                            </NavLink>
                            <NavLink to='/querytool/createuser' className='nav-link'>
                                <RiDashboardLine className='nav-icon' /> Users
                            </NavLink>
                        </CNavItem>
                    </CSidebarNav>
                </CSidebar>
                <Menubar start={secondMenubarEnd} style={{ backgroundColor: '#183462', maxWidth: '1500px', marginLeft: '250px', marginTop: '-839px' }} />

                <div style={{ marginLeft: '750px', padding: '20px', marginTop: '100px' }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input name="username" style={{ maxWidth: '250px' }} value={formData.username} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input name="password" style={{ maxWidth: '250px' }} type="password" value={formData.password} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Privileges</FormLabel>
                            <Select name="privileges" style={{ maxWidth: '250px' }} value={formData.privileges} onChange={handleSelectChange}>
                                <Option value="UI_USER">UI user</Option>
                                <Option value="SERVICE_ACCOUNT">Service account</Option>
                            </Select>
                        </FormControl>
                        <div style={{ marginLeft: '-550px', marginTop: '10px' }}>
                            <Button type="submit" label="Submit" style = {{backgroundColor: '#183462', borderRadius: '5px 5px 5px 5px'}} loading = {status === 'loading'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}









// import React, { useState } from 'react';
// import { Menubar } from 'primereact/menubar';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Menu, MenuItem } from '@mui/material';
// import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
// import { RiDashboardLine } from 'react-icons/ri';
// import SepioLogo from './../image/Sepio_Logo.png';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import axios from 'axios';

// export default function Layout({ icon_username }) {
//     const navigate = useNavigate();
//     const [logoHeight, setLogoHeight] = useState('60px');
//     const [formData, setFormData] = useState({ username: '', password: '', privileges: '' });

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         if (e && e.target) {
//             const { name, value } = e.target;
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSelectChange = (event, newValue) => {
//         setFormData({ ...formData, privileges: newValue });
//     };

//     // Call to the server
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('/user/privileges', formData)
//             .then(response => {
//                 if(response.data.success){
//                     console.log('User created:', response.data);
//                     // Navigate to the users list page or any other page
//                     navigate('/querytool/createuser');
//                 } else {
//                     console.log('Error');
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error creating the user!', error);
//             });
//     };

//     const [dropDown, setDropDown] = useState(null);
//     const open = Boolean(dropDown);
//     const handleClick = (event) => {
//         setDropDown(event.currentTarget);
//     };
//     const handleClose = () => {
//         setDropDown(null);
//     };

//     const start = <img alt='logo' style={{ cursor: 'pointer' }} src={SepioLogo} height='40' className='mr-2' />;
//     const end = (
//         <div className='flex align-items-center gap-2'>
//             <NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px', textDecoration: 'none' }}>
//                 <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
//                 Logout
//             </NavLink>
//             <Menu
//                 anchorEl={dropDown}
//                 id='account-menu'
//                 open={open}
//                 onClose={handleClose}
//                 onClick={handleClose}
//                 PaperProps={{
//                     elevation: 5,
//                     sx: {
//                         width: '120px',
//                         borderRadius: '10px',
//                         overflow: 'visible',
//                         mt: 1,
//                         '&::before': {
//                             content: '""',
//                             display: 'inline-block',
//                             position: 'absolute',
//                             top: 0,
//                             right: 10,
//                             width: 10,
//                             height: 10,
//                             bgcolor: 'background.paper',
//                             transform: 'translateY(-50%) rotate(45deg)',
//                             zIndex: 0,
//                         },
//                     },
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//             >
//                 <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} title='Profile'>
//                     <p style={{ marginBottom: '0px' }}>
//                         User: {icon_username}
//                     </p>
//                 </MenuItem>
//             </Menu>

//             <Button
//                 style={{ width: '46px', height: '46px', borderRadius: '50%', color: '#183462' }}
//                 icon="pi pi-user"
//                 rounded
//                 text
//                 severity="secondary"
//                 aria-label="User"
//                 className="mr-2"
//                 onClick={handleClick}
//                 aria-controls={open ? 'account-menu' : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? 'true' : undefined}
//             />
//         </div>
//     );

//     const secondMenubarEnd = (
//         <div style={{ color: 'white', padding: '10px', borderRadius: '5px', marginLeft: '10px' }}>
//             User new record
//         </div>
//     );

//     return (
//         <div>
//             <Menubar start={start} end={end} />
            
//             <div>
//                 <CSidebar className='border-end custom-sidebar' visible={true} style={{ height: '100vh', position: 'sticky', top: '0' }}>
//                     <CSidebarNav>
//                         <CContainer fluid>
//                             <CForm className='d-flex'>
//                             </CForm>
//                         </CContainer>
//                         <CNavItem>
//                             <NavLink to='/querytool/mac' className='nav-link'>
//                                 <RiDashboardLine className='nav-icon' /> MAC
//                             </NavLink>
//                         </CNavItem>
//                         <CNavItem>
//                             <NavLink to='/querytool/settings' className='nav-link'>
//                                 <RiDashboardLine className='nav-icon' /> Settings
//                             </NavLink>
//                             <NavLink to='/querytool/createuser' className='nav-link'>
//                                 <RiDashboardLine className='nav-icon' /> Users
//                             </NavLink>
//                         </CNavItem>
//                     </CSidebarNav>
//                 </CSidebar>
//                 <Menubar start={secondMenubarEnd} style={{ backgroundColor: '#183462', maxWidth: '1500px', marginLeft: '250px', marginTop: '-839px' }} />

//                 {/* Management Bar */}
//                 <div style={{ marginLeft: '750px', padding: '20px', marginTop: '30px' }}>
//                     <form onSubmit={handleSubmit}>
//                         <FormControl>
//                             <FormLabel>Username</FormLabel>
//                             <Input name="username" style={{ maxWidth: '250px' }} value={formData.username} onChange={handleInputChange} />
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel>Password</FormLabel>
//                             <Input name="password" style={{ maxWidth: '250px' }} type="password" value={formData.password} onChange={handleInputChange} />
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel>Privileges</FormLabel>
//                             <Select name="privileges" style={{ maxWidth: '250px' }} value={formData.privileges} onChange={handleSelectChange}>
//                                 <Option value="UI_USER">UI user</Option>
//                                 <Option value="SERVICE_ACCOUNT">Service account</Option>
//                             </Select>
//                         </FormControl>
//                         <div style={{ marginLeft: '-550px', marginTop: '10px' }}>
//                             <Button type="submit" label="Submit" style = {{backgroundColor: '#183462'}} onSubmit = {handleSubmit}/>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
