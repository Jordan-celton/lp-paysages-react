import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-left">
      <h2>Contactez-nous</h2>
      <p>
        Pour toute demande de renseignements ou de devis, veuillez utiliser les
        informations ci-dessous :
      </p>

      <div className="contact-info">
        <address itemScope itemType="https://schema.org/LocalBusiness">
          <p>
            <strong>Adresse :</strong>
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress"> 19 Allée des Primevères</span>,
              <span itemProp="postalCode"> 29000</span>
              <span itemProp="addressLocality"> Quimper</span>
            </span>
          </p>
          <p>
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:+33633272041"
              aria-label="Appeler le 06 33 27 20 41"
              role="link"
              rel="noopener noreferrer"
              itemProp="telephone"
            >
              06 33 27 20 41
            </a>
          </p>
          <p>
            <strong>Email : </strong>{" "}
            <a
              href="mailto:perennecludovic@gmail.com"
              aria-label="Envoyer un email à perennecludovic@gmail.com"
              role="link"
              rel="noopener noreferrer"
              itemProp="email"
            >
              perennecludovic@gmail.com
            </a>
          </p>
          <p>
            <strong>Horaires : </strong>
            <span itemProp="openingHours">Lundi au Vendredi, 9h - 18h</span>
          </p>
        </address>
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
