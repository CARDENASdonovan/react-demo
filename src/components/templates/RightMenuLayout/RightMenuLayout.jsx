import SideMenu from "components/organisms/SideMenu/SideMenu"
import "./style.scss";
import { Outlet } from "react-router-dom";

const MENU_LABELS = [
  {text: "Left", link: "/left"},
  {text: "Right", link: "/right"},
]

export default function RightMenuLayout({ page }) {
  return (
    <div className='right-side-menu-layout'>
      <div className='inner-container'>
        <Outlet/>
        <SideMenu labels={MENU_LABELS}/>
      </div>
    </div>
  );
}