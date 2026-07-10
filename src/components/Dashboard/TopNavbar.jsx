import React from "react";
import "../../styles/dashboard/TopNavbar.css";

const TopNavbar = () => {
  return (
    <header className="top-navbar">
      
      {/* Left - Logo */}
      <div className="nav-left">
        <h2 className="logo">LearnHub</h2>
      </div>

      {/* Center - Search */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search courses, topics..."
          className="search-input"
        />
      </div>

      {/* Right - Icons + Profile */}
      <div className="nav-right">

        <div className="icon">🔔</div>
        <div className="icon">💬</div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="avatar"
          />
          <span className="username">Pallavi</span>
        </div>

      </div>
    </header>
  );
};

export default TopNavbar;