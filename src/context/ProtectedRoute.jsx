import { useAuth } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default function ProtectProvider({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return (
      <Navigate to={`/auth?mode=login&redirect=${location.pathname}`} replace />
    );
  }

  return children;
}
