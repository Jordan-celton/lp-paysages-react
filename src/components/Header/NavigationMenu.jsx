import NavLinkItem from "./NavLinkItem";
import {
  faHome,
  faInfoCircle,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavigationMenu = ({
  isHomePage,
  menuOpen,
  handleNavigation,
  closeMenu,
}) => {
  return (
    <nav
      className={`nav-links ${menuOpen ? "active" : ""}`}
      aria-label="Menu principal"
      aria-hidden={!menuOpen}
      id="main-nav"
    >
      <ul>
        <NavLinkItem
          to="accueil"
          icon={faHome}
          text="Accueil"
          isHomePage={isHomePage}
          menuOpen={menuOpen}
          handleNavigation={handleNavigation}
          closeMenu={closeMenu}
        />
        {isHomePage && (
          <NavLinkItem
            to="a-propos"
            icon={faInfoCircle}
            text="À Propos"
            isHomePage={isHomePage}
            menuOpen={menuOpen}
            handleNavigation={handleNavigation}
            closeMenu={closeMenu}
          />
        )}
        <NavLinkItem
          to="projets"
          icon={faBriefcase}
          text="Réalisations"
          isHomePage={isHomePage}
          menuOpen={menuOpen}
          handleNavigation={handleNavigation}
          closeMenu={closeMenu}
        />
        <NavLinkItem
          to="contact"
          icon={faEnvelope}
          text="Contact"
          isHomePage={isHomePage}
          menuOpen={menuOpen}
          handleNavigation={handleNavigation}
          closeMenu={closeMenu}
        />
      </ul>
    </nav>
  );
};

export default NavigationMenu;
