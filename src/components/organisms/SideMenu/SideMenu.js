import VerticalMenu from "components/molecules/VerticalMenu/VerticalMenu"
import "./style.scss"

export default function SideMenu({ labels }) {
  return (
    <nav className="side-menu">
      <VerticalMenu labels={labels}/>
    </nav>
  )
}