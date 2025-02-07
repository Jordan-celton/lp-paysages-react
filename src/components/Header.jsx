import { Link } from "react-scroll";
import { useState, useCallback } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

// Utilisation de useCallback pour éviter la recréation des fonctions à chaque render
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header>
      <img className="logo" src={logo} alt="Logo LP Paysages" />

      <div className="nav-container">
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="accueil"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Accueil"
              >
                <i className="fas fa-home" aria-hidden="true"></i> Accueil
              </Link>
            </li>
            <li>
              <Link
                to="a-propos"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section À Propos"
              >
                <i className="fas fa-info-circle" aria-hidden="true"></i> À
                Propos
              </Link>
            </li>
            <li>
              <Link
                to="projets"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Réalisations"
              >
                <i className="fas fa-briefcase" aria-hidden="true"></i>{" "}
                Réalisations
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Contact"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="burger"
        onClick={toggleMenu}
        onKeyPress={(e) => e.key === "Enter" && toggleMenu()}
        role="button"
        aria-label="Menu"
        tabIndex="0"
        aria-expanded={menuOpen}
      >
        <div className={`line1 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line2 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line3 ${menuOpen ? "toggle" : ""}`}></div>
      </div>
    </header>
  );
};

export default Header;
