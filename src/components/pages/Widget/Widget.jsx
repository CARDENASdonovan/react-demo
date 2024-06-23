import RightMenuLayout from "components/templates/RightMenuLayout/RightMenuLayout";

import "./style.scss";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <RightMenuLayout/>
      <Outlet/>
    </div>
  );
}