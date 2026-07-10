import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (
    email === savedUser.email &&
    password === savedUser.password
  ) {
    alert("Login successful!");
    navigate("/dashboard");
  } else {
    alert("Invalid email or password!");
  }
};

  return (
    <section className="login-page">

      <div className="login-card">

        <h1>Welcome Back </h1>

        <p>
          Login to continue your learning journey with LearnHub.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>

          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="signup-link">

          <p>
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>

          <p className="back-link">
            <Link to="/">← Back to website</Link>
            </p>

        </div>

      </div>

    </section>
  );
}

export default Login;