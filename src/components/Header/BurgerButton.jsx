import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const BurgerButton = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className={`burger ${menuOpen ? "active" : ""}`}
      onClick={toggleMenu}
      aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={menuOpen}
      aria-controls="main-nav"
    >
      <FontAwesomeIcon
        icon={menuOpen ? faTimes : faBars}
        className={menuOpen ? "close-icon" : "menu-icon"}
        size="lg"
      />
    </button>
  );
};

export default BurgerButton;
