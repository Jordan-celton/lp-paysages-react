import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";

// Importation des images depuis 'src/assets/Clotûres/'
import cloture1 from "../assets/Clotûres/cloture_1.webp";
import cloture2 from "../assets/Clotûres/cloture_2.webp";
import cloture3 from "../assets/Clotûres/cloture_3.webp";
import cloture4 from "../assets/Clotûres/cloture_4.webp";
import cloture5 from "../assets/Clotûres/cloture_5.webp";
import cloture6 from "../assets/Clotûres/cloture_6.webp";
import cloture7 from "../assets/Clotûres/cloture_7.webp";
import cloture8 from "../assets/Clotûres/cloture_8.webp";

// Tableau des images importées
const images = [
  cloture1,
  cloture2,
  cloture3,
  cloture4,
  cloture5,
  cloture6,
  cloture7,
  cloture8,
];

const Clotures = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Fonction pour ouvrir la modale
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => setModalOpen(false);

  // Fermeture de la modale avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Fermeture de la modale lorsque l'on clique en dehors de celle-ci
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Clôtures | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de clôtures autour de Quimper. LP Paysages vous accompagne pour délimiter et sécuriser vos espaces extérieurs."
        />
        <meta
          name="keywords"
          content="clôtures, paysagiste, aménagement extérieur, Quimper, jardin"
        />
        <meta property="og:title" content="Clôtures | LP Paysages" />
        <meta
          property="og:description"
          content="Quelques exemples de clôtures réalisées par LP Paysages."
        />
        <meta property="og:image" content={cloture1} />
        <meta property="og:url" content="https://www.lppaysages.com/clotures" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Préchargement des images importantes */}
        <link rel="preload" href={cloture1} as="image" />
        <link rel="preload" href={cloture2} as="image" />
        <link rel="preload" href={cloture3} as="image" />
      </Helmet>

      <HeaderPages />
      <main>
        <section id="intro">
          <h1>LP Paysages - Clôtures</h1>
          <p>
            Voici quelques réalisations de clôtures faites autour de Quimper.
          </p>
        </section>

        <section id="clotures">
          <h2>Nos Clôtures Réalisées</h2>
          <div className="grid-container">
            {images.map((src, index) => (
              <div key={index} className="grid-item">
                <img
                  src={src}
                  alt={`Clôture réalisée ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la clôture ${index + 1}`}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {modalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!modalOpen}
          onClick={handleClickOutside}
        >
          <div className="modal-content" aria-describedby="modal-description">
            <button
              className="close"
              onClick={closeModal}
              aria-label="Fermer la modale"
            >
              &times;
            </button>
            <h2 id="modal-title">Clôture {selectedImageIndex + 1}</h2>
            <ImageModal
              images={images}
              selectedImageIndex={selectedImageIndex}
              onClose={closeModal}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Clotures;
