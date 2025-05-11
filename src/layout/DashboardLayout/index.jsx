import { useContext } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { sideNavLinks } from "../../../constant/dashboardSidebar.constant";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  const { signOut, } = useContext(AuthContext);
  const handleSignout = () => {
    signOut();
  };
  
  return (
    <div className="h-screen w-full flex flex-row">
      {/*  */}
      <div className="bg-slate-800 overflow-hidden w-xs shadow-2xl flex flex-col justify-between shadow-green-700  h-full">
        {/* Top */}
        <div className="">
          {/* Header */}
          <div className="text-center mx-auto    font-bold text-xl py-5">
            <img
              src="https://file-dhaka.portal.gov.bd/uploads/d2880dba-7144-406d-b37e-0b557cd4b3b9//632/931/642/632931642fdce989720474.png"
              alt=""
              className="size-12 text-center  mx-auto"
            />
          </div>
          <div className="">
            <Link
              className={
                pathname === "/dashboard"
                  ? "bg-green-600 py-1.5 cursor-pointer hover:scale-105 transition-all text-lg px-3 font-semibold w-full block "
                  : "border-y-green-600 py-1.5 cursor-pointer hover:scale-105 transition-all text-lg px-3 font-semibold w-full block  border-y"
              }
              to={""}
            >
              Dashboard
            </Link>
            {sideNavLinks.map((navItem) => (
              <NavLink
                to={navItem?.path}
                key={navigator}
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-600 py-1.5 cursor-pointer hover:scale-105 transition-all text-lg px-3 font-semibold w-full block "
                    : "border-y-green-600 py-1.5 cursor-pointer hover:scale-105 transition-all text-lg px-3 font-semibold w-full block  border-y"
                }
              >
                {navItem.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="">
          <button
            className="bg-red-500 w-full py-3 text-center cursor-pointer"
            onClick={handleSignout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-700 h-full p-5">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
