import SideMenu from "components/organisms/SideMenu/SideMenu"
import "./style.scss";
import { Outlet } from "react-router-dom";

const MENU_LABELS = [
  {text: "Dashboard", link: "/dashboard"},
  {text: "Widgets", link: "/widget"},
]

export default function LeftMenuLayout({ page }) {
  return (
    <div className='left-side-menu-layout'>
      <div className='inner-container'>
        <SideMenu labels={MENU_LABELS}/>
        <Outlet/>
      </div>
    </div>
  );
}