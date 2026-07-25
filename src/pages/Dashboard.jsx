import Sidebar from "../components/Dashboard/Sidebar";
import TopNavbar from "../components/Dashboard/TopNavbar";
import WelcomeCard from "../components/Dashboard/WelcomeCard";
import StatsCards from "../components/Dashboard/StatsCards";
import CourseSection from "../components/Dashboard/CourseSection";
import Performance from "../components/Dashboard/Performance";
import ProfileCard from "../components/Dashboard/ProfileCard";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="dashboard-main">

        {/* TOP NAVBAR */}
        <TopNavbar />

        {/* PAGE CONTENT */}
        <div className="dashboard-content-area">

          <WelcomeCard />
          <StatsCards />

          <div className="dashboard-content">

            {/* LEFT SECTION */}
            <div className="left-section">
              <CourseSection />
              <Performance />
            </div>

            {/* RIGHT SECTION */}
            <div className="right-section">
              <ProfileCard />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;