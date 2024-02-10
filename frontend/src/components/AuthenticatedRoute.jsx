import { Navigate } from "react-router-dom";

export const AuthenticatedRoute = ({ children }) => {
  const token = sessionStorage.getItem("open-keeper-token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
