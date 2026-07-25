import "./../../styles/Dashboard/WelcomeCard.css";

function WelcomeCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="welcome-card">
      <div className="welcome-text">
        <h1>Welcome back, {user?.fullName || "Student"} 👋</h1>

        <p>
          Ready to continue your learning journey today?
        </p>
      </div>

      <div className="welcome-image">
        
      </div>
    </div>
  );
}

export default WelcomeCard;