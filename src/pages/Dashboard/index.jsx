import React from 'react';
import '../../assets/css/template.css';
import Navbar from '../../components/Navbar/Navbar'
import Dashboardcontent from '../../components/Dashboard/DashboardContent';
import Sidenav from '../../components/SideNav/SideNav';

const Dashboard = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <Sidenav/>
                <Dashboardcontent/>
            </div>
        </div>
    );
}

export default Dashboard;
