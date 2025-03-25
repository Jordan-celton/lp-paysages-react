import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/HeaderPages.css";
import logo from "../assets/logo.png";

const HeaderPages = () => {
  const navigate = useNavigate();
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

  // Navigation et scroll
  const handleNavigation = useCallback(
    (hash) => {
      if (window.location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        navigate("/", { state: { targetSection: hash } });
      }
      closeMenu();
    },
    [navigate]
  );

  // Gestion du menu
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
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

  // Fermeture en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".nav-container") &&
        !e.target.closest(".burger")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <img
        className="logo"
        src={logo}
        alt="Logo"
        onClick={() => handleNavigation("accueil")}
        tabIndex="0"
        onKeyDown={(e) => e.key === "Enter" && handleNavigation("accueil")}
      />

      <div className="nav-container">
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Menu principal"
          aria-hidden={!menuOpen}
          id="main-nav"
        >
          <ul>
            <li>
              <button
                onClick={() => handleNavigation("accueil")}
                aria-label="Aller à la section Accueil"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faHome} aria-hidden="true" />
                <span>Accueil</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("projets")}
                aria-label="Aller à la section Réalisations"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
                <span>Réalisations</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("contact")}
                aria-label="Aller à la section Contact"
                tabIndex={menuOpen ? "0" : "-1"}
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                <span>Contact</span>
              </button>
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

export default HeaderPages;
