import React, { useState } from "react";
import profiles from "../../assets/profile-image.jpg";
import munchLogo from "../../assets/munch-logo.png";
import "../stylingCSS/Subscription.css";
import { SiFlutter } from "react-icons/si";
import { LuCrown } from "react-icons/lu";

/**
 * ==============================
 * COMPONENT: Support
 * ==============================
 * Handles user subscription pages — all states:
 * - Free plan view
 * - Premium plan management
 * - Cancel subscription confirmation
 * - Upgrade summary
 * - Payment processing
 * - Successful upgrade confirmation
 * 
 * Uses Bootstrap + custom CSS for layout.
 */

export default function Support() {
  /** ==============================
   *  STATE MANAGEMENT
   * ============================== */
  const [sidebarOpen, setSidebarOpen] = useState(false); // Toggles sidebar (mobile view)
  const [visible, setVisible] = useState(true); // Controls cancel subscription section
  const [showSummary, setShowSummary] = useState(true); // Controls upgrade summary view
  const [showSuccessFull, setSuccessFull] = useState(true); // Controls success/payment screens

  // Sidebar toggle function
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <section className="support-layout">
      <div className="container-all">
       

          {/* ================================================
              MAIN CONTENT SECTION
              - Contains all plan forms and billing states
          ================================================= */}
          <main className="content-area">
            {/* ---- Header ---- */}
            

            {/* ---- Page Content ---- */}
            <div className="page-content">
              {/* =========================================
                  CANCEL SUBSCRIPTION SECTION
                  - Shows confirmation and effects of canceling
              ========================================== */}
              {visible && (
                <div className="container border rounded px-4 py-3 subscription-container d-none">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h2 className="text-danger fw-bold mb-0">Cancel Subscription?</h2>
                    <i
                      className="bi bi-x-lg fw-bold fs-3 text-dark"
                      role="button"
                      onClick={() => setVisible(false)}
                    ></i>
                  </div>

                  {/* Cancel Details */}
                  <p className="text-muted fs-6 mb-4">
                    Are you sure you want to cancel your premium subscription? <br />
                    You’ll lose access to premium features after your current billing period.
                  </p>

                  {/* What Happens After Cancel */}
                  <div className="border border-success rounded p-3">
                    <p className="fw-bold text-dark fs-6 mb-3">What happens when you cancel:</p>
                    <ul className="ps-4" style={{ listStyleType: "disc" }}>
                      <li><strong>Billing stops immediately</strong></li>
                      <li>Retain access until <strong>30 Sep 2025</strong></li>
                      <li>Switches to free plan afterward</li>
                      <li>Can reactivate anytime</li>
                    </ul>
                  </div>

                  {/* Loss After Cancellation */}
                  <div className="border border-danger rounded p-3 mt-4">
                    <p className="fw-bold text-danger fs-6 mb-3">
                      After 30 Sep 2025, you’ll lose access to:
                    </p>
                    <ul className="ps-4" style={{ listStyleType: "disc" }}>
                      <li>Custom meal plans</li>
                      <li>Nutritionist consultation</li>
                      <li>Advanced tracking</li>
                      <li>Recipe recommendations</li>
                    </ul>
                  </div>

                  {/* Retention Offer */}
                  <div className="border border-primary rounded p-4 mt-4 bg-light-subtle">
                    <p className="fw-semibold text-danger mb-2">
                      Get <strong>50% off</strong> for your next 3 months:
                    </p>
                    <p className="mb-0 text-danger">
                      Continue with Premium for ₦1,250/month.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-center gap-4 mt-4">
                    <button className="btn btn-outline-dark fw-bold">Keep Premium</button>
                    <button className="btn btn-danger fw-bold">Cancel & Stop Billing</button>
                  </div>

                  {/* Confirmation */}
                  <p className="text-muted mt-4 text-center fs-6">
                    <strong>Confirmed:</strong> No further deductions after cancellation.
                  </p>
                </div>
              )}

              {/* =========================================
                  UPGRADE SUMMARY SECTION
                  - User chooses between weekly/monthly/yearly
              ========================================== */}
              {showSummary && (
                <div className="container border rounded px-4 py-3 subscription-container d-none">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h2 className="text-dark fw-bold d-flex align-items-center">
                      <LuCrown className="fs-2 text-warning me-2" /> Upgrade to Premium
                    </h2>
                    <i
                      className="bi bi-x-lg fw-bold fs-3 text-dark"
                      role="button"
                      onClick={() => setShowSummary(false)}
                    ></i>
                  </div>

                  {/* Description */}
                  <p className="text-muted fs-6 mb-4">
                    Choose your subscription plan and complete payment to unlock premium features.
                  </p>

                  {/* Plan Cards */}
                  <div className="border rounded-4 p-3 mb-3">
                    <h1 className="fw-bold">Weekly</h1>
                    <div className="d-flex justify-content-between text-muted">
                      <p>Perfect for trying premium features</p>
                      <span className="fw-bold">₦750</span>
                    </div>
                  </div>

                  <div className="border border-success border-3 rounded-3 p-3 mb-3">
                    <h1 className="fw-bold">Monthly</h1>
                    <div className="d-flex justify-content-between text-muted">
                      <p>Most popular choice <strong className="text-success">Save 16%</strong></p>
                      <span className="fw-bold">₦2,500</span>
                    </div>
                  </div>

                  <div className="border rounded-4 p-3 mb-3">
                    <h1 className="fw-bold">Yearly</h1>
                    <div className="d-flex justify-content-between text-muted">
                      <p>Best value <strong className="text-success">Save 17%</strong></p>
                      <span className="fw-bold">₦25,000</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <h6 className="fw-semibold fs-5 text-muted mb-3">
                    What you’ll get with premium:
                  </h6>
                  <ul className="list-unstyled text-muted">
                    <li><i className="bi bi-check-square-fill text-success me-2"></i> Custom meal plans</li>
                    <li><i className="bi bi-check-square-fill text-success me-2"></i> Nutritionist consultations</li>
                    <li><i className="bi bi-check-square-fill text-success me-2"></i> Advanced calorie tracking</li>
                    <li><i className="bi bi-check-square-fill text-success me-2"></i> Recipe recommendations</li>
                    <li><i className="bi bi-check-square-fill text-success me-2"></i> Priority support</li>
                  </ul>

                  <p className="text-center text-muted fw-bold">
                    <i className="bi bi-x-circle me-1"></i> Secure payment powered by Paystack.
                  </p>

                  {/* Buttons */}
                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <button className="btn btn-outline-dark w-100">Back</button>
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-danger w-100">Continue to payment ₦2,500</button>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================
                  PAYMENT SECTION
                  - Lets user choose between Flutterwave / Paystack
              ========================================== */}
              {showSuccessFull && (
                <div className="container border rounded px-4 py-3 subscription-container">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h2 className="fw-bold d-flex align-items-center fs-5">
                      <i className="bi bi-lock me-2"></i> Secure Payment - Paystack
                    </h2>
                    <i
                      className="bi bi-x-lg fw-bold fs-3 text-dark"
                      role="button"
                      onClick={() => setSuccessFull(false)}
                    ></i>
                  </div>

                  <p className="text-muted fs-6 mb-4">
                    Complete your payment to activate monthly subscription
                  </p>

                  {/* Amount Summary */}
                  <div className="border rounded-4 border-success px-4 pb-4">
                    <div className="d-flex justify-content-between">
                      <h1 className="fw-bold">Total Amount</h1>
                      <h1 className="fw-bold text-muted">Plan</h1>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                      <h2 className="text-success fw-bold">₦2,500</h2>
                      <span className="fw-bold">Monthly</span>
                    </div>
                  </div>

                  <h2 className="mt-5 fw-bold">Select payment method</h2>

                  {/* Payment Options */}
                  <div className="d-flex justify-content-evenly my-3 gap-3 text-center">
                    <div className="border border-success rounded-4 p-4 d-flex flex-column align-items-center justify-content-center">
                      <h1><SiFlutter color="#02569B" /></h1>
                      <p className="mt-2 mb-0 fw-semibold">Flutterwave</p>
                    </div>

                    <div className="border border-success rounded-4 p-4 d-flex flex-column align-items-center justify-content-center">
                      <h1><i className="bi bi-credit-card"></i></h1>
                      <p className="mt-2 mb-0 fw-semibold">Paystack</p>
                    </div>
                  </div>


                  <p className="fw-bold text-center my-2 text-muted">
                    <i className="bi bi-x-circle me-2"></i> Secure payment powered by paystack. you can cancel anytime with no hidden fees.k.
                  </p>

                  {/* Pay Button */}
                  <div className="text-center">
                    <button className="btn btn-danger w-50 fw-bold">Pay ₦2,500</button>
                  </div>
                </div>
              )}
            </div>
          </main>

      </div>

      {/* ===== MOBILE OVERLAY =====
          - Closes sidebar when clicked */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </section>
  );
}
