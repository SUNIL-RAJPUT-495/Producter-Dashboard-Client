import React from "react";
import { Routes, Route,Navigate  } from "react-router-dom";
import { LoginPage } from "../Pages/auth/LoginPage";
import { AuthLayout } from "../Component/AuthLayout";
import { OtpVerification } from "../Pages/auth/OtpVerification";
import { Dashboard } from "../Component/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Route>
      <Route element={<Dashboard />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Route>

    </Routes>
  );
};
