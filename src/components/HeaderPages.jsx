import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, useEffect, useRef } from "react";
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
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Gestion du scroll pour l'effet visuel du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour scroller vers une section en compensant la hauteur du header
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Gestion de la navigation
  const handleNavigation = useCallback(
    (sectionId) => {
      if (location.pathname === "/") {
        // Si déjà sur la page d'accueil
        closeMenu();
        scrollToSection(sectionId);
      } else {
        // Si sur une autre page, navigation vers l'accueil avec hash
        navigate(`/#${sectionId}`);
        closeMenu();
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  // Gestion du scroll après navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Retire le #
      const timer = setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, scrollToSection]);

  // Gestion du menu mobile
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Fermeture du menu avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && menuOpen && closeMenu();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Fermeture du menu en cliquant à l'extérieur
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
      ref={headerRef}
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      {/* Logo cliquable */}
      <img
        className="logo"
        src={logo}
        alt="Logo LP Paysages"
        onClick={() => handleNavigation("accueil")}
        tabIndex="0"
        onKeyDown={(e) => e.key === "Enter" && handleNavigation("accueil")}
      />

      {/* Navigation principale */}
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

      {/* Bouton menu mobile */}
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
