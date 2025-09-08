import { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";

function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <div className="header">
      <Link to="/" className="title-link">
        Loïc Clerc
      </Link>
      <div
        className={`nav-toggle ${isNavOpen ? "active" : ""}`}
        onClick={() => setisNavOpen(!isNavOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
        <a
          href="#about"
          className="nav-link"
          onClick={() => setisNavOpen(false)}
        >
          À propos
        </a>
        <a
          href="#skills"
          className="nav-link"
          onClick={() => setisNavOpen(false)}
        >
          Mes compétences
        </a>
        <a
          href="#projects"
          className="nav-link"
          onClick={() => setisNavOpen(false)}
        >
          Projets
        </a>
        <a
          href="mailto:clerc.loic@gmail.com"
          className="nav-link"
          onClick={() => setisNavOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
