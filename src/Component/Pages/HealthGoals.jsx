import { useState } from "react";
import healthImage from "../../assets/health.png";
import "../stylingCSS/Health-goals.css";

export default function PersonaINFO() {
  const [handFormData, setFormData] = useState({
    CoreHealth: "",
    Fitness: "",
    GeneralWellness: "",
    ConditionSpecific: "",
    coreWeightGoal: "",
  });

  
  const handleChanges = (e) => {
    setFormData({ ...handFormData, [e.target.name]: e.target.value });
  };

  const [errorFields, setErrorFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = [];

    if (!handFormData.CoreHealth) missingFields.push("Core Weight & Goals");
    if (!handFormData.Fitness) missingFields.push("Fitness & Performance Goals");
    if (!handFormData.GeneralWellness) missingFields.push("General Wellness");
    if (!handFormData.ConditionSpecific) missingFields.push("Condition-Specific Goals");
    if (!handFormData.coreWeightGoal) missingFields.push("Final Core Weight Goal");

    if (missingFields.length > 0) {
      setErrorFields(missingFields);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setErrorFields([]); // Clear errors if everything is valid
  };

  return (
    <section className="PersonaINFO-container bg-white">

      {errorFields.length > 0 && (
        <div
          className="erro-message position-absolute top-0 end-0 p-2 m-3  shadow rounded"
          style={{ animation: "fadeIn 0.3s ease-in-out" }}
        >
          {errorFields.map((field) => (
            <p key={field} className="text-danger m-0">
              <i className="bi bi-x-circle px-2"></i> {field} is required!
            </p>
          ))}
        </div>
      )}

      <div>
        <p className="text-center display-5 fw-bold">
          What Are Your Health Goals{" "}
          <img src={healthImage} className="title-img" alt="health" />
        </p>
        <p className="text-center text-muted">
          We'll set your daily nutrition targets to fit your goals
        </p>
      </div>

      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <select
          name="CoreHealth"
          className={`form-select mb-3 ${errorFields.includes("Core Weight & Goals") ? "input-error" : ""}`}
          value={handFormData.CoreHealth}
          onChange={handleChanges}
        >
          <option value="" disabled>Core Weight & Goals</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Weight Gain">Weight Gain</option>
          <option value="Maintain Weight">Maintain Weight</option>
        </select>

        <select
          name="Fitness"
          className={`form-select mb-3 ${errorFields.includes("Fitness & Performance Goals") ? "input-error" : ""}`}
          value={handFormData.Fitness}
          onChange={handleChanges}
        >
          <option value="" disabled>Fitness & Performance Goals</option>
          <option value="muscle-building">Muscle Building</option>
          <option value="strength-gain">Strength Gain</option>
          <option value="improve-fitness">Improve Fitness</option>
          <option value="endurance">Endurance</option>
        </select>

        <select
          name="GeneralWellness"
          className={`form-select mb-3 ${errorFields.includes("General Wellness") ? "input-error" : ""}`}
          value={handFormData.GeneralWellness}
          onChange={handleChanges}
        >
          <option value="" disabled>General Wellness</option>
          <option value="Improve Health">Improve Health & Wellness</option>
          <option value="Boost Energy">Boost Energy</option>
          <option value="Mental Wellness">Mental Health Wellness</option>
          <option value="Healthy Aging">Healthy Aging</option>
        </select>

        <select
          name="ConditionSpecific"
          className={`form-select mb-3 ${errorFields.includes("Condition-Specific Goals") ? "input-error" : ""}`}
          value={handFormData.ConditionSpecific}
          onChange={handleChanges}
        >
          <option value="" disabled>Condition-Specific Goals</option>
          <option value="Heart Health">Heart Health</option>
          <option value="Diabetes-Friendly">Diabetes-Friendly</option>
          <option value="Hypertension-Friendly">Hypertension-Friendly</option>
          <option value="POC Support">POC Support</option>
        </select>

        <select
          name="coreWeightGoal"
          className={`form-select mb-3 ${errorFields.includes("Final Core Weight Goal") ? "input-error" : ""}`}
          value={handFormData.coreWeightGoal}
          onChange={handleChanges}
        >
          <option value="" disabled>Final Core Weight Goal</option>
          <option value="Lose Fat">Lose Fat</option>
          <option value="Gain Muscle">Gain Muscle</option>
        </select>

        <div className="d-flex justify-content-between">
          <button type="button" className="back-btn-info w-30">Back</button>
          <button type="submit" className="btn-next w-30">Next</button>
        </div>
      </form>
    </section>
  );
}
