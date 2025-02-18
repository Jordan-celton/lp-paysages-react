import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import "../styles/HeaderPages.css";
import logo from "../assets/logo.png";

const HeaderPages = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = useCallback(
    (hash) => {
      if (window.location.pathname === "/") {
        // Si on est déjà sur la page d'accueil, on scrolle directement
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Si on est sur une autre page, on navigue vers "/" avec le hash en state
        navigate("/", { state: { targetSection: hash } });
      }

      setMenuOpen(false); // Fermer le menu après navigation
    },
    [navigate]
  );

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo LP Paysages" />

      <div className="nav-container">
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Menu principal"
        >
          <ul>
            <li>
              <a
                onClick={() => handleNavigation("accueil")}
                aria-label="Aller à la section Accueil"
                role="link"
              >
                <i className="fas fa-home" aria-hidden="true"></i> Accueil
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("projets")}
                aria-label="Aller à la section Réalisations"
                role="link"
              >
                <i className="fas fa-briefcase" aria-hidden="true"></i>{" "}
                Réalisations
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("contact")}
                aria-label="Aller à la section Contact"
                role="link"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="burger"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        role="button"
        tabIndex="0"
      >
        <div className={`line1 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line2 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line3 ${menuOpen ? "toggle" : ""}`}></div>
      </div>
    </header>
  );
};

export default HeaderPages;
