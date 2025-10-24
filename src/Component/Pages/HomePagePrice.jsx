import React from "react";
import succesImage from "../../assets/profile-image.jpg";
import "../stylingCSS/HomePrice.css";
import { LuCrown } from "react-icons/lu";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function HomePagePrice() {
  return (
    <div className="mother-container bg-light min-vh-100">
      {/* NAVBAR */}
      <nav className="navbar-page px-5 py-3 border-bottom bg-white shadow-sm">
        <h3 className="fw-bold mb-0">Pricing</h3>
        <img src={succesImage} className="profile-image" alt="Profile" />
      </nav>

      {/* HERO SECTION */}
      <div className="text-center mt-5">
        <h1 className="fw-bold display-6">Choose Your Plan</h1>
        <p className="text-muted fs-5">
          Start with our free plan or upgrade to premium for advanced features
          and personalized meal planning.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center cord-color   ">
          {/* FREE PLAN */}
          <div className="col-md-5 pricing-card ">
            <div className="card pricing-card h-100 shadow-sm border-0 pricing-card ">
                <div className="card-header text-center  border-0 pricing-card pt-4 pricing-card">
                  <h3 className="fw-bold pricing-card ">Free</h3>
                </div>
              
              <div className="card-body text-center pricing-card">
                <h1 className="display-5 fw-bold text-dark mb-2 fs-3">₦0</h1>
                <p className="text-muted mb-4">Perfect for getting started</p>
              </div>

              <button className=" btn border btn-bfree">Current Plan</button>
              <ul className="list-group list-group-flush text-start   pricing-card ">
                <li className="list-group-item pricing-card fw-bold ">
                  <i className="bi bi-check text-success fs-3 text-bold"></i> Basic Meal Plan
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3 fs-3"></i> Nutrition Tracking
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3 fs-3"></i> Weekly Meal Logging
                </li>
                <li className="list-group-item pricing-card fw-bold ">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Mobile App Access
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> Advanced Analysis
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> Custom Recipe Creation
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> AI Meal History
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> Unlimited History
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> Family Sharing
                </li>
                <li className="list-group-item pricing-card ">
                  <i className="bi bi-x text-danger me-2 fs-3"></i> Priority Support
                </li>
              </ul>
            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="col-md-5 bg-white">
            <div className="card pricing-card h-100 shadow-lg cord-color boder-display-top-premium ">
              <div className="card-header text-center text-dark border-0   pt-4">
                <h5 className="fw-bold fs-3 mb-0 d-flex w-100 justify-content-center"><LuCrown className=" text-bold display-5 text-success mx-2 fs-3"/>
                  Premium
                </h5>
              </div>
              <div className="card-body text-center ">
                <h1 className="display-5 mb-3 fw-bold text-dark mb-2 fs-3 ">₦2,500<span className="fs-6 text-muted">/month</span></h1>
                <p className="text-muted mb-4">Everything you need to succeed</p>
              </div>
              <button className="bremium-btn text-center d-flex justify-content-center py-4"> <LuCrown className="LuCrown " /> Unlock Premium Feautures</button>

              <ul className="list-group list-group-flush text-start ">
                <li className="list-group-item pricing-card fs-6 fw-bold">
                  <i className="bi bi-check text-success display-5 fs-3"></i> Basic Meal Logging
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-0 fs-3"></i> Nutrition Logging
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Weekly Meal Logging
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Advanced Analytics
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Custom Recipe Creation
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> AI Meal History
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Family Sharing (5 Members)
                </li>
                <li className="list-group-item pricing-card fw-bold">
                  <i className="bi bi-check text-success me-2 fs-3"></i> Priority Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="faq-section mt-5">
          <h4 className="text-center fw-bold mb-4">Frequently Asked Questions</h4>
          <div className="faq-item ">
            <strong>Can I switch between plans?</strong>
            <p>
              Yes, you can upgrade or downgrade your plan anytime. Changes reflect in your next billing cycle.
            </p>
          </div>
          <div className="faq-item">
            <strong>What payment methods do you accept?</strong>
            <p>We accept Visa, Mastercard, American Express, and PayPal.</p>
          </div>
          <div className="faq-item">
            <strong>Is there a free trial for premium?</strong>
            <p>
              Yes! Enjoy a 7-day free trial when you sign up for Premium. Cancel anytime during the trial period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
