import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../Pages/auth/LoginPage";
import { AuthLayout } from "../Component/AuthLayout";
import { OtpVerification } from "../Pages/auth/OtpVerification";
import { Dashboard } from "../Component/Dashboard";
import { Homepage } from "../Pages/admin/Homepage";
import { ProductsPage } from "../Pages/admin/ProductsPage";

export const AppRoutes = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Navigate to="/login" />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Route>

      
      <Route path="/dashboard" element={<Dashboard />}>
     
        <Route index element={<Homepage />} />

       
        <Route path="home" element={<Homepage />} />

       
        <Route path="product" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
