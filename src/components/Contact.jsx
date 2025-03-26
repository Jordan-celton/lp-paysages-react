import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 data-aos="fade-down" data-aos-delay="50">
        Contactez-nous
      </h2>
      <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
        Nous sommes à votre disposition pour répondre à toutes vos questions.
      </p>

      <div className="contact-info">
        <div className="contact-grid">
          <div className="info-block" data-aos="zoom-in" data-aos-delay="150">
            <i className="fas fa-phone"></i>
            <h3>Téléphone</h3>
            <a href="tel:+33633272041" className="contact-link">
              06 33 27 20 41
            </a>
          </div>

          <div className="info-block" data-aos="zoom-in" data-aos-delay="250">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:perennecludovic@gmail.com" className="contact-link">
              perennecludovic@gmail.com
            </a>
          </div>

          <div className="info-block" data-aos="zoom-in" data-aos-delay="350">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Adresse</h3>
            <p>19 Allée des Primevères</p>
          </div>
        </div>
      </div>

      {/* Données structurées JSON-LD pour le SEO local */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LP Paysages",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19 Allée des Primevères",
              "addressLocality": "Quimper",
              "postalCode": "29000",
              "addressCountry": "FR"
            },
            "telephone": "+33 6 33 27 20 41",
            "email": "perennecludovic@gmail.com",
            "openingHours": "Mo-Fr 09:00-18:00",
            "url": "https://www.lppaysages.com"
          }
        `}
      </script>
    </section>
  );
};

export default Contact;
