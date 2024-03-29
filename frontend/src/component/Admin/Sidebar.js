import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Sidebar = () => {
  const [sidebarProduct, setSidebarProduct] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebarProduct = () => {
    setSidebarProduct(!sidebarProduct);
  };
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <div className={`sidebar-container ${sidebarActive ? "active" : ""}`}>
      <div className="sidebar">
        <div className="dashboard-btn" onClick={toggleSidebar}>
          <DashboardIcon />
        </div>

        <div className="sidebar-content">
          <ul className="lists">
            <Link to="/admin/dashboard">
              <li className="list">
                <a>
                  <DashboardIcon />
                  <span className="link">Dashboard</span>
                </a>
                <i className="sidebar-close-btn" onClick={toggleSidebar}>
                  <ArrowBackIosIcon />
                </i>
              </li>
            </Link>
            <div
              className={`sidebar-products ${sidebarProduct ? "active" : ""}`}
            >
              <li className="list " onClick={toggleSidebarProduct}>
                <a>
                  <ExpandMoreIcon />
                  <span className="link">Products</span>
                </a>
              </li>
              <div className="sidebar-options">
                <Link to="/admin/products">
                  <li className="list">
                    <a>
                      <PostAddIcon />
                      <span className="link">All</span>
                    </a>
                  </li>
                </Link>
                <Link to="/admin/product">
                  <li className="list">
                    <a>
                      <AddIcon />
                      <span className="link">Create</span>
                    </a>
                  </li>
                </Link>
              </div>
            </div>
            <Link to="/admin/orders">
              <li className="list">
                <a>
                  <ListAltIcon />
                  <span className="link">Orders</span>
                </a>
              </li>
            </Link>
            <Link to="/admin/users">
              <li className="list">
                <a>
                  <PeopleIcon />
                  <span className="link">Users</span>
                </a>
              </li>
            </Link>
            <Link to="/admin/reviews">
              <li className="list">
                <a>
                  <RateReviewIcon />
                  <span className="link">Reveiws</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <section className={`overlay ${sidebarActive ? "active" : ""}`}></section>
    </div>
  );
};

export default Sidebar;
