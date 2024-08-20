import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
};

export default ProtectedRoute;
