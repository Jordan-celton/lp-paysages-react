import PropTypes from "prop-types";
import { useCallback } from "react";
import "../styles/About.css";

const About = ({ setModalOpen }) => {
  // Utilisation de useCallback pour éviter la recréation de la fonction à chaque rendu
  const handleDevisClick = useCallback(() => {
    console.log("Ouverture de la modale");
    setModalOpen(true);
  }, [setModalOpen]);

  return (
    <section id="a-propos" data-aos="fade-up">
      <h2>À Propos</h2>
      <div className="a-propos-container">
        <div className="a-propos-texte" data-aos="fade-left">
          <p>
            LP Paysages est une entreprise spécialisée dans l’aménagement et
            l’entretien de jardins. Avec une expérience de plusieurs années,
            notre équipe est dédiée à transformer vos espaces extérieurs en
            lieux d&rsquo;exception.
          </p>
          <p>
            Nous mettons un point d&rsquo;honneur à respecter la nature tout en
            créant des espaces esthétiques et fonctionnels. Que vous ayez un
            projet de petite ou grande envergure, LP Paysages est à vos côtés
            pour concrétiser vos idées.
          </p>
        </div>

        <button
          className="devis"
          onClick={handleDevisClick} // Appel à la fonction avec useCallback
          aria-label="Demander un devis"
          onFocus={() => console.log("Bouton en focus")} // Exemple d'ajout d'un gestionnaire d'événement
        >
          Demande de devis
        </button>
      </div>
    </section>
  );
};

About.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default About;
