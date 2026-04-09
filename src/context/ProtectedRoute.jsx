import { useAuth } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default function ProtectProvider({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  const attemptedUrl = `${location.pathname}${location.search}${location.hash}`;
  const encodedRedirect = encodeURIComponent(attemptedUrl);
  if (!user) {
    return (
      <Navigate to={`/auth?mode=login&redirect=${encodedRedirect}`} replace />
    );
  }
  // const location = useLocation();
  // if (!user) {
  //   return (
  //     <Navigate to={`/auth?mode=login&redirect=${location.pathname}`} replace />
  //   );
  // }

  return children;
}
