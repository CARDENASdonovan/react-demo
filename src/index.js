import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "components/pages/LandingPage/ErrorPage";
import LandingPage from "components/pages/LandingPage/LandingPage";
import App from "components/organisms/ReactDefaultPage/App";
import Dashboard from "components/pages/Dashboard/Dashboard";
import Widget from "components/pages/Widget/Widget"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <App />,
      },
    ],
  },
  {
    path: "/widget",
    element: <Widget />,
    children: [
      {
        path: "/widget",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);