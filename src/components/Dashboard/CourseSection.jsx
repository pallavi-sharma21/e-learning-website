import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/Dashboard/CourseSection.css";

function CourseSection() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const enrolled =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    // Add dummy progress if not already present
    const updatedCourses = enrolled.map((course) => ({
      ...course,
      progress: course.progress || Math.floor(Math.random() * 60) + 20
    }));

    setCourses(updatedCourses);

  }, []);

  return (

    <div className="course-section">

      <h2>My Courses</h2>

      {
        courses.length === 0 ? (

          <div className="empty-course">

            <h3>No Enrolled Courses</h3>

            <p>
              Enroll in a course to start your learning journey.
            </p>

          </div>

        ) : (

          <div className="course-grid">

            {

              courses.map((course) => (

                <div
                  className="course-card"
                  key={course.id}
                >

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                  <h3>{course.title}</h3>

                  <p>{course.desc}</p>

                  <span>
                    Progress : {course.progress}%
                  </span>

                  <div className="progress-bar">

                    <div
                      className="progress-fill"
                      style={{
                        width: `${course.progress}%`
                      }}
                    ></div>

                  </div>

                  <Link to={`/course/${course.id}`}>
  <button>
    Continue Learning
  </button>
</Link>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default CourseSection;