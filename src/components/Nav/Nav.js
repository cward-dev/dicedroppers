import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./Nav.css";

function Nav() {
  const logoPath = "/images/logo.png";

  return (
    <ul className="nav">
      <li className="nav-logo-container nav-item-left">
        <Link to="/" exact={true}>
          <img className="nav-logo" src={logoPath} alt="Logo" />
        </Link>
      </li>
      <li className="nav-item nav-item-left">
        <Link to="/" exact={true}>Dice Droppers</Link>
      </li>
      <li className="nav-item nav-item-left">
        <NavLink to="/" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item nav-item-left">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="nav-item nav-item-left">
        <NavLink to="/episodes">Episodes</NavLink>
      </li>
      <li className="nav-item nav-item-left">
        <NavLink to="/campaign-notes">Campaign Notes</NavLink>
      </li>
      <li className="nav-item nav-item-left">
        <NavLink to="/meet-the-crew">Meet The Crew</NavLink>
      </li>
      <li className="nav-item nav-item-right">
        <NavLink to="/search">Search</NavLink>
      </li>
    </ul>
  );
}

export default Nav;