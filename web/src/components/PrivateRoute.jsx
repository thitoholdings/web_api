import React from "react";
import { getStoredAuthToken } from "./utils/authToken";
import { Route, Navigate, Routes } from "react-router-dom";
import _ from "lodash";

export default function PrivateRoute({ children }) {
  let isAuthenticated = true;
  const userData = getStoredAuthToken();

  if (_.isEmpty(userData)) isAuthenticated = false;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}
export function LoginRoute({ children }) {
  let isAuthenticated = true;
  const userData = getStoredAuthToken();

  if (_.isEmpty(userData)) isAuthenticated = false;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return children;
}
