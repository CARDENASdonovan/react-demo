import HorizontalMenu from "components/molecules/HorizontalMenu/HorizontalMenu"
import "./style.scss"

export default function Header({ labels }) {
  return (
    <header className='header'>
      <HorizontalMenu labels={labels}/>
    </header>
  )
}