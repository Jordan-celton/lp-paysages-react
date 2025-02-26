import "../styles/About.css";

const About = () => {
  const email = "perennecludovic@gmail.com";
  const subject = encodeURIComponent("Demande de devis - LP Paysages");
  const body = encodeURIComponent(
    "Bonjour,\n\nJe souhaiterais obtenir un devis pour..."
  );

  return (
    <section id="a-propos" data-aos="fade-up">
      <h1>À propos de LP Paysages</h1>
      <div className="a-propos-container">
        <div className="a-propos-texte" data-aos="fade-left">
          <p>
            LP Paysages est une entreprise spécialisée dans l’aménagement et
            l’entretien de jardins. Avec plusieurs années d’expérience, notre
            équipe se dévoue à transformer vos espaces extérieurs en lieux
            d’exception.
          </p>
          <p>
            Nous mettons un point d’honneur à respecter la nature tout en créant
            des espaces esthétiques et fonctionnels. Que ce soit pour un projet
            de petite ou grande envergure, LP Paysages est à vos côtés pour
            concrétiser vos idées.
          </p>
        </div>

        <a
          className="devis"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          aria-label="Demander un devis par e-mail"
          onFocus={() => console.log("Bouton en focus")}
        >
          Demande de devis
        </a>
      </div>
    </section>
  );
};

export default About;
