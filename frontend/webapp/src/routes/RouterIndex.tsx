// src/routerindex.tsx (or wherever your routes are set)

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage"; // Adjust path as needed

// Define your routes
const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // Add more routes here if needed
]);

// Router provider component (used in main.tsx)
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
