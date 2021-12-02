import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidenav from '../../components/SideNav/SideNav';
import Servicecontent from '../../components/Service/ServiceContent';

const Service = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <Sidenav/>
                <Servicecontent/>
            </div>
        </div>
    );
}

export default Service;
