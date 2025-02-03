import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projets" data-aos="fade-up">
      <h2>Réalisations</h2>
      <div className="card-container">
        <Link to="/terrasses">
          <div className="card">
            <img src="/public/Piscine/après-piscine3.jpg" alt="Terrasse" />
            <div className="card-content" data-aos="fade-left">
              <h3>Terrasses</h3>
              <p>
                Découvrez comment nous transformons des espaces en terrasses
                magnifiques et fonctionnelles.
              </p>
              <button className="cta-button">Voir plus</button>
            </div>
          </div>
        </Link>

        <Link to="/exterieur">
          <div className="card">
            <img
              src="/public/Aménagement extérieur/amenagement-1.webp"
              alt="Aménagement extérieur"
            />
            <div className="card-content" data-aos="fade-left">
              <h3>Aménagements extérieurs</h3>
              <p>
                Création d&apos;espaces extérieurs harmonieux et durables,
                adaptés à vos besoins.
              </p>
              <button className="cta-button">Voir plus</button>
            </div>
          </div>
        </Link>

        <Link to="/clotures">
          <div className="card">
            <img src="/public/Clotûres/cloture 2.webp" alt="Clôtures" />
            <div className="card-content" data-aos="fade-left">
              <h3>Clôtures</h3>
              <p>
                Conception et installation de clôtures pour garantir sécurité et
                esthétique.
              </p>
              <button className="cta-button">Voir plus</button>
            </div>
          </div>
        </Link>

        <Link to="/maconnerie">
          <div className="card">
            <img src="/public/Murs/mur 5.webp" alt="Murs" />
            <div className="card-content" data-aos="fade-left">
              <h3>Maçonneries</h3>
              <p>
                Travaux de maçonnerie pour des structures solides et durables.
              </p>
              <button className="cta-button">Voir plus</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
