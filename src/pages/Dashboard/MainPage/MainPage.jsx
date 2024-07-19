import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import Sidebar from "../../../components/Dashboard/Sidebar/Sidebar.jsx";
import "./MainPage.css";
import adminLogo from "/public/images/Admin.png";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const MainPage = () => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const dayNumber = today.getDate();
    const monthName = today.toLocaleDateString("en-US", { month: "long" });
    const formattedDate = `${dayName}, ${dayNumber} ${monthName}`;
    return (
        <main className="dashboard">
            <Sidebar />
            <div className="rightSide">
                <div className="d-header">
                    <div className="admin-box">
                        <img
                            className="admin-logo"
                            src={adminLogo}
                            alt="admin logo"
                        />
                        <span>
                        <h4>Hi, Admin</h4>
                        <p className="date">{formattedDate}</p>
                        </span>
                    </div>
                    <Link to="/admin/dashboard/add-product" className="add-btn">
                        Add Product
                        <FaCartPlus />
                    </Link>
                </div>
                <div className="cards-box">
                    <div className="card">
                        <p>Sales</p>
                        <h2>$6,598.67</h2>
                        <div className="flex-center">
                            <RxArrowTopRight />
                            +2.5%
                            <span>vs last month</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>Orders</p>
                        <h2>53</h2>
                        <div className="flex-center">
                            <RxArrowTopRight />
                            +2.5% 
                            <span> vs last month</span>
                        </div>
                    </div>
                    <div className="card">
                        <p>Avg order value</p>
                        <h2>$198.87</h2>
                        <div className="flex-center">
                            <RxArrowTopRight />
                            +2.5%
                            <span>vs last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainPage;
