import { useState, useEffect } from "react";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Exterieur.css"; // Ajoute les styles correspondants

const images = [
  "/photos/Aménagement extérieur/amenagement-1.webp",
  "/photos/Aménagement extérieur/amenagement-2.webp",
  "/photos/Aménagement extérieur/amenagement-3.webp",
  "/photos/Aménagement extérieur/amenagement-4.webp",
  "/photos/Aménagement extérieur/amenagement-5.webp",
  "/photos/Aménagement extérieur/amenagement-7.webp",
];

const Exterieur = () => {
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
          <p>Voici quelques réalisations faites à ... autour de Quimper</p>
        </section>

        <section>
          <h2>Aménagements extérieurs</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Aménagement extérieur ${index + 1}`}
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 LP Paysages. Tous droits réservés.</p>
          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/p/LP-Paysages-100069803825796/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lp.paysages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>

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

export default Exterieur;
