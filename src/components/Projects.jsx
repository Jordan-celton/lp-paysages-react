import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../styles/Projects.css";
import AOS from "aos";

// Images des projets
import Piscine from "../assets/Piscine/après-piscine3.webp";
import Exterieur from "../assets/Aménagement extérieur/amenagement-1.webp";
import Cloture from "../assets/Clotûres/cloture_1.webp";
import Mur from "../assets/Murs/mur-1.webp";

// Composant réutilisable pour les cartes
const ProjectCard = ({
  to,
  imgSrc,
  imgAlt,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <Link
      to={to}
      aria-label={`Voir les projets de ${title.toLowerCase()}`}
      role="link"
    >
      <div className="card">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          width="100%"
          height="auto"
        />
        <div className="card-content" data-aos="fade-left">
          <h3>{title}</h3>
          <p>{description}</p>
          <button
            className="cta-button"
            aria-label={`Voir plus de ${title.toLowerCase()}`}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </Link>
  );
};
ProjectCard.propTypes = {
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      debounceDelay: 50, // Optimisation des animations
      throttleDelay: 99, // Améliorer la performance du scroll
      once: true, // L'animation ne se produit qu'une fois
    });
  }, []);

  return (
    <section id="projets" data-aos="fade-up">
      <h2>Réalisations</h2>
      <div className="card-container">
        <ProjectCard
          to="/terrasses"
          imgSrc={Piscine}
          imgAlt="Terrasse avec piscine aménagée"
          title="Terrasses"
          description="Découvrez comment nous transformons des espaces en terrasses magnifiques et fonctionnelles."
          buttonLabel="Voir plus"
        />

        <ProjectCard
          to="/exterieur"
          imgSrc={Exterieur}
          imgAlt="Aménagement extérieur avec jardin"
          title="Aménagements extérieurs"
          description="Création d'espaces extérieurs harmonieux et durables, adaptés à vos besoins."
          buttonLabel="Voir plus"
        />

        <ProjectCard
          to="/clotures"
          imgSrc={Cloture}
          imgAlt="Clôture moderne et esthétique"
          title="Clôtures"
          description="Conception et installation de clôtures pour garantir sécurité et esthétique."
          buttonLabel="Voir plus"
        />

        <ProjectCard
          to="/maconnerie"
          imgSrc={Mur}
          imgAlt="Mur en maçonnerie moderne"
          title="Maçonneries"
          description="Travaux de maçonnerie pour des structures solides et durables."
          buttonLabel="Voir plus"
        />
      </div>
    </section>
  );
};

export default Projects;
