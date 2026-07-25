import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHouse,
  FaBookOpen,
  FaRightFromBracket,
  FaGraduationCap,
} from "react-icons/fa6";

import "../../styles/Dashboard/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-top">

        <div className="sidebar-logo">
          <FaGraduationCap className="logo-icon" />
          <h2>LearnHub</h2>
        </div>

        <div className="sidebar-greeting">
          <p>Hello,</p>
          <h3>{user?.name || "Student"} 👋</h3>
        </div>

        <p className="menu-title">MENU</p>

        <nav className="sidebar-menu">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FaHouse />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FaBookOpen />
            <span>My Courses</span>
          </NavLink>

        </nav>

      </div>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        <FaRightFromBracket />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default Sidebar;