import "../styles/WhyChoose.css";

import {
  FaChalkboardTeacher,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

import {
  MdLiveTv,
} from "react-icons/md";

import {
  RiMoneyRupeeCircleLine,
} from "react-icons/ri";

function WhyChoose() {
  const features = [
    {
      title: "Expert Mentors",
      desc: "Learn from experienced professionals who have worked in top companies.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Live Interactive Classes",
      desc: "Attend live sessions, ask questions, and learn through real-time interaction.",
      icon: <MdLiveTv />,
    },
    {
      title: "Affordable Pricing",
      desc: "Premium quality education at student-friendly prices with lifetime access.",
      icon: <RiMoneyRupeeCircleLine />,
    },
    {
      title: "Placement Assistance",
      desc: "Resume building, mock interviews, and complete career guidance.",
      icon: <FaBriefcase />,
    },
    {
      title: "Industry Certificates",
      desc: "Earn certificates to showcase your skills and strengthen your resume.",
      icon: <FaCertificate />,
    },
    {
      title: "Hands-on Projects",
      desc: "Build real-world projects to gain practical experience and confidence.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <section className="why-section">

      <div className="why-heading">

        <span>WHY LEARNHUB</span>

        <h2>Why Thousands of Students Choose LearnHub</h2>

        <p>
          We combine expert guidance, practical learning, and career support
          to help students build industry-ready skills and achieve their goals.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="icon-box">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChoose;