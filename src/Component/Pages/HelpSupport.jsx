import React from "react";
import munchLogo from "../../assets/munch-logo.png";
import profiles from "../../assets/profile-image.jpg";
import { FaVectorSquare } from "react-icons/fa";
import '../../Component/stylingCSS/HelpSupport.css'
import { Icon } from "lucide-react";

const HelpSupportApp = () => {
  return (
    <section className="app-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <img src={munchLogo} alt="Logo" />
        </div>

        <nav className="menu">
          <MenuItem icon={<FaVectorSquare />} title="Meal Planner" subtitle="Plan your daily meals" />
          <MenuItem icon={<i className="bi bi-person-fill" />} title="Profile & Settings" subtitle="Manage your profile" active />
          <MenuItem icon={<i className="bi bi-heart" />} title="Favorite Meals" subtitle="View your saved meals" />
          <MenuItem icon={<i className="bi bi-graph-up" />} title="Subscription" subtitle="Upgrade to premium" />
          <MenuItem icon={<i className="bi bi-arrow-clockwise " />} title="History" subtitle="View meal history" />

          <hr />

          <MenuItem icon={<i className="bi bi-question-circle" />} title="Help & Support" subtitle="Get help and support" />
          <MenuItem icon={<i className="bi bi-box-arrow-right text-danger" />} title="Sign Out" subtitle="" />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
          <main className="content w-100 ">
            <header className="content-header w-100 shadow-sm p-3 rounded">
            <h1>Profile</h1>
            <img src={profiles} className="profile-pic" alt="Profile" />
            </header>

            <div className="error-box ">
            <h2>Profile Summary</h2>
            <p className="error-text">We couldn't load your profile details. Try again later!</p>
            <div className="error-icon text-center m-5"><span className="border-icon ">!</span></div>
            <button className="retry-btn">Retry</button>
            </div>
          </main>



    </section>
  );
};

// Reusable Menu Component
const MenuItem = ({ icon, title, subtitle, active }) => (
  <div className={`menu-item ${active ? "active" : ""}`}>
    <span className="icon ">{icon}</span>
    <div>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>

);

export default HelpSupportApp;
