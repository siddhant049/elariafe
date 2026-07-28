import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

/**
 * Blocks /dashboard (and nested protected routes) unless a JWT exists in localStorage.
 */
const ProtectedRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
