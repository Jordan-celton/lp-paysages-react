import logo from "../../assets/Logo/logo.png";

const Logo = ({ handleNavigation }) => {
  return (
    <img
      className="logo"
      src={logo}
      alt="Logo LP Paysages"
      onClick={() => handleNavigation("accueil")}
      tabIndex="0"
      onKeyDown={(e) => e.key === "Enter" && handleNavigation("accueil")}
    />
  );
};

export default Logo;
