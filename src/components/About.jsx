import { useState } from "react";
import "aos/dist/aos.css";
import "../styles/About.css"; // Import du CSS

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="a-propos" data-aos="fade-up">
      <h2>À Propos</h2>
      <div className="a-propos-container">
        <div className="a-propos-texte" data-aos="fade-left">
          <p>
            LP Paysages est une entreprise spécialisée dans l’aménagement et
            l’entretien de jardins. Avec une expérience de plusieurs années,
            notre équipe est dédiée à transformer vos espaces extérieurs en
            lieux d&rsquo;exception.
          </p>
          <p>
            Nous mettons un point d&rsquo;honneur à respecter la nature tout en
            créant des espaces esthétiques et fonctionnels. Que vous ayez un
            projet de petite ou grande envergure, LP Paysages est à vos côtés
            pour concrétiser vos idées.
          </p>
        </div>

        <button className="devis" onClick={() => setModalOpen(true)}>
          Demande de devis
        </button>

        {/* Modale */}
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setModalOpen(false)}>
                &times;
              </span>
              <h2>Demande de devis</h2>
              <form action="send_devis.php" method="post">
                <label htmlFor="nom">Nom:</label>
                <input type="text" id="nom" name="nom" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="details">Détails:</label>
                <textarea id="details" name="details" required></textarea>

                <button type="submit">Envoyer la demande de devis</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
