import React, { useState } from "react";
import { FcTwoSmartphones } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagAddSharp, IoCloseSharp } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";

import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "/logo.svg";

const Header = () => {
    const [activeSidebar, setActiveSidebar] = useState(false);

    const handleToggle = () => {
        setActiveSidebar(!activeSidebar);
        console.log(activeSidebar);
    };
    return (
        <aside
            className={`${
                activeSidebar ? `${styles.showSidebar}` : `${styles.sidebar}`
            } ${styles.sidebar}`}
        >
            <div className={styles.between}>
                <div
                    className={`${
                        activeSidebar ? styles.showLogo : styles.logo
                    }`}
                >
                    <Link to='/admin/dashboard'>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.hamburger} onClick={handleToggle}>
                    {activeSidebar ? (
                        <IoCloseSharp size={28} />
                    ) : (
                        <GiHamburgerMenu />
                    )}
                </div>
            </div>
            <nav
                className={`${activeSidebar && `${styles.showNavLinks}`} ${
                    styles.navLinks
                }`}
            >
                <ul>
                    <Link to="/admin/dashboard">
                        <li>
                            <MdDashboard /> Dashboard
                        </li>
                    </Link>
                    <Link to="/admin/dashboard">
                        <li>
                            <IoBagAddSharp /> Add Product
                        </li>
                    </Link>
                    <Link to="/admin/dashboard">
                        <li>
                            <FcTwoSmartphones /> All Products
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <MdLogout /> Logout
                        </li>
                    </Link>
                </ul>
            </nav>
        </aside>
    );
};

export default Header;
