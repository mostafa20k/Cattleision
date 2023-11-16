
// import { faBars, faTachometerAlt, faVideo, FaUser, faSignOutAlt } from "react-icons/fa";

import React, { useState } from 'react';
import { FaBars, FaHome, FaVideo, FaUser, FaSignOutAlt } from 'react-icons/fa'; // You can install react-icons for these icons

import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="menu">
        <div className="menu-item">
          <FaHome style={{marginRight: "10px"}}/>
          <span>{isCollapsed ? "" : "Dashboard"}</span>
        </div>
        <div className="menu-item">
          <FaVideo style={{marginRight: "10px"}}/>
          <span>{isCollapsed ? "" : "Cameras"}</span>
        </div>
        <div className="menu-item">
          <FaUser style={{marginRight: "10px"}}/>
          <span>{isCollapsed ? "" : "Account"}</span>
        </div>
        <div className="menu-item">
          <FaSignOutAlt style={{marginRight: "10px"}}/>
          <span>{isCollapsed ? "" : "Logout"}</span>
        </div>
      </div>
      
    </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="toggle-btn" onClick={handleToggle} style={{ position: 'fixed', bottom: '10px', left: '10px', cursor: 'pointer' }}>
            <FaBars style={{ marginRight: '10px', color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
     
  );
};

export default Sidebar;
