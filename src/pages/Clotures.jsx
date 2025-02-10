import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";
import "../styles/Clotures.css";

// Importation des images
import cloture1 from "../assets/Clotûres/cloture_1.webp";
import cloture2 from "../assets/Clotûres/cloture_2.webp";
import cloture3 from "../assets/Clotûres/cloture_3.webp";
import cloture4 from "../assets/Clotûres/cloture_4.webp";
import cloture5 from "../assets/Clotûres/cloture_5.webp";
import cloture6 from "../assets/Clotûres/cloture_6.webp";
import cloture7 from "../assets/Clotûres/cloture_7.webp";
import cloture8 from "../assets/Clotûres/cloture_8.webp";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Clôtures sur mesure | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de clôtures pour sécuriser et embellir vos extérieurs autour de Quimper. LP Paysages vous accompagne dans votre projet."
        />
        <meta
          name="keywords"
          content="clôture bois, clôture métal, aménagement extérieur, paysagiste, Quimper"
        />
        <meta property="og:title" content="Clôtures sur mesure | LP Paysages" />
        <meta
          property="og:description"
          content="Nos réalisations de clôtures pour protéger et structurer vos espaces extérieurs à Quimper et ses environs."
        />
        <meta property="og:image" content={cloture1} />
        <meta property="og:url" content="https://www.lppaysages.com/clotures" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href={cloture1} as="image" />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>
            Découvrez nos réalisations de clôtures en bois et en métal autour de
            Quimper. Sécurisez et embellissez vos extérieurs avec LP Paysages.
          </p>
        </section>

        <section>
          <h2>Nos réalisations de clôtures</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Clôture ${index + 1}`}
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

      <Footer />

      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          selectedImageIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Clotures;
