import React from 'react';
import '../../assets/css/template.css';
import Navbar from '../../components/Navbar';
import Dashboardcontent from '../../components/DashboardContent';
import Sidenav from '../../components/SideNav';

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
