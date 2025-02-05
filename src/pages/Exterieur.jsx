import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Exterieur.css";
import Footer from "../components/Footer";

const images = [
  "../assets/Aménagement extérieur/amenagement-1.webp",
  "../assets/Aménagement extérieur/amenagement-2.webp",
  "../assets/Aménagement extérieur/amenagement-3.webp",
  "../assets/Aménagement extérieur/amenagement-4.webp",
  "../assets/Aménagement extérieur/amenagement-5.webp",
  "../assets/Aménagement extérieur/amenagement-6.webp",
  "../assets/Aménagement extérieur/amenagement-7.webp",
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

  // Gestion de la touche "Escape" pour fermer la modal
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
        <title>Aménagement extérieur | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations d'aménagements extérieurs autour de Quimper. LP Paysages vous accompagne pour créer votre espace extérieur idéal."
        />
        <meta
          name="keywords"
          content="aménagement extérieur, paysagiste, jardin, Quimper, espace vert"
        />
        <meta
          property="og:title"
          content="Aménagement extérieur | LP Paysages"
        />
        <meta
          property="og:description"
          content="Découvrez quelques-uns de nos projets d'aménagements extérieurs réalisés à Quimper et ses environs."
        />
        <meta
          property="og:image"
          content="/Aménagement extérieur/amenagement-1.webp"
        />
        <meta
          property="og:url"
          content="https://www.lppaysages.com/amenagement-exterieur"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>Voici quelques réalisations faites autour de Quimper.</p>
        </section>

        <section>
          <h2>Aménagements extérieurs</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Aménagement extérieur ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de l'aménagement extérieur ${
                    index + 1
                  }`}
                  style={{ cursor: "pointer" }}
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

export default Exterieur;
