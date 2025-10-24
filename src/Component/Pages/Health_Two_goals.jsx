import { FiUser } from "react-icons/fi";
import healthImage from "../../assets/health.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylingCSS/Health_Two_goals.css";
import { Link } from "react-router-dom";

export default function PersonaINFO() {
  return (
    <section className="PersonaINFO-container">
        <div className="text-center mb-4 ">
            <p className="display-5 text-center fw-bold">What Are Your Health Goals   <img src={healthImage} className="health-img w-4" alt="health" /></p>
            <p className="text-muted">We'll set your daily nutrition targets to fit your goals</p>
          
        </div>

      <form className="needs-validation" noValidate>
        <div className="mb-3">
          <select className="form-select custom-select" defaultValue="" required>
            <option value="" disabled>Core Weight Goals</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
            <option value="maintain-weight">Maintain Weight</option>
          </select>
        </div>

        <div className="mb-3 weight-inputs d-flex gap-3">
          <input
            type="number"
            className="form-control custom-input"
            placeholder="Weight (Kg)"
            required
          />
          <input
            type="number"
            className="form-control custom-input"
            placeholder="Target Weight Change / Week (Kg)"
            required
          />
        </div>

        <div className="mb-3">
          <select className="form-select custom-select" defaultValue="" required>
            <option value="" disabled>Fitness & Performance Goals</option>
            <option value="muscle-building">Muscle Building</option>
            <option value="strength-gain">Strength Gain</option>
            <option value="improve-fitness">Improve Fitness</option>
            <option value="endurance">Endurance</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="form-select custom-select" defaultValue="" required>
            <option value="" disabled>General Wellness Goals</option>
            <option value="improve-health">Improve Health & Wellness</option>
            <option value="boost-energy">Boost Energy</option>
            <option value="mental-health">Mental Health Wellness</option>
            <option value="healthy-aging">Healthy Aging</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="form-select custom-select" defaultValue="" required>
            <option value="" disabled>Condition-Specific Goals</option>
            <option value="heart-health">Heart Health</option>
            <option value="diabetes-friendly">Diabetes-Friendly</option>
            <option value="hypertension-friendly">Hypertension-Friendly</option>
            <option value="poc-support">POC Support</option>
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/health-goals">
            <button type="button" className="btn btn-outline-secondary back-btn">
              Back
            </button>
          </Link>
          <button type="submit" className="btn btn-danger next-btn">
            Next
          </button>
        </div>
      </form>
    </section>
  );
}