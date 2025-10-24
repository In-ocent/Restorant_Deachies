import LogInImage from '../../assets/login.png';
import '../stylingCSS/Login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); //  Added missing state

  const maskValue = (value, show) => (show ? value : "*".repeat(value.length));

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Empty fields are not allowed");
    }
     else {
      setError("");
    }
  };

  return (
    <section className="container py-5 signup-section">
      <div className="row g-5 p-5 rounded overflow-hidden">

        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={LogInImage}
            alt="Sign up illustration"
            className="img-fluid h-100 w-100 object-fit-cover border rounded-3"
          />
        </div>

        {/* Right Form */}
        <div className="Right-Form col-md-6 bg-white p-5 d-flex flex-column justify-content-center border rounded-3 position-relative">

          {error && (
            <p className="erro-message position-absolute top-0 end-0 p-2 bg-danger text-white small rounded">
              <i className="bi bi-x-circle me-1"></i> {error}
            </p>
          )}

         <div className='text-center mb-3 fw-bold text-dark'>
             <p className=" mb-3 display-4 fw-bold text-dark">Login</p>
          <p className="mb-4  mt-2 h6 text-muted">
            Welcome Back, Login to continue
          </p>
         </div>

          <form>
            <div className="d-flex flex-column gap-3">
              <input
                type="text"
                value={email}
                placeholder="Email or phone number"
           
                onChange={(e) => setEmail(e.target.value)} 
                 className={`form-control pe-5 ${error ? "error-input" : ""}`} 
              />

              {/* Password */}
              <div className="position-relative">
                <input
                  type="text"
                  value={maskValue(password, showPassword)}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                 
                  style={{ fontFamily: "monospace" }}
                  className={` form-control pe-5 ${error ? "error-input" : ""}`} 
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-icon"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <Link to="/reset-password" className="text-end text-success fw-bold text-decoration-none">
                Forgot Password?
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-danger w-100 mt-5"
              onClick={handleSubmit} 
            >
              Log In
            </button>
          </form>

          <p className="mt-3 text-center text-muted">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none text-success">
              Sign Up
            </Link>
          </p>
          
        </div>
      </div>
    </section>
  );
}
