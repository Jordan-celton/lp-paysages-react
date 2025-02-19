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
      <h1>À propos de LP Paysages</h1> {/* Utiliser un <h1> pour la page */}
      <div className="a-propos-container">
        <div className="a-propos-texte" data-aos="fade-left">
          <p>
            LP Paysages est une entreprise spécialisée dans l’aménagement et
            l’entretien de jardins. Avec plusieurs années d’expérience, notre
            équipe se dévoue à transformer vos espaces extérieurs en lieux
            d’exception.
          </p>
          <p>
            Nous mettons un point d’honneur à respecter la nature tout en créant
            des espaces esthétiques et fonctionnels. Que ce soit pour un projet
            de petite ou grande envergure, LP Paysages est à vos côtés pour
            concrétiser vos idées.
          </p>
        </div>

        <button
          className="devis"
          onClick={handleDevisClick}
          aria-label="Demander un devis"
          onFocus={() => console.log("Bouton en focus")}
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
