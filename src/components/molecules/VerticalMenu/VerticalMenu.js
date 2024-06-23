import VerticalMenuItem from "components/atoms/VerticalMenuItem/VerticalMenuItem";
import Logo from "components/atoms/Logo/Logo";
import "./style.scss";

export default function VerticalMenu({ labels }) {
  const items = []
  labels.forEach((item) => {
    items.push(
      <VerticalMenuItem item={item}/>
    )
  })
  return (
    <div className="vertical-menu">
      <Logo/>
      {items}
    </div>
  )
}