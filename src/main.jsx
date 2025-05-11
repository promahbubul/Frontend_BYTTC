import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import StudentProvider from "../context/StudentProvider.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <AuthProvider>
      <StudentProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </StudentProvider>
    </AuthProvider>
  </StrictMode>
);
