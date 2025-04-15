import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import NavigationMenu from "../Header/NavigationMenu";
import BurgerButton from "../Header/BurgerButton";
import Logo from "../Header/Logo";
import "../../styles/HeaderPages.css";

const Header = ({ isHomePage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  const handleNavigation = useCallback(
    (sectionId) => {
      if (isHomePage) {
        closeMenu();
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
        closeMenu();
      }
    },
    [isHomePage, navigate, scrollToSection]
  );

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const timer = setTimeout(() => scrollToSection(sectionId), 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, scrollToSection]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.classList.toggle("menu-open", !prev);
      return !prev;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && menuOpen && closeMenu();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

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
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <Logo handleNavigation={handleNavigation} />
      <div className="nav-container">
        <NavigationMenu
          isHomePage={isHomePage}
          menuOpen={menuOpen}
          handleNavigation={handleNavigation}
          closeMenu={closeMenu}
        />
      </div>
      <BurgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
