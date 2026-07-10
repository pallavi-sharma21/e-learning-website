import "../styles/Categories.css";

function Categories() {

  const categories = [
    {
      icon: "🌐",
      title: "Web Development",
      courses: "120+ Courses",
      desc: "Learn HTML, CSS, JavaScript, React and modern web technologies.",
      link: "web-development"
    },
    {
      icon: "🐍",
      title: "Python Programming",
      courses: "80+ Courses",
      desc: "Master Python from beginner to advanced with real-world projects.",
      link: "python"
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      courses: "65+ Courses",
      desc: "Create beautiful interfaces using Figma and modern design tools.",
      link: "ui-ux"
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      courses: "45+ Courses",
      desc: "Build intelligent applications using AI and Machine Learning.",
      link: "ai"
    },
    {
      icon: "📊",
      title: "Data Science",
      courses: "70+ Courses",
      desc: "Analyze data using Python, Pandas, NumPy and visualization.",
      link: "data-science"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      courses: "55+ Courses",
      desc: "Develop Android and React Native mobile applications.",
      link: "mobile-development"
    }
  ];


  return (

    <section className="categories-page">


      <div className="categories-header">

        <h1>
          Explore Learning Categories
        </h1>

        <p>
          Choose from industry-focused courses and start building
          skills that help you grow your career.
        </p>

      </div>



      <div className="categories-grid">


        {
          categories.map((category,index)=>(


            <div 
              className="category-card"
              key={index}
            >


              <div className="category-icon">
                {category.icon}
              </div>


              <span className="course-count">
                {category.courses}
              </span>


              <h2>
                {category.title}
              </h2>


              <p>
                {category.desc}
              </p>



              <button>
                Explore Courses →
              </button>


            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Categories;