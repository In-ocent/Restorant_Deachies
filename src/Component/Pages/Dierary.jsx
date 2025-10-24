import "../stylingCSS/Dietary.css";
import healthImage from "../../assets/health.png";
import first_mills_1 from "../../assets/first-mills-1.jpg";
import first_mills_2 from "../../assets/first-mills-2.jpg";
import first_mills_3 from "../../assets/first-mills-3.jpg";
import first_mills_4 from "../../assets/first-mills-4.jpg";

export default function DietaryApp() {
    const dietSections = [
        {
            id: 1,
            image: first_mills_1,
            title: "Lifestyle diets",
            description: "Vegan, Vegetarian, Pescatarian (fish, no meat), Flexitarian (mostly plant-based, occasional meat), Low-carb, Low-fat, Paleo, Whole30.",
            category: "lifestyle"
        },
        {
            id: 2,
            image: first_mills_2,
            title: "Cultural / Religious Diets",
            description: "Halal, Kosher",
            category: "cultural"
        },
        {
            id: 3,
            image: first_mills_3,
            title: "Medical / health oriented diets",
            description: "Gluten free, Dairy free / Lactose-Free, Low sodium (for Hypertension support), Low sugar / Diabetes-Friendly, Anti-inflammatory",
            category: "medical"
        },
        {
            id: 4,
            image: first_mills_4,
            title: "Nigerian-Friendly Options",
            description: "Traditional Nigerian Balanced Diet (rice, beans, soups, plantain, yam, protein), High-Protein Nigerian Diet (beans, fish, chicken, goat meat, egusi, moi-moi), Low-Carb Nigerian Diet (swallow alternatives like oat swallow, vegetable-heavy meals), Plant-Based Nigerian Diet (okra, vegetables, beans, moi-moi, no meat/fish), Weight-Loss Nigerian Diet (controlled portions, grilled proteins, less fried/oily meals)",
            category: "nigerian"
        }
    ];

    const handleDietSelect = (dietId) => {
        console.log(`Selected diet section: ${dietId}`);
    };

    return (
        <section className="dietary-container">
                {/* erro  */}
            <p className="erro-message position-absolute top-0 end-0 p-2 bg-danger text-white small rounded">
              <i className="bi bi-x-circle me-1"></i>Please at least one dietary preference to continue
            </p>

            <div className="dietary-header">
                <p className="mb-3 text-center fw-bold text-dark display-5">
                    Dietary Preference <img src={healthImage} className="health-img w-4" alt="Health" />
                </p>
                <p className="dietary-subtitle">Select the foods and styles of eating that work well for you</p>
            </div>
            <div className="dietary-sections">
                {dietSections.map((section) => (
                    <div key={section.id} className="diet-card">
                        <div className="diet-image">
                            <img src={section.image} alt={section.title} className="diet-img" />
                        </div>
                        <div className="diet-content">
                            <h3 className="diet-title">{section.title}</h3>
                            <p className="diet-description">{section.description}</p>
                        </div>
                        <div className="diet-checkbox">
                            <input
                                type="checkbox"
                                id={`diet-${section.id}`}
                                className="checkbox-input"
                                onChange={() => handleDietSelect(section.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="dietary-footer">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
            </div>
        </section>
    );
}