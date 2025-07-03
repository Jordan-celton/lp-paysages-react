import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/Services.css";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return (
    <section id="services" data-aos="fade-up">
      <h2>Nos Services</h2>
      <div className="service-container">
        {/* Conception de Jardins */}
        <div
          className="service service-garden"
          data-aos="fade-left"
          aria-label="Service de conception de jardins"
          role="article"
        >
          <div className="service-inner">
            <div className="service-front">
              <i className="fas fa-tree" aria-hidden="true" />
              <h3>Conception de Jardins</h3>
              <p>
                Nous créons des espaces extérieurs sur mesure pour vous offrir
                un jardin unique et agréable. Grâce à une étude 3D détaillée,
                nous concevons un aménagement personnalisé.
              </p>
            </div>
            <div className="service-back" />
          </div>
        </div>

        {/* Entretien Jardin */}
        <div
          className="service service-maintenance"
          data-aos="fade-left"
          aria-label="Service d'entretien des jardins"
          role="article"
        >
          <div className="service-inner">
            <div className="service-front">
              <i className="fas fa-leaf" aria-hidden="true" />
              <h3>Entretien Jardin</h3>
              <p>
                Des services d&#39;entretien réguliers pour garder votre jardin
                en parfait état. Contrats annuels ou ponctuels, avec un crédit
                d&#39;impôt de 50 %.
              </p>
            </div>
            <div className="service-back" />
          </div>
        </div>

        {/* Création / Rénovation */}
        <div
          className="service service-renovation"
          data-aos="fade-left"
          aria-label="Service de rénovation de jardins"
          role="article"
        >
          <div className="service-inner">
            <div className="service-front">
              <i className="fas fa-tools" aria-hidden="true" />
              <h3>Création</h3>
              <p>
                Modernisation et rénovation de vos espaces extérieurs pour les
                sublimer et leur donner une nouvelle vie, en alliant esthétique
                et fonctionnalité.
              </p>
            </div>
            <div className="service-back" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
