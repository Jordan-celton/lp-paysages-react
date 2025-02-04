import { useState, useEffect } from "react";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Terrasses.css"; // Ajoute les styles correspondants
import Footer from "../components/Footer";

const images = [
  "/public/Terrasse/terrasse 1.jpg",
  "/public/Terrasse/terrasse 2.jpg",
  "/public/Terrasse/terrasse 3.jpg",
  "/public/Terrasse/terrasse 4.jpg",
  "/public/Terrasse/terrasse 5.jpg",
  "/public/Terrasse/terrasse 6.jpg",
];

const Terrasses = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Ouvre la modal avec l'image sélectionnée
  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  // Ferme la modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Gestion des événements du clavier pour l'accessibilité
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal(); // Ferme la modal quand on appuie sur "Escape"
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>Voici quelques réalisations faites aux alentours de Quimper</p>
        </section>

        <section>
          <h2>Terrasses</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Terrasse ${index + 1}`}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Affichage de la modal si une image est sélectionnée */}
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

export default Terrasses;
