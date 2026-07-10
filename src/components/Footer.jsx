import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo">
            <FaGraduationCap />
            <h2>LearnHub</h2>
          </div>

          <p>
            Empowering learners with quality education, interactive courses,
            and a seamless online learning experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>

          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Connect With Us</h3>

          <p>Follow us on our social platforms.</p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>LearnHub</strong>. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;