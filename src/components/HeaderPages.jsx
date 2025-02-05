import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/HeaderPages.css";
import logo from "../assets/logo.png";

const HeaderPages = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (hash) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    setMenuOpen(false); // Fermer le menu après la navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo LP Paysages" />
      <div className="nav-container">
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a onClick={() => handleNavigation("accueil")}>
                <i className="fas fa-home"></i> Accueil
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation("projets")}>
                <i className="fas fa-briefcase"></i> Réalisations
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation("contact")}>
                <i className="fas fa-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line1 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line2 ${menuOpen ? "toggle" : ""}`}></div>
        <div className={`line3 ${menuOpen ? "toggle" : ""}`}></div>
      </div>
    </header>
  );
};

export default HeaderPages;
