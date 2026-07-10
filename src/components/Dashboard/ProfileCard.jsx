import "../../styles/dashboard/ProfileCard.css";

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Profile"
      />

      <h2>{user?.fullName || "Student"}</h2>

      <p>{user?.email || "student@example.com"}</p>

      <p>{user?.phone || "Not Available"}</p>

      <button>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;