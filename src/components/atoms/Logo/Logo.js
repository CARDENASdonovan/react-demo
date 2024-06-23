import logo from 'assets/logo.svg';
import "./style.scss";

export default function Logo({ item }) {
  return(
    <div className='logo'>
      <a href='/' className='logo-link'><img src={logo} alt="logo"/></a>
    </div>
  )
}