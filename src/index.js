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
import Left from "components/pages/Left/Left";
import Right from "components/pages/Right/Right"

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
    path: "/left",
    element: <Left />,
    children: [
      {
        path: "/left",
        element: <App />,
      },
    ],
  },
  {
    path: "/right",
    element: <Right />,
    children: [
      {
        path: "/right",
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