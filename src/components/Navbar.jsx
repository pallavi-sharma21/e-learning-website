import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <FaGraduationCap className="logo-icon" />
        <h2>LearnHub</h2>
      </Link>

      {/* Navigation Links */}
<ul className={menuOpen ? "nav-links active" : "nav-links"}>

  <li>
    <NavLink to="/" onClick={closeMenu}>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/about" onClick={closeMenu}>
      About
    </NavLink>
  </li>

  <li>
    <NavLink to="/courses" onClick={closeMenu}>
      Courses
    </NavLink>
  </li>

  <li>
    <NavLink to="/categories" onClick={closeMenu}>
      Categories
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact" onClick={closeMenu}>
      Contact
    </NavLink>
  </li>

  {/* Mobile Buttons */}
  <li className="mobile-buttons">

    <Link to="/login" onClick={closeMenu}>
      <button className="login-btn">
        Login
      </button>
    </Link>

    <Link to="/signup" onClick={closeMenu}>
      <button className="signup-btn">
        Get Started
      </button>
    </Link>

  </li>

</ul>

      {/* Buttons */}
      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">
            Get Started
          </button>
        </Link>

      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;