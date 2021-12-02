import React from 'react';
import '../../assets/css/template.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidenav from '../../components/SideNav/SideNav';
import Sparepartcontent from '../../components/SparePart/SparePartContent';

const Sparepart = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <Sidenav/>
                <Sparepartcontent/>
            </div>
        </div>
    );
}

export default Sparepart;
