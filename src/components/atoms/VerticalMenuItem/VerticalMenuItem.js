import "./style.scss";

export default function VerticalMenuItem({ item }) {
  return(
    <a className="vertical-menu-item" href={item.link}>
      <div>
        {item.text}
      </div>
    </a>
  )
}