import "aos/dist/aos.css";
import "../styles/Services.css";

const Services = () => {
  return (
    <section id="services" data-aos="fade-up">
      <h2>Nos Services</h2>
      <div className="service-container">
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Conception de Jardins"
        >
          <i className="fas fa-tree" aria-hidden="true"></i>
          <h3>Conception de Jardins</h3>
          <p>
            Nous créons des espaces extérieurs sur mesure pour vous offrir un
            jardin unique et agréable.
          </p>
        </div>
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Entretien des jardins"
        >
          <i className="fas fa-leaf" aria-hidden="true"></i>
          <h3>Entretien</h3>
          <p>
            Des services d&apos;entretien réguliers pour garder votre jardin en
            parfait état toute l&apos;année.
          </p>
        </div>
        <div
          className="service"
          data-aos="fade-left"
          aria-label="Rénovation de jardins"
        >
          <i className="fas fa-tools" aria-hidden="true"></i>
          <h3>Rénovation</h3>
          <p>
            Modernisation et rénovation de vos espaces extérieurs pour les
            rendre comme neufs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
