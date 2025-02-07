import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/HeaderPages.css";
import logo from "../assets/logo.png";

const HeaderPages = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (hash) => {
    // Navigate to the root, then scroll smoothly to the section
    navigate("/");

    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false); // Fermer le menu après la navigation
  };

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
              >
                <i className="fas fa-home" aria-hidden="true"></i> Accueil
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("projets")}
                aria-label="Aller à la section Réalisations"
              >
                <i className="fas fa-briefcase" aria-hidden="true"></i>{" "}
                Réalisations
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("contact")}
                aria-label="Aller à la section Contact"
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
      >
        <div className={`line1 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line2 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line3 ${menuOpen ? "toggle" : ""}`}></div>
      </div>
    </header>
  );
};

export default HeaderPages;
