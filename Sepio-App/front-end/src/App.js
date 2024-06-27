import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Login from './components/Login';
import FA from './components/FA';
import RootView from './components/RootView';
import SignUp from './components/SignUp';
import MAC from './components/MAC';
import Settings from './components/Settings';
import LoginPassword from './components/LoginPassword';
import CreateUser from './components/CreateUser';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';           // Core CSS
import 'primeicons/primeicons.css';
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS


function App() {
	const [icon_username, setUsername] = useLocalStorage('');
	return (
		<Router>
			<section className='sepio'>
				<div className="App">
					<Routes>
					    <Route path='/' element={<Login setUsername={setUsername} />} />
						<Route path='/querypassword' element={<SignUp />} />
						<Route path = '/checkpassword' element = {<LoginPassword setUsername={setUsername} />}/>
						<Route path='/2fa' element={<FA />} />
						<Route path='/querytool' element={<RootView icon_username={icon_username} />} />
						<Route path='/querytool/mac' element={<MAC icon_username={icon_username} />} />
						<Route path='/querytool/settings' element={<Settings icon_username={icon_username} />} />
						<Route path = '/querytool/createuser' element = {<CreateUser icon_username = {icon_username}/>}/>
					</Routes>
				</div>
			</section>
		</Router>
	);
}

export default App;














// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useLocalStorage } from './hooks/useLocalStorage';
// import Login from './components/Login';
// import FA from './components/FA';
// import RootView from './components/RootView';
// import SignUp from './components/SignUp';
// import MAC from './components/MAC';
// import Settings from './components/Settings';
// import LoginPassword from './components/LoginPassword';
// import axios from 'axios';

// function App() {
//   const [icon_username, setUsername] = useLocalStorage('');
//   const [credentialsUpdated, setCredentialsUpdated] = useState(false);

//   useEffect(() => {
//     // Fetch user data to check if credentials are updated
//     axios.get('/user')  // Replace with your endpoint to fetch user data
//       .then(response => {
//         setCredentialsUpdated(response.data.credentialsUpdated);
//       })
//       .catch(error => {
//         console.error('Fetch user data error:', error);
//       });
//   }, []);

//   return (
//     <Router>
//       <section className='sepio'>
//         <div className="App">
//           <Routes>
//             {!credentialsUpdated && <Route path='/' element={<Login setUsername={setUsername} />} />}
//             {!credentialsUpdated && <Route path='/querypassword' element={<SignUp />} />}
//             <Route path='/checkpassword' element={<LoginPassword setUsername={setUsername} />} />
//             <Route path='/2fa' element={<FA />} />
//             <Route path='/querytool' element={<RootView icon_username={icon_username} />} />
//             <Route path='/querytool/mac' element={<MAC icon_username={icon_username} />} />
//             <Route path='/querytool/settings' element={<Settings icon_username={icon_username} />} />
//           </Routes>
//         </div>
//       </section>
//     </Router>
//   );
// }

// export default App;
