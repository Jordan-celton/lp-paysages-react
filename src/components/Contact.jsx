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
        <p>
          <strong>Adresse :</strong> 19 Allée des Primevères, 29000 Quimper
        </p>
        <p>
          <strong>Téléphone :</strong>{" "}
          <a href="tel:0633272041">06 33 27 20 41</a>
        </p>
        <p>
          <strong>Email :</strong>{" "}
          <a href="mailto:perennecludovic@gmail.com">
            perennecludovic@gmail.com
          </a>
        </p>
        <p>
          <strong>Horaires :</strong> Lundi au Vendredi, 9h - 18h
        </p>
      </div>
    </section>
  );
};

export default Contact;
