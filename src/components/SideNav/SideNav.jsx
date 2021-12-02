import React from 'react';
import '../../assets/css/template.css';
import Custom from './sideNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useLocation } from "react-router";

const column = <FontAwesomeIcon icon={solid('chart-pie')} />
const hammer = <FontAwesomeIcon icon={solid('hammer')} />
const cog = <FontAwesomeIcon icon={solid('gear')} />
const cogs = <FontAwesomeIcon icon={solid('gears')} />

const navMenuList = [
    {
        name: "Dasboard",
        icon: column,
        path: "/"
    },
    {
        name: "Service",
        icon: cogs,
        path: "service"
    },
    {
        name: "Sparepart",
        icon: hammer,
        path: "sparepart"
    },
]

const Sidenav = () => {
    const location = useLocation();
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {navMenuList.map((menu) => {
                            return (
                                <a href={menu.path} className={`${location.pathname.endsWith(menu.path) ? Custom.active : ""} nav-link ${Custom.nav}`}>
                                    <div className={`sb-nav-link-icon ${Custom.sideIcon}`}>{menu.icon}</div>
                                    {menu.name}
                                </a>
                            );
                        })}
                        <div className="fixed-bottom mb-2">
                            <a href="settings" className={`nav-link ${Custom.nav}`}>
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
