import LeftMenuLayout from "components/templates/LeftMenuLayout/LeftMenuLayout";
import App from "components/organisms/ReactDefaultPage/App"

import "./style.scss";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <LeftMenuLayout/>
      <Outlet/>
    </div>
  );
}