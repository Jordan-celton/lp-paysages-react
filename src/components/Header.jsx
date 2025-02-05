import { Link } from "react-scroll";
import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo LP Paysages" />
      <div className="nav-container">
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="accueil"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <i className="fas fa-home"></i> Accueil
              </Link>
            </li>
            <li>
              <Link
                to="a-propos"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <i className="fas fa-info-circle"></i> À Propos
              </Link>
            </li>
            <li>
              <Link
                to="projets"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <i className="fas fa-briefcase"></i> Réalisations
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <i className="fas fa-envelope"></i> Contact
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
