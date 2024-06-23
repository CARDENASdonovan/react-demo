import "./style.scss";

export default function HorizontalMenuItem({ item }) {
  return(
    <div className="horizontal-menu-item">
      <a href={item.link}>{item.text}</a>
    </div>
  )
}