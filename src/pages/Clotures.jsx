import { useState } from "react";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";

const Clotures = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "/photos/Clotûres/cloture 1.webp",
    "/photos/Clotûres/cloture 2.webp",
    "/photos/Clotûres/cloture 4.webp",
    "/photos/Clotûres/cloture 5.webp",
    "/photos/Clotûres/cloture 7.webp",
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div>
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
                  alt={`Clôture ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
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
