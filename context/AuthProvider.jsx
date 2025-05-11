import { createContext, useEffect, useState } from "react";
import usePrivetAxios from "../hooks/usePrivetAxios";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const privetAxios = usePrivetAxios(token);

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logout successs");
  };

  useEffect(() => {
    setLoading(true);
    privetAxios
      .get("profile")
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Authentication Error: ", error);
        setUser(null);
        setLoading(false);
      });
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    setLoading,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
