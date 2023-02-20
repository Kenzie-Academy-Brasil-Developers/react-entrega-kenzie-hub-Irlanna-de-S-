import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AppRoutes = ({ user, setUser, setLoading, loading }) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            setUser={setUser}
            loading={loading}
            setLoading={setLoading}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
