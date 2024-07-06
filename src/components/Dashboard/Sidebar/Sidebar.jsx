import React from "react";
import { FcTwoSmartphones } from "react-icons/fc";
import { IoBagAddSharp } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "/logo.svg";

const Header = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <nav className={styles.navLinks}>
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
