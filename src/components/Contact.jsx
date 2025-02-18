import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-left">
      <h2>Contact</h2>
      <p>
        Pour toute demande de renseignements ou de devis, veuillez utiliser les
        informations ci-dessous :
      </p>

      <div className="contact-info">
        <address>
          <p>
            <strong>Adresse :</strong> 19 Allée des Primevères, 29000 Quimper
          </p>
          <p>
            <strong>Téléphone :</strong>{" "}
            <a
              href="tel:0633272041"
              aria-label="Appeler le 06 33 27 20 41"
              role="link"
            >
              06 33 27 20 41
            </a>
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:perennecludovic@gmail.com"
              aria-label="Envoyer un email à perennecludovic@gmail.com"
              role="link"
            >
              perennecludovic@gmail.com
            </a>
          </p>
          <p>
            <strong>Horaires :</strong> Lundi au Vendredi, 9h - 18h
          </p>
        </address>
      </div>
    </section>
  );
};

export default Contact;
