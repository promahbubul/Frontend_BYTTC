import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { MoonLoader } from "react-spinners";
import Loading from "../components/Loading";
const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }

  if (user && user.type === "admin") {
    return children;
  }
  return <Navigate to={"/login"} />;
};
export default PrivetRoute;
