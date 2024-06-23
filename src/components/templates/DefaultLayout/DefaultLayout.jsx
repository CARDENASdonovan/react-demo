import Header from "components/organisms/Header/Header"
import Footer from "components/organisms/Footer/Footer"
import { Outlet } from "react-router-dom";
import "./style.scss";

const HEADER_LABELS = [
  {text: "Dashboard", link: "/dashboard"},
  {text: "Widgets", link: "/widget"},
]

const FOOTER_LABELS = [
  {text: "Created by : CARDENAS Donovan", link: "https://github.com/"},
]

export default function DefaultLayout({ page }) {
  return (
    <div className='default-layout'>
      <div className='inner-container'>
        <Header labels={HEADER_LABELS}/>
        <div className="page">
          <Outlet/>
        </div>
        <Footer labels={FOOTER_LABELS}/>
      </div>
    </div>
  );
}