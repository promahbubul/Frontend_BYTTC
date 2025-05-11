import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLaout";
import {
  Courses,
  Dashboard,
  Login,
  Payment,
  PaymentFail,
  Regisger,
  Students,
} from "../pages";
import axios from "axios";
import PrivetRoute from "./PrivetRoute";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Regisger />,
      },
      {
        path: "payment/:transectionId",
        element: <Payment />,
        loader: ({ params }) =>
          axios.get(`http://localhost:4500/students/${params.transectionId}`),
      },
      {
        path: "payment-fail/:transectionId",
        element: <PaymentFail />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
