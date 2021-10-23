import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Nav.css";

function Nav() {
  const logoPath = "/images/logo.png";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <div className="mx-2">
          <Link to="/">
            <img className="topnav-logo" src={logoPath} alt="Logo" />
          </Link>
        </div>
        <Link className="navbar-brand" to="/">Dice Droppers</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">Episodes</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/campaign-notes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Campaign Notes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item bg-dark text-light border-0" to="/campaign-notes/the-world">The World</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-world/the-continent">The Continent</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-world/the-factions">The Factions</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-world/the-baddies">The Baddies</Link></li>
                <li><Link className="dropdown-item bg-dark text-light border-0" to="/campaign-notes/the-recap">The Recap</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-recap/chapter-one">Chapter One</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-recap/chapter-two">Chapter Two</Link></li>
                <li><Link className="dropdown-item" to="/campaign-notes/the-recap/chapter-three">Chapter Three</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/meet-the-crew">Meet The Crew</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;