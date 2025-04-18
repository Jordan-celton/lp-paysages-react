import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 LP Paysages. Tous droits réservés.</p>

        <ul className="socials">
          <li>
            <a
              href="https://www.facebook.com/p/LP-Paysages-100069803825796/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter la page Facebook de LP Paysages"
              title="Facebook"
            >
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lp.paysages/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter la page Instagram de LP Paysages"
              title="Instagram"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
