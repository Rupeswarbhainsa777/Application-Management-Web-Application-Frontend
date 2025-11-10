import { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // You can add API call here
  };

  return (
      <div className="registration-container">
        <div className="registration-card">
          <h2 className="registration-title">Create Account</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
              />
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>

            <p className="login-link">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </form>
        </div>
      </div>
  );
};

export default Registration;
