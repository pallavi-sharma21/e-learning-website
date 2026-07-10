import {
  FaStar,
  FaUsers,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/Courses.css";

function Courses() {
  const courses = [
    {
      title: "Web Development",
      desc: "HTML, CSS, JavaScript, React",
      img: "/src/assets/webd.jpg",
      rating: "4.9",
      students: "2.5k",
      duration: "12 Weeks",
      level: "Beginner",
    },
    {
      title: "Data Science",
      desc: "Python, Machine Learning & AI",
      img: "/src/assets/Data-Science.jpg",
      rating: "4.8",
      students: "1.8k",
      duration: "14 Weeks",
      level: "Intermediate",
    },
    {
      title: "UI/UX Design",
      desc: "Figma, Wireframes & Prototyping",
      img: "/src/assets/ux_design-1.jpg",
      rating: "4.7",
      students: "1.3k",
      duration: "10 Weeks",
      level: "Beginner",
    },
    {
      title: "Mobile App Development",
      desc: "React Native & Android",
      img: "/src/assets/app development.jpg",
      rating: "4.8",
      students: "900",
      duration: "11 Weeks",
      level: "Intermediate",
    },
    {
      title: "Backend Development",
      desc: "Node.js, Express & APIs",
      img: "/src/assets/backend.jpg",
      rating: "4.9",
      students: "1.5k",
      duration: "13 Weeks",
      level: "Advanced",
    },
    {
      title: "Python Programming",
      desc: "Python from Beginner to Advanced",
      img: "/src/assets/python.jpg",
      rating: "4.8",
      students: "2.2k",
      duration: "10 Weeks",
      level: "Beginner",
    },
  ];

  return (
    <section className="courses-section">

      <div className="section-heading">

        <span>POPULAR COURSES</span>

        <h2>Upgrade Your Skills With Industry Ready Courses</h2>

        <p>
          Learn from experienced mentors through practical projects,
          live classes, and career-focused learning paths.
        </p>

      </div>

      <div className="courses-grid">

        {courses.map((course, index) => (

          <div className="course-card" key={index}>

            <div className="course-image">

              <img src={course.img} alt={course.title} />

              <span className="course-level">
                {course.level}
              </span>

            </div>

            <div className="course-content">

              <h3>{course.title}</h3>

              <p>{course.desc}</p>

              <div className="course-details">

                <span>
                  <FaStar />
                  {course.rating}
                </span>

                <span>
                  <FaUsers />
                  {course.students}
                </span>

                <span>
                  <FaClock />
                  {course.duration}
                </span>

              </div>

              <button className="course-btn">

                Enroll Now

                <FaArrowRight />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Courses;