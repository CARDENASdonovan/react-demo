import LeftMenuLayout from "components/templates/LeftMenuLayout/LeftMenuLayout";

import "./style.scss";
import { Outlet } from "react-router-dom";

export default function Left() {
  return (
    <div>
      <LeftMenuLayout/>
      <Outlet/>
    </div>
  );
}