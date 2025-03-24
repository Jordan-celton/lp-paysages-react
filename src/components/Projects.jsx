import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

// Images des projets
import Piscine from "../assets/Piscine/après-piscine3.webp";
import Exterieur from "../assets/Aménagement extérieur/amenagement-1.webp";
import Cloture from "../assets/Clotûres/cloture_1.webp";
import Mur from "../assets/Murs/mur-1.webp";

// Données des projets
const projectsData = [
  {
    to: "/terrasses",
    imgSrc: Piscine,
    imgAlt: "Terrasse avec piscine aménagée",
    title: "Terrasses",
    description:
      "Découvrez comment nous transformons des espaces en terrasses magnifiques et fonctionnelles.",
    buttonLabel: "Voir plus",
  },
  {
    to: "/exterieur",
    imgSrc: Exterieur,
    imgAlt: "Aménagement extérieur avec jardin",
    title: "Aménagements extérieurs",
    description:
      "Création d'espaces extérieurs harmonieux et durables, adaptés à vos besoins.",
    buttonLabel: "Voir plus",
  },
  {
    to: "/clotures",
    imgSrc: Cloture,
    imgAlt: "Clôture moderne et esthétique",
    title: "Clôtures",
    description:
      "Conception et installation de clôtures pour garantir sécurité et esthétique.",
    buttonLabel: "Voir plus",
  },
  {
    to: "/maconnerie",
    imgSrc: Mur,
    imgAlt: "Mur en maçonnerie moderne",
    title: "Maçonnerie",
    description:
      "Travaux de maçonnerie pour des structures solides et durables.",
    buttonLabel: "Voir plus",
  },
];

// Composant ProjectCard
const ProjectCard = ({
  to,
  imgSrc,
  imgAlt,
  title,
  description,
  buttonLabel,
  animation,
}) => (
  <Link
    to={to}
    aria-label={`Voir les projets de ${title.toLowerCase()}`}
    className="project-link"
  >
    <div className="card" data-aos={animation}>
      <img
        src={imgSrc}
        alt={imgAlt}
        loading="lazy"
        width="100%"
        height="auto"
        onError={(e) => (e.target.src = "/images/fallback-image.jpg")}
      />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="cta-button">{buttonLabel}</button>
      </div>
    </div>
  </Link>
);

// Définition des types de propriétés
ProjectCard.propTypes = {
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

// Composant principal Projects
const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <section id="projets" data-aos="fade-up">
      <h2>Réalisations</h2>
      <div className="card-container">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            animation={index % 2 === 0 ? "fade-left" : "fade-right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
