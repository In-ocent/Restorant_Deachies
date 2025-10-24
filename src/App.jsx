import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AUTHENTICATION PAGES
import SignUpPage from "./Component/Pages/SignUp.jsx";
import Login from "./Component/Pages/Login.jsx";
import ForgetPassword from "./Component/Pages/ForgetPassword.jsx";
import ResetPassword from "./Component/Pages/ResetPassword.jsx";
import NewPassword from "./Component/Pages/NewPassword.jsx";

// APP CORE PAGES
import SessionPage from "./Component/Pages/Session.jsx";
import HealthGoals from "./Component/Pages/HealthGoals.jsx";
import HelpSupport from "./Component/Pages/HelpSupport.jsx";
import HomePagePrice from "./Component/Pages/HomePagePrice.jsx";
import Subscription from "./Component/Pages/Subscription.jsx";


export default function App() {
  return (
    <Router>
     

      <Routes>
        {/* ====== AUTHENTICATION ====== */}
        <Route path="" element={<SignUpPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />

        {/* ====== MAIN APP SECTIONS ====== */}
        <Route path="/session" element={<SessionPage />} />
        <Route path="/health-goals" element={<HealthGoals />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/home-price" element={<HomePagePrice />} />
        <Route path="/subscription" element={<Subscription />} />

       
      </Routes>
    </Router>
  );
}
