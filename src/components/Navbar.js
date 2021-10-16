function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Dice Droppers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Episodes</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Campaign Notes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item bg-dark text-light border-0">The World</span></li>
                <li><a className="dropdown-item" href="#">The Continent</a></li>
                <li><a className="dropdown-item" href="#">The Factions</a></li>
                <li><a className="dropdown-item" href="#">The Baddies</a></li>
                <li><span className="dropdown-item bg-dark text-light border-0">The Recap</span></li>
                <li><a className="dropdown-item" href="#">Chapter One</a></li>
                <li><a className="dropdown-item" href="#">Chapter Two</a></li>
                <li><a className="dropdown-item" href="#">Chapter Three</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Meet The Crew
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item bg-dark text-light border-0">The Dungeon Master</span></li>
                <li><a className="dropdown-item" href="#">Lawson</a></li>
                <li><span className="dropdown-item bg-dark text-light border-0">The Cast</span></li>
                <li><a className="dropdown-item" href="#">Chris</a></li>
                <li><a className="dropdown-item" href="#">Fabbs</a></li>
                <li><a className="dropdown-item" href="#">Hailey</a></li>
                <li><a className="dropdown-item" href="#">Luke</a></li>
                <li><a className="dropdown-item" href="#">Oscar</a></li>
              </ul>
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

export default Navbar;