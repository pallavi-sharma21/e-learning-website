import {
  FaArrowRight,
  FaPlayCircle,
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Left Section */}
      <div className="hero-left">

        <span className="hero-tag">
          🚀 India's Growing Online Learning Platform
        </span>

        <h1>
          Master Skills That
          <span> Build Your Future.</span>
        </h1>

        <p>
          Learn from industry experts through hands-on projects, live mentorship,
          and career-focused courses designed to help you achieve your dream job.
        </p>

        {/* Hero Buttons */}
        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Courses
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            <FaPlayCircle />
            Watch Demo
          </button>

        </div>

        {/* Statistics */}
        <div className="hero-stats">

          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h2>10K+</h2>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <FaBookOpen className="stat-icon" />
            <h2>500+</h2>
            <p>Courses</p>
          </div>

          <div className="stat-card">
            <FaChalkboardTeacher className="stat-icon" />
            <h2>100+</h2>
            <p>Mentors</p>
          </div>

          <div className="stat-card">
            <FaAward className="stat-icon" />
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>

        </div>

      </div>

      {/* Right Section */}
      <div className="hero-right">

        <img
          src="/src/assets/students.jpg"
          alt="Students Learning"
        />

      </div>

    </section>
  );
}

export default Hero;