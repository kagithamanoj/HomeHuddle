import React from "react";
import { Navigate } from "react-router-dom";

// Example prop: check if authenticated, else redirect.
type Props = { children: JSX.Element; isAuthenticated: boolean };

const ProtectedRoute: React.FC<Props> = ({ children, isAuthenticated }) =>
  isAuthenticated ? children : <Navigate to="/login" replace />;

export default ProtectedRoute;
