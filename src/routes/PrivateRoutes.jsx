import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  } else {
    return children;
  }
};

export default PrivateRoutes;
