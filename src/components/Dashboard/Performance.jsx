import "../../styles/dashboard/Performance.css";

function Performance() {
  return (
    <div className="performance-section">
      <h2>Performance Overview</h2>

      <div className="performance-grid">

        <div className="performance-card">
          <h3>Weekly Learning</h3>
          <h1>12 hrs</h1>
          <p>+3 hrs from last week</p>
        </div>

        <div className="performance-card">
          <h3>Assignments Completed</h3>
          <h1>18</h1>
          <p>Excellent progress</p>
        </div>

        <div className="performance-card">
          <h3>Quiz Average</h3>
          <h1>92%</h1>
          <p>Keep it up!</p>
        </div>

        <div className="performance-card">
          <h3>Current Streak</h3>
          <h1>15 Days 🔥</h1>
          <p>Learning consistently</p>
        </div>

      </div>
    </div>
  );
}

export default Performance;