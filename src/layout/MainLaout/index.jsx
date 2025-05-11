import { Children, useContext } from "react";
import { Footer, Header } from "../../components/Register";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../components/Loading";

const MainLayout = () => {
  const {  isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-6xl mx-auto bg-slate-800 pt-5 rounded-lg   min-h-screen text-white">
      <Header />
      <div className="min-h-[calc(100vh-270px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
