import { NavLink } from "react-router-dom";
import {
  navItems,
} from "../../../../constant/dashboardSidebar.constant";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import Loading from "../../Loading";
import { toast } from "react-toastify";

const Header = () => {
  const { user, isLoading, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("User logout success");
  };

  
  return isLoading ? (
    <Loading />
  ) : (
    <div className="py-2">
      <div className="">
        <img
          src="https://file-dhaka.portal.gov.bd/uploads/d2880dba-7144-406d-b37e-0b557cd4b3b9//632/931/642/632931642fdce989720474.png"
          alt=""
          className="text-center mx-auto size-10"
        />
      </div>
      <div className="text-center mt-3 border-b-green-500 border-b-2 pb-2">
        <h1 className="font-bold text-xl">Jubo Unnyon Odhidoptor</h1>
        <p className="text-base text-green-600">
          Best Computer Tranning Center
        </p>
      </div>
      <nav className="bg-slate-950 text-right">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? " py-4 px-5 border-l border-green-500 inline-block uppercase"
                : "py-4 px-5 border-l border-green-500 inline-block uppercase "
            }
            key={item.path}
          >
            {item.title}
          </NavLink>
        ))}
        {user ? (
          <button
            onClick={handleLogout}
            className={
              "py-4 px-5 border-l  cursor-pointer hover:bg-success transition-all border-green-500 inline-block uppercase"
            }
          >
            Logout
          </button>
        ) : (
          <NavLink
            to={"login"}
            className={({ isActive }) =>
              isActive
                ? " py-4 px-5 border-l border-green-500 inline-block uppercase"
                : "py-4 px-5 border-l border-green-500 inline-block uppercase "
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};
export default Header;
