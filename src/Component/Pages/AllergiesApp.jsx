import React, { useState } from 'react';
import '../stylingCSS/Allergies.css';
import healthImage from '../../assets/health.png'; // Adjust path as needed

const AllergiesApp = () => {
    const [commonAllergens, setCommonAllergens] = useState([]);
    const [nigerianAllergens, setNigerianAllergens] = useState([]);
    const [customCommonAllergen, setCustomCommonAllergen] = useState('');
    const [customNigerianAllergen, setCustomNigerianAllergen] = useState('');
    const [saveError, setSaveError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCheckboxChange = (setAllergens, allergen) => (e) => {
        setAllergens((prev) =>
            e.target.checked ? [...prev, allergen] : prev.filter((a) => a !== allergen)
        );
    };
    

    const handleSave = () => {
        // Simulate save success for demo (replace with actual logic)
        setSaveError(false);
        setShowSuccess(true);
        console.log('Common Allergens:', commonAllergens);
        console.log('Nigerian Allergens:', nigerianAllergens);
        console.log('Custom Common Allergen:', customCommonAllergen);
        console.log('Custom Nigerian Allergen:', customNigerianAllergen);

        // Optional: Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <section className="allergies-container">
            <div className="allergies-header">
                <h1 className="allergies-title">
                    Are There Foods You Avoid{' '}
                    <img src={healthImage} className="health-img w-4" alt="Health" />
                </h1>
                <p className="allergies-subtitle">
                    This could be due to allergies or other personal reason.
                </p>
                {saveError && (
                    <div className="save-error">
                        <span className="error-icon">⚠</span> We couldn't save your exclusions. Try
                        again later.
                    </div>
                )}
            </div>

            <div className="allergies-content">
                <div className="allergen-section">
                    <h2 className="section-title">Common Allergens</h2>
                    <div className="checkbox-group">
                        {[
                            { id: 'peanut', label: 'Peanut', icon: '🥜' },
                            { id: 'dairy', label: 'Dairy/Milk', icon: '🥛' },
                            { id: 'egg', label: 'Eggs', icon: '🥚' },
                            { id: 'shellfish', label: 'Shellfish', icon: '🦐' },
                            { id: 'soy', label: 'Soy', icon: '🌱' },
                            { id: 'fish', label: 'Fish', icon: '🐟' },
                            { id: 'wheat', label: 'Wheat', icon: '🌾' },
                            { id: 'treenuts', label: 'Tree Nuts', icon: '🌰' },
                        ].map((allergen) => (
                            <label key={allergen.id} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    id={allergen.id}
                                    checked={commonAllergens.includes(allergen.id)}
                                    onChange={handleCheckboxChange(setCommonAllergens, allergen.id)}
                                />
                                <span className="checkbox-custom" />
                                <span className="allergen-icon">{allergen.icon}</span>
                                {allergen.label}
                            </label>
                        ))}
                    </div>
                    <div className="custom-input">
                        <input
                            type="text"
                            placeholder="Add Custom common allergies"
                            value={customCommonAllergen}
                            onChange={(e) => setCustomCommonAllergen(e.target.value)}
                        />
                    </div>
                </div>

                <div className="allergen-section">
                    <h2 className="section-title">Nigerian-Specific Allergies</h2>
                    <div className="checkbox-group">
                        {[
                            { id: 'crayfish', label: 'Crayfish', icon: '🦞' },
                            { id: 'palmoil', label: 'Palm Oil', icon: '🧴' },
                            { id: 'stockfish', label: 'Stockfish', icon: '🐟' },
                            { id: 'egusi', label: 'Egusi', icon: '🌰' },
                            { id: 'snails', label: 'Snails', icon: '🐌' },
                            { id: 'bitterleaf', label: 'Bitterleaf', icon: '🍃' },
                            { id: 'groundnut', label: 'Groundnut', icon: '🥜' },
                        ].map((allergen) => (
                            <label key={allergen.id} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    id={allergen.id}
                                    checked={nigerianAllergens.includes(allergen.id)}
                                    onChange={handleCheckboxChange(setNigerianAllergens, allergen.id)}
                                />
                                <span className="checkbox-custom" />
                                <span className="allergen-icon">{allergen.icon}</span>
                                {allergen.label}
                            </label>
                        ))}
                    </div>
                    <div className="custom-input">
                        <input
                            type="text"
                            placeholder="Add Custom nigerian-specific allergies"
                            value={customNigerianAllergen}
                            onChange={(e) => setCustomNigerianAllergen(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="allergies-footer">
                <button className="back-btn">Back</button>
                <button className="save-btn" onClick={handleSave}>
                    Save
                </button>
            </div>

            {showSuccess && (
                <div className="success-popup">
                    <div className="popup-content">
                        <div className="close-btn" onClick={() => setShowSuccess(false)}>
                            ×
                        </div>
                        <div className="checkmark">✓</div>
                        <p>Your Account has been Setup & you are ready to Munch with Munch</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AllergiesApp;