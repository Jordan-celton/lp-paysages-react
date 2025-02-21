import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/Services.css";
import AOS from "aos"; // Initialisation d'AOS pour plus de contrôle sur les animations

const Services = () => {
  // Initialiser AOS lors du premier rendu
  useEffect(() => {
    AOS.init({
      debounceDelay: 50, // Optimisation de la fréquence d'activation des animations
      throttleDelay: 99, // Détection du scroll plus fluide
    });
  }, []);

  return (
    <section id="services" data-aos="fade-up">
      <h2>Nos Services</h2>
      <div className="service-container">
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Service de conception de jardins"
          role="article"
        >
          <i
            className="fas fa-tree"
            aria-hidden="true"
            role="img"
            alt="Icône arbre représentant le service de conception de jardins"
          />
          <h3>Conception de Jardins</h3>
          <p>
            Nous créons des espaces extérieurs sur mesure pour vous offrir un
            jardin unique et agréable. Grâce à une étude 3D détaillée de votre
            projet, nous concevons un aménagement personnalisé qui répond
            parfaitement à vos envies et à votre environnement.
          </p>
        </div>
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Service d'entretien des jardins"
          role="article"
        >
          <i
            className="fas fa-leaf"
            aria-hidden="true"
            role="img"
            alt="Icône feuille représentant le service d'entretien des jardins"
          />
          <h3>Entretien</h3>
          <p>
            Des services d'entretien réguliers pour garder votre jardin en
            parfait état toute l'année. Nous proposons des contrats annuels ou
            ponctuels (tonte, taille, entretien des massifs), avec un crédit
            d'impôt de 50 % sur ces prestations.
          </p>
        </div>
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Service de rénovation de jardins"
          role="article"
        >
          <i
            className="fas fa-tools"
            aria-hidden="true"
            role="img"
            alt="Icône outils représentant le service de rénovation des jardins"
          />
          <h3>Création</h3>
          <p>
            Modernisation et rénovation de vos espaces extérieurs pour les
            sublimer et leur donner une nouvelle vie, en alliant esthétique et
            fonctionnalité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
