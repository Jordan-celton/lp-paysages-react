import { useState } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";

const Clotures = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "../assets/Clotûres/cloture_1.webp",
    "../assets/Clotûres/cloture_2.webp",
    "../assets/Clotûres/cloture_3.webp",
    "../assets/Clotûres/cloture_4.webp",
    "../assets/Clotûres/cloture_5.webp",
    "../assets/Clotûres/cloture_6.webp",
    "../assets/Clotûres/cloture_7.webp",
    "../assets/Clotûres/cloture_8.webp",
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

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
        <meta property="og:image" content="/Clotûres/cloture_1.webp" />
        <meta property="og:url" content="https://www.lppaysages.com/clotures" />
        <meta name="twitter:card" content="summary_large_image" />
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
        <ImageModal
          images={images}
          selectedImageIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default Clotures;
