import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Confirmation from "../pages/Confimation";
import Sponsor from "../pages/Sponsor";
import Login from "../pages/Login";
import Stats from "../pages/Stats";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/expositor" element={<Sponsor />} />
      <Route path="/login" element={<Login />} />
      {/* /admin redireciona para o novo dashboard */}
      <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/stats/:slug"
        element={
          <ProtectedRoute>
            <Stats />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
