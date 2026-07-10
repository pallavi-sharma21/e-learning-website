import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import CourseSection from "../components/dashboard/CourseSection";
import Performance from "../components/dashboard/Performance";
import ProfileCard from "../components/dashboard/ProfileCard";

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