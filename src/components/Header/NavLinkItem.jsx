import { ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinkItem = ({
  to,
  icon,
  text,
  isHomePage,
  menuOpen,
  handleNavigation,
  closeMenu,
}) => {
  return (
    <li>
      {isHomePage ? (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          aria-label={`Aller à la section ${text}`}
          tabIndex={menuOpen ? "0" : "-1"}
        >
          <FontAwesomeIcon icon={icon} aria-hidden="true" />
          <span>{text}</span>
        </ScrollLink>
      ) : (
        <button
          onClick={() => handleNavigation(to)}
          aria-label={`Aller à la section ${text}`}
          tabIndex={menuOpen ? "0" : "-1"}
        >
          <FontAwesomeIcon icon={icon} aria-hidden="true" />
          <span>{text}</span>
        </button>
      )}
    </li>
  );
};

export default NavLinkItem;
