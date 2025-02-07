import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Terrasses.css";
import Footer from "../components/Footer";

// Importation des images
import terrasse1 from "../assets/terrasse/terrasse-1.webp";
import terrasse2 from "../assets/terrasse/terrasse-2.webp";
import terrasse3 from "../assets/terrasse/terrasse-3.webp";
import terrasse4 from "../assets/terrasse/terrasse-4.webp";
import terrasse5 from "../assets/terrasse/terrasse-5.webp";
import terrasse6 from "../assets/terrasse/terrasse-6.webp";
import terrasse7 from "../assets/terrasse/terrasse-7.webp";

const images = [
  terrasse1,
  terrasse2,
  terrasse3,
  terrasse4,
  terrasse5,
  terrasse6,
  terrasse7,
];

const Terrasses = () => {
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
        <title>Terrasses sur mesure | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de terrasses en bois et en pierre autour de Quimper. LP Paysages vous accompagne pour concevoir votre terrasse idéale."
        />
        <meta
          name="keywords"
          content="terrasse bois, terrasse pierre, aménagement extérieur, paysagiste, Quimper"
        />
        <meta
          property="og:title"
          content="Terrasses sur mesure | LP Paysages"
        />
        <meta
          property="og:description"
          content="Nos réalisations de terrasses en bois et en pierre à Quimper et ses environs."
        />
        <meta property="og:image" content={terrasse1} />
        <meta
          property="og:url"
          content="https://www.lppaysages.com/terrasses"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" href={terrasse1} as="image" />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>
            Découvrez nos réalisations de terrasses en bois et en pierre autour
            de Quimper. Profitez d&apos;un espace extérieur unique avec LP
            Paysages.
          </p>
        </section>

        <section>
          <h2>Nos réalisations de terrasses</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Terrasse ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la terrasse ${index + 1}`}
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

export default Terrasses;
