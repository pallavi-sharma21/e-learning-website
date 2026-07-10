import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">

      {/* Hero Section */}
      <div className="about-heading">
        <span>ABOUT LEARNHUB</span>

        <h1>Empowering Every Student to Learn, Grow & Succeed</h1>

        <p>
          LearnHub is a modern e-learning platform designed to help students
          gain practical skills, build real-world projects, and prepare for
          successful careers in technology.
        </p>
      </div>

      {/* About Content */}
      <div className="about-container">

        <div className="about-image">
          <img
            src="/src/assets/about img.jpg"
            alt="Students Learning"
          />
        </div>

        <div className="about-content">

          <span>WHO WE ARE</span>

          <h2>Your Learning Partner for a Better Future</h2>

          <p>
            LearnHub is an online learning platform dedicated to providing
            industry-focused education through expert mentors, live classes,
            practical projects, and career guidance.
          </p>

          <p>
            Our goal is to make quality education accessible, engaging, and
            affordable so every learner can confidently achieve their career
            aspirations.
          </p>

          <ul>
            <li>✔ Expert Mentors from Industry</li>
            <li>✔ Live Interactive Learning</li>
            <li>✔ Hands-on Real World Projects</li>
            <li>✔ Placement Assistance</li>
            <li>✔ Industry Recognized Certificates</li>
            <li>✔ Lifetime Course Access</li>
          </ul>

        </div>

      </div>

      {/* Mission Section */}
      <div className="mission-section">

        <div className="mission-card">
          <div className="mission-icon">🎯</div>

          <h3>Our Mission</h3>

          <p>
            To provide affordable, practical and industry-ready education that
            helps students build successful careers.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">🌍</div>

          <h3>Our Vision</h3>

          <p>
            To become one of the most trusted online learning platforms,
            empowering learners worldwide through innovation and quality
            education.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">💡</div>

          <h3>Our Values</h3>

          <p>
            Excellence, Innovation, Integrity, Continuous Learning and Student
            Success remain at the heart of everything we do.
          </p>
        </div>

      </div>

      {/* Statistics */}
      <div className="stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Students Enrolled</p>
        </div>

        <div className="stat-box">
          <h2>150+</h2>
          <p>Professional Courses</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Expert Mentors</p>
        </div>

        <div className="stat-box">
          <h2>95%</h2>
          <p>Placement Assistance</p>
        </div>

      </div>

      {/* Call To Action */}

      <div className="about-cta">

        <h2>Start Your Learning Journey Today</h2>

        <p>
          Join thousands of students who are already building successful
          careers with LearnHub.
        </p>

        <Link to="/courses">
  <button>
    Explore Courses
  </button>
</Link>

      </div>

    </section>
  );
}

export default About;