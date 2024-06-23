import HorizontalMenu from "components/molecules/HorizontalMenu/HorizontalMenu"
import "./style.scss"

export default function Footer({ labels }) {
  return (
    <footer className='footer'>
      <HorizontalMenu labels={labels}/>
    </footer>
  );
}