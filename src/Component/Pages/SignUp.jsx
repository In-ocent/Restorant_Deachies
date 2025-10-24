import signupImage from '../../assets/image.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylingCSS/signUp.css'
import { Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const maskValue = (value, show) => (show ? value : "*".repeat(value.length));

  
  return (
    <section className="container py-5 signup-section">
      <div className="row g-5 p-5 rounded overflow-hidden shadow-sm bg-light">
      

        {/* Left Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={signupImage}
            alt="Sign up illustration"
            className="img-fluid h-100 w-100 object-fit-cover border rounded-3"
          />
        </div>

        {/* Right Form */}
        
        <div className="  Right-Form col-md-6 bg-white p-5 d-flex flex-column justify-content-center border rounded-3 position-relative">
            {/* erro  displayer */}
          
           <p className='erro-message position-absolute top-0 end-0 p-2 $red-200'> <i class="bi bi-x-circle px-2"></i>Pleas enter a valid email address </p>

          
          <p className="mb-3 text-center display-5 fw-bold text-dark">Sign Up</p>
          <p className="mb-4 text-center text-muted h6">
            Hello there, let’s get you started!
          </p>

          <form className="d-flex flex-column gap-3">

            <input type="text" className="form-control" placeholder="Full Name" />
            <input type="email" className="form-control" placeholder="Email" />
            <input type="tel" className="form-control" placeholder="Phone Number" />

            {/* Password */}
            <div className="position-relative">
              <input
                type="text"
                value={maskValue(password, showPassword)}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control pe-5"
                style={{ fontFamily: "monospace" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-icon"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="position-relative">
              <input
                type="text"
                value={maskValue(confirmPassword, showConfirm)}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="form-control pe-5"
                style={{ fontFamily: "monospace" }}
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="toggle-icon"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Checkbox */}
            <div className="form-check pt-2">
             
              <label className="mb-2 text-center  mt-2 h6 text-muted" htmlFor="agreement">
                 <input type="checkbox" className="form-check-input custom-checkbox" id="agreement" />
                <span className='fw-semibold'>
                  By registering, you agree to
                </span>{" "}
                <a href="#" className='text-decoration-none text-success fw-semibold'>
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="#" className='text-decoration-none text-success fw-semibold'>
                  Privacy Policy
                </a>
              </label>
             
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-danger w-100 fw-semibold">
              Register Account
            </button>

            <p className="text-center mt-3 text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none  text-success  fw-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      
      </div>
    </section>
  );
}
