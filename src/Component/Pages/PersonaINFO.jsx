import { useState } from "react";
import healthImage from "../../assets/health.png";
import "../styleingCSS/personalinfo.css";

export default function PersonalINFO() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "",
    activity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   Erro handle 👇
  const [error, setError] = useState({ field: "", message: "" });


    const handleSubmit = (e) => {
        e.preventDefault();

        const missingFields = [];

        if (!formData.age) missingFields.push("age");
        if (!formData.weight) missingFields.push("weight");
        if (!formData.height) missingFields.push("height");
        if (!formData.gender) missingFields.push("gender");
        if (!formData.activity) missingFields.push("activity");

        if (missingFields.length > 0) {
            setError({ field: missingFields, message: "Please fill all required fields" });
            return;
        }

        setError({ field: [], message: "" });
    };



  return (
    <section className=" container-lg position-relative ">

        {/* erro  displayer */}
            {error.message && <p className='erro-message position-absolute top-0 end-0 p-2  mt-3'> 
            <i class="bi bi-x-circle px-2"></i>{error.message}</p>}

            <div className=" text-center justify-content-center ">
                <div className="mb-3 text-center fw-bold text-dark">
                    <h1>Set Up Your Account <img  src={healthImage} alt="Meal" className="title-img" /></h1>
                </div>
                    <p className="subtitle mb-3 .no-break">
                    Let's get started. We'll need to know a little more about you
                    </p>

            <form className="mt-2 d-flex flex-column gap-3 fomin-input " onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`form-input form-control ${error.field.includes("age") ? "error-input" : ""}`}

                    
                />
                <input
                    type="text"
                    name="weight"
                    placeholder="Weight (Kg/lbs)"
                    value={formData.weight}
                    onChange={handleChange}
                   className={`form-input form-control ${error.field.includes("weight") ? "error-input" : ""}`}


                />
                <input
                    type="text"
                    name="height"
                    placeholder="Height (cm/inches)"
                    value={formData.height}
                    onChange={handleChange}
                  className={`form-input form-control ${error.field.includes("height") ? "error-input" : ""}`}

                />
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                   className={`form-input form-control ${error.field.includes("gender") ? "error-input" : ""}`}


                >
                    <option value="" className="w-100">Gender</option>
                    <option value="male"  className="w-100" >Male</option>
                    <option value="female"  className="w-100">Female</option>
                    <option value="other"  className="w-100">Other</option>
                </select>
                <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                   className={`form-input form-control ${error.field.includes("activity") ? "error-input" : ""}`}
                >
                    <option value=""  className="w-100 ">Activity Level</option>
                    <option value="low"  className="w-100">Low</option>
                    <option value="moderate"  className="w-100">Moderate</option>
                    <option value="high"  className="w-100">High</option>
                </select>
                    
                <div className="d-flex justify-content-between">
                    {error.message && (
                        <button type="button" className="back-btn-info w-30">
                            Back
                        </button>
                    )}

                    <button type="submit" className="btn-next w-30">
                        Next
                    </button>
                </div>

            </form>
        </div>
    </section>
  );
}
