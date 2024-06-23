import HorizontalMenuItem from "components/atoms/HorizontalMenuItem/HorizontalMenuItem";
import "./style.scss";

export default function HorizontalMenu({ labels }) {
  const items = []
  labels.forEach((item) => {
    items.push(
      <HorizontalMenuItem item={item}/>
    )
  })
  return (
    <div className='horizontal-menu'>
      {items}
    </div>
  )
}