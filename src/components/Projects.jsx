import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../styles/Projects.css";
import Piscine from "../assets/Piscine/après-piscine3.webp";
import Exterieur from "../assets/Aménagement extérieur/amenagement-1.webp";
import Cloture from "../assets/Clotûres/cloture_1.webp";
import Mur from "../assets/Murs/mur-1.webp";

const Projects = () => {
  return (
    <section id="projets" data-aos="fade-up">
      <h2>Réalisations</h2>
      <div className="card-container">
        <Link to="/terrasses" aria-label="Voir les projets de terrasses">
          <div className="card">
            <img
              src={Piscine}
              alt="Terrasse avec piscine aménagée"
              loading="lazy"
            />
            <div className="card-content" data-aos="fade-left">
              <h3>Terrasses</h3>
              <p>
                Découvrez comment nous transformons des espaces en terrasses
                magnifiques et fonctionnelles.
              </p>
              <button
                className="cta-button"
                aria-label="Voir plus de terrasses"
              >
                Voir plus
              </button>
            </div>
          </div>
        </Link>

        <Link
          to="/exterieur"
          aria-label="Voir les projets d'aménagement extérieur"
        >
          <div className="card">
            <img
              src={Exterieur}
              alt="Aménagement extérieur avec jardin"
              loading="lazy"
            />
            <div className="card-content" data-aos="fade-left">
              <h3>Aménagements extérieurs</h3>
              <p>
                Création d&apos;espaces extérieurs harmonieux et durables,
                adaptés à vos besoins.
              </p>
              <button
                className="cta-button"
                aria-label="Voir plus d'aménagements extérieurs"
              >
                Voir plus
              </button>
            </div>
          </div>
        </Link>

        <Link to="/clotures" aria-label="Voir les projets de clôtures">
          <div className="card">
            <img
              src={Cloture}
              alt="Clôture moderne et esthétique"
              loading="lazy"
            />
            <div className="card-content" data-aos="fade-left">
              <h3>Clôtures</h3>
              <p>
                Conception et installation de clôtures pour garantir sécurité et
                esthétique.
              </p>
              <button className="cta-button" aria-label="Voir plus de clôtures">
                Voir plus
              </button>
            </div>
          </div>
        </Link>

        <Link to="/maconnerie" aria-label="Voir les projets de maçonnerie">
          <div className="card">
            <img src={Mur} alt="Mur en maçonnerie moderne" loading="lazy" />
            <div className="card-content" data-aos="fade-left">
              <h3>Maçonneries</h3>
              <p>
                Travaux de maçonnerie pour des structures solides et durables.
              </p>
              <button
                className="cta-button"
                aria-label="Voir plus de maçonneries"
              >
                Voir plus
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
