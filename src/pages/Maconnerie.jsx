import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Maconnerie.css";
import Footer from "../components/Footer";

// Importation des images
import mur1 from "../assets/Murs/mur-1.webp";
import mur2 from "../assets/Murs/mur-2.webp";
import mur3 from "../assets/Murs/mur-3.webp";
import mur4 from "../assets/Murs/mur-4.webp";
import mur5 from "../assets/Murs/mur-5.webp";
import mur6 from "../assets/Murs/mur-6.webp";
import mur7 from "../assets/Murs/mur-7.webp";
import mur8 from "../assets/Murs/mur-8.webp";

const images = [mur1, mur2, mur3, mur4, mur5, mur6, mur7, mur8];

const Maconnerie = () => {
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
        <title>Maçonnerie Paysagère | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations en maçonnerie paysagère à Quimper et ses environs. LP Paysages conçoit vos murs et aménagements extérieurs en pierre et béton."
        />
        <meta
          name="keywords"
          content="maçonnerie paysagère, mur en pierre, mur de soutènement, paysagiste, Quimper"
        />
        <meta
          property="og:title"
          content="Maçonnerie Paysagère | LP Paysages"
        />
        <meta
          property="og:description"
          content="Découvrez quelques réalisations de maçonnerie paysagère autour de Quimper."
        />
        <meta property="og:image" content={mur1} />
        <meta
          property="og:url"
          content="https://www.lppaysages.com/maconnerie"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href={mur1} as="image" />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>
            Voici quelques réalisations de maçonnerie paysagère à Quimper et ses
            environs.
          </p>
        </section>

        <section>
          <h2>Nos réalisations en maçonnerie</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Maçonnerie ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la maçonnerie ${index + 1}`}
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

export default Maconnerie;
