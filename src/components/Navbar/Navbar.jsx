import React from 'react';
import '../../assets/css/template.css';
import Logo from '../../assets/img/logo.png';
import Custom from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const search = <FontAwesomeIcon icon={solid('search')} />;
const notification = <FontAwesomeIcon icon={solid('bell')} />;
const users = <FontAwesomeIcon icon={solid('user')} /> ;
const bars = <FontAwesomeIcon icon={solid('bars')} /> ;

const Navbar = () => {
    return (
        <nav className={`sb-topnav navbar navbar-expand navbar-dark ${Custom.topNav}`}>
            <a 
                className={`navbar-brand ps-3 ${Custom.brand}`} 
                href="logo">
                    <img className={Custom.logoBrand} src={Logo} alt="logo" />
            </a>
            <button className={`btn btn-link btn-sm ${Custom.barsIcon}`} id="sidebarToggle" href="#!">{ bars }</button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Search for..."/>
                    <button 
                        className="btn btn-primary" 
                        type="button">{ search }
                    </button>
                </div>
            </form>
            <a className={`me-5 ${Custom.icons}`}me-5 href="as">{ notification }</a>
            <span className={`me-2 ${Custom.icons}`}>Yafi</span>
            <ul className="navbar-nav ms-auto ms-md-0 me-4 me-lg-3">
                <li className="nav-item dropdown">
                    <a 
                        className={`nav-link dropdown-toggle ${Custom.icons}`}
                        id="navbarDropdown" 
                        href="asa" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">{ users }
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
