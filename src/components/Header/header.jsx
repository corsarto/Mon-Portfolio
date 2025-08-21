import { Link } from "react-router-dom";
import "../Header/header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="title-link">
        Loïc Clerc
      </Link>
      <nav className="nav">
        <a href="#about" className="nav-link">
          À propos
        </a>
        <a href="#skills" className="nav-link">
          Mes compétences
        </a>
        <a href="#projects" className="nav-link">
          Projets
        </a>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;
