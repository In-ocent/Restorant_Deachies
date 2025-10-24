import React, { useState } from "react";
import profiles from "../../assets/profile-image.jpg";
import munchLogo from "../../assets/munch-logo.png";
import "../stylingCSS/Subscription.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  /** ==============================
   *  STATE MANAGEMENT
   * ============================== */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Tracks current route path

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Function to check if the current path matches a link
  const isActive = (path) => location.pathname === path;

  return (
    <section className="support-layout">
      <div className="container-all">
        <nav className="layout-wrapper">
          {/* ================================================
              SIDEBAR SECTION
          ================================================= */}
          <aside className={`vertical-navbar ${sidebarOpen ? "open" : ""}`}>
            <ul>
              {/* ---- Logo ---- */}
              <li className="logo-section">
                <img src={munchLogo} alt="Munch Logo" className="logo-image" />
              </li>

              {/* ---- Navigation Links ---- */}
              <li>
                <Link
                  to="/meal-planner"
                  className={`nav-link ${isActive("/meal-planner") ? "active" : ""}`}
                >
                  <i className="bi bi-boombox-fill fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Meal Planner</h3>
                    <p>Plan your daily meals</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className={`nav-link ${isActive("/profile") ? "active" : ""}`}
                >
                  <i className="bi bi-person fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Profile & Settings</h3>
                    <p>Manage your profile</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/favorites"
                  className={`nav-link ${isActive("/favorites") ? "active" : ""}`}
                >
                  <i className="bi bi-balloon-heart fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Favorite Meals</h3>
                    <p>View your saved meals</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/subscription"
                  className={`nav-link ${isActive("/subscription") ? "active" : ""}`}
                >
                  <i className="bi bi-cash-stack fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Subscription</h3>
                    <p>Upgrade to premium</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/history"
                  className={`nav-link ${isActive("/history") ? "active" : ""}`}
                >
                  <i className="bi bi-arrow-clockwise fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">History</h3>
                    <p>View meals history</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className={`nav-link border-top border-bottom border-5 ${isActive("/help") ? "active" : ""}`}
                >
                  <i className="bi bi-question-circle fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Help & Support</h3>
                    <p>Get help and support</p>
                  </div>
                </Link>
              </li>

              {/* ---- Logout ---- */}
              <li className="logout-section">
                <a className="nav-link logout" href="#">
                  <i className="bi bi-box-arrow-right fs-6"></i>
                  <div className="nav-text">
                    <h3 className="fw-bold">Sign Out</h3>
                  </div>
                </a>
              </li>
            </ul>
          </aside>

          {/* ================================================
              MAIN CONTENT SECTION
          ================================================= */}
          <main className="content-area">
            {/* ---- Header ---- */}
            <header className="horizontal-navbar">
              <div className="mobile-menu-toggle" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
              </div>
              <h2 className="fw-bold">Subscription & Billing</h2>
              <img src={profiles} className="profile-image" alt="Profile" />
            </header>
            <div className="page-content">
            
            </div>
            {/* ---- Page Content ---- */}

          </main>
        </nav>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </section>
  );
}
