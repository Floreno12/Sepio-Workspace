import React, { useState } from 'react';
import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
import MenuIcon from '@mui/icons-material/Menu';
import { RiDashboardLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
   

    return (
        <CSidebar  className='border-end custom-sidebar'>
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
    );
};

export default Sidebar;
