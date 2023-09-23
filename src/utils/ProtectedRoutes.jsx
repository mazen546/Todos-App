import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default ProtectedRoutes;
