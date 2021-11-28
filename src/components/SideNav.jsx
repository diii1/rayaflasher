import React from 'react';
import '../assets/css/template.css';
import Custom from './sideNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const column = <FontAwesomeIcon icon={solid('chart-pie')} />
const hammer = <FontAwesomeIcon icon={solid('hammer')} />
const cog = <FontAwesomeIcon icon={solid('gear')} />
const cogs = <FontAwesomeIcon icon={solid('gears')} />

const Sidenav = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <a href="as" className={`nav-link ${Custom.nav}`}>
                            <div className={`sb-nav-link-icon ${Custom.sideIcon}`}>{ column }</div>
                            Dashboard
                        </a>
                        <a href="as" className={`nav-link ${Custom.nav}`}>
                            <div className={`sb-nav-link-icon ${Custom.sideIcon}`}>{ hammer }</div>
                            Service
                        </a>
                        <a href="as" className={`nav-link ${Custom.nav}`}>
                            <div className={`sb-nav-link-icon ${Custom.sideIcon}`}>{ cogs }</div>
                            Spare Part
                        </a>
                        <div className="fixed-bottom mb-2">
                            <a href="as" className={`nav-link ${Custom.nav}`}>
                                <div className={`sb-nav-link-icon ${Custom.sideIcon}`}>{ cog }</div>
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidenav;
