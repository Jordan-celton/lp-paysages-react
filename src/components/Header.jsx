import { Link } from "react-scroll";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBriefcase,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
      return newState;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  // Fermeture avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <img
        className="logo"
        src={logo}
        alt="Logo LP Paysages"
        onClick={() => closeMenu()}
      />

      <div className="nav-container">
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Menu principal"
          aria-hidden={!menuOpen}
        >
          <ul>
            <li>
              <Link
                to="accueil"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Accueil"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faHome} aria-hidden="true" />
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link
                to="a-propos"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section À Propos"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faInfoCircle} aria-hidden="true" />
                <span>À Propos</span>
              </Link>
            </li>
            <li>
              <Link
                to="projets"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Réalisations"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
                <span>Réalisations</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                aria-label="Aller à la section Contact"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button
        className={`burger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} className="close-icon" size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="menu-icon" size="lg" />
        )}
      </button>
    </header>
  );
};

export default Header;
