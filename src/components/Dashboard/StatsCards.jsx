import {
  FaBookOpen,
  FaCheckCircle,
  FaCertificate,
  FaClock,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import "../../styles/dashboard/StatsCards.css";

function StatsCards() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const enrolled =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setCourses(enrolled);

  }, []);

  const totalCourses = courses.length;

  const completedCourses = Math.floor(totalCourses * 0.3);

  const certificates = completedCourses;

  const learningHours = totalCourses * 8;

  return (

    <div className="stats-container">

      <div className="stat-card">

        <FaBookOpen className="stat-icon" />

        <h3>My Courses</h3>

        <p>{totalCourses}</p>

      </div>

      <div className="stat-card">

        <FaCheckCircle className="stat-icon" />

        <h3>Completed</h3>

        <p>{completedCourses}</p>

      </div>

      <div className="stat-card">

        <FaCertificate className="stat-icon" />

        <h3>Certificates</h3>

        <p>{certificates}</p>

      </div>

      <div className="stat-card">

        <FaClock className="stat-icon" />

        <h3>Learning Hours</h3>

        <p>{learningHours}</p>

      </div>

    </div>

  );

}

export default StatsCards;