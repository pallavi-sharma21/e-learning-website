import "../styles/CoursePages.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CoursePage() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCourses(savedCourses);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      desc: "HTML, CSS, JavaScript, React, Node.js and MongoDB.",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      price: "₹999",
      rating: "5.0",
      students: "12K+ Students"
    },
    {
      id: 2,
      title: "Python Programming",
      desc: "Master Python from basics to advanced concepts.",
      category: "Python",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
      price: "₹799",
      rating: "5.0",
      students: "10K+ Students"
    },
    {
      id: 3,
      title: "UI/UX Design",
      desc: "Learn Figma, wireframes and modern design principles.",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
      price: "₹899",
      rating: "4.8",
      students: "8K+ Students"
    },
    {
      id: 4,
      title: "Data Science",
      desc: "Python, statistics, machine learning and analytics.",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      price: "₹1299",
      rating: "5.0",
      students: "15K+ Students"
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      desc: "Build AI applications using modern technologies.",
      category: "AIML",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      price: "₹1499",
      rating: "5.0",
      students: "9K+ Students"
    },
    {
      id: 6,
      title: "Mobile App Development",
      desc: "Create Android and React Native applications.",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      price: "₹999",
      rating: "4.8",
      students: "7K+ Students"
    }
  ];

  const filteredCourses = courses.filter((course) => {

    const keyword = search.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(keyword) ||
      course.desc.toLowerCase().includes(keyword) ||
      course.category.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleEnroll = (course) => {

    const alreadyEnrolled = enrolledCourses.find(
      (item) => item.id === course.id
    );

    if (alreadyEnrolled) return;

    const updatedCourses = [...enrolledCourses, course];

    setEnrolledCourses(updatedCourses);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    );

    alert("Course enrolled successfully!");
  };

  return (
    <section className="course-page">

      <div className="course-header">
        <h1>Explore Our Courses</h1>

        <p>
          Learn industry-ready skills, build real-world projects and upgrade
          your career with expert-led courses.
        </p>
      </div>

      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="category-buttons">

        {[
          "All",
          "Web Development",
          "Python",
          "UI/UX",
          "AIML",
          "Data Science"
        ].map((category) => (

          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      <div className="courses-grid">

        {filteredCourses.length > 0 ? (

          filteredCourses.map((course) => (

            <div className="course-card" key={course.id}>

              <div className="image-box">

                <img src={course.image} alt={course.title} />

                <span>{course.category}</span>

              </div>

              <div className="course-content">

                <h2>{course.title}</h2>

                <p>{course.desc}</p>

                <div className="course-info">

                  <span>⭐ {course.rating}</span>

                  <span>👨‍🎓 {course.students}</span>

                </div>

                <div className="price-row">

                  <h3>{course.price}</h3>

                  {enrolledCourses.some(
                    (item) => item.id === course.id
                  ) ? (

                    <button
                      className="enroll-btn enrolled"
                    >
                      Enrolled
                    </button>

                  ) : (

                    <button
                      className="enroll-btn"
                      onClick={() => handleEnroll(course)}
                    >
                      Enroll Now
                    </button>

                  )}

                </div>

              </div>

            </div>

          ))

        ) : (

          <h2 className="no-course">
            No courses found.
          </h2>

        )}

      </div>

      <div className="course-contact">

        <h2>Still Confused?</h2>

        <p>
          Talk with our career experts and choose the right learning path.
        </p>

        <Link to="/contact">
  <button>
    Contact Us
  </button>
</Link>

      </div>

    </section>
  );
}

export default CoursePage;