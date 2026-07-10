import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/CourseDetails.css";

function CourseDetails() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {

    const enrolled =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    const selectedCourse =
      enrolled.find((item) => item.id === Number(id));

    setCourse(selectedCourse);

  }, [id]);

  if (!course) {

    return (

      <h2
        style={{
          textAlign: "center",
          marginTop: "120px"
        }}
      >
        Course not found.
      </h2>

    );

  }

  return (

    <section className="course-details">

      <img
        src={course.image}
        alt={course.title}
      />

      <div className="details">

        <span>{course.category}</span>

        <h1>{course.title}</h1>

        <p>{course.desc}</p>

        <div className="detail-grid">

          <div>

            <h4>Instructor</h4>

            <p>John Anderson</p>

          </div>

          <div>

            <h4>Duration</h4>

            <p>8 Weeks</p>

          </div>

          <div>

            <h4>Level</h4>

            <p>Beginner to Advanced</p>

          </div>

          <div>

            <h4>Students</h4>

            <p>{course.students}</p>

          </div>

        </div>

        <button>
          Continue Learning
        </button>

      </div>

    </section>

  );

}

export default CourseDetails;