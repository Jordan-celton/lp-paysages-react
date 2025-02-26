import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

// Importation des images
import mur1 from "../assets/Murs/mur-1.webp";
import mur2 from "../assets/Murs/mur-2.webp";
import mur3 from "../assets/Murs/mur-3.webp";
import mur5 from "../assets/Murs/mur-5.webp";
import mur6 from "../assets/Murs/mur-6.webp";
import mur7 from "../assets/Murs/mur-7.webp";
import mur8 from "../assets/Murs/mur-8.webp";
import mur9 from "../assets/Murs/mur-9.webp";
import mur10 from "../assets/Murs/mur-10.webp";

// Données des images
const imagesData = [
  {
    src: mur1,
    category: "Pierre",
    description:
      "Mur en pierre naturelle apportant caractère et solidité à votre extérieur.",
  },
  {
    src: mur2,
    category: "Béton",
    description:
      "Mur en béton moderne et durable, offrant une finition soignée et résistante.",
  },
  {
    src: mur3,
    category: "Pierre",
    description:
      "Murs en pierre décorative, parfaits pour l’aménagement de vos espaces extérieurs.",
  },
  {
    src: mur5,
    category: "Pierre",
    description:
      "Mur en pierres naturelles offrant une excellente résistance aux intempéries.",
  },
  {
    src: mur6,
    category: "Béton",
    description:
      "Murs en béton, résistants et modernes, adaptés à tous types d'aménagements extérieurs.",
  },
  {
    src: mur7,
    category: "Pierre",
    description:
      "Mur en pierre naturelle, créant une ambiance chaleureuse et authentique dans votre jardin.",
  },
  {
    src: mur8,
    category: "Béton",
    description:
      "Murs en béton décoratif, idéals pour des aménagements extérieurs élégants.",
  },
  {
    src: mur9,
    category: "Pierre",
    description:
      "Mur en pierre naturelle, robuste et esthétique, pour un extérieur plein de charme.",
  },
  {
    src: mur10,
    category: "Pierre",
    description:
      "Aménagement extérieur en pierre, pour un espace extérieur unique et personnalisé.",
  },
];

// Catégories
const categories = ["Tous", "Pierre", "Béton"];

const Maconnerie = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Ouvrir la modale d'image
  const openModal = (index) => setSelectedImageIndex(index);

  // Fermer la modale d'image
  const closeModal = () => setSelectedImageIndex(null);

  // Fermer la modale avec la touche Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  // Filtrer les images selon la catégorie sélectionnée
  const filteredImages =
    selectedCategory === "Tous"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <Helmet>
        <title>Maçonnerie Paysagère | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations en maçonnerie paysagère à Quimper et ses environs. LP Paysages conçoit vos murs et aménagements extérieurs en pierre et béton."
        />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>
            Découvrez nos réalisations de maçonnerie paysagère à Quimper et ses
            environs. Nous vous proposons des murs et aménagements extérieurs en
            pierre et béton, réalisés sur mesure pour vos besoins.
          </p>
        </section>

        {/* Section Nos services */}
        <section>
          <h2>Nos services</h2>
          <div className="services-container">
            <div className="service-item">
              <h3>Murs en pierre naturelle</h3>
              <img src={mur9} alt="Mur en pierre" />
              <p>
                Créez un espace unique avec nos murs en pierre naturelle,
                résistants aux intempéries et élégants.
              </p>
            </div>
            <div className="service-item">
              <h3>Murs en béton décoratif</h3>
              <img src={mur2} alt="Mur en béton" />
              <p>
                Optez pour des murs en béton, modernes et pratiques, pour une
                finition soignée et durable.
              </p>
            </div>
            <div className="service-item">
              <h3>Aménagements extérieurs</h3>
              <img src={mur10} alt="Aménagement extérieur" />
              <p>
                Nous concevons des aménagements extérieurs personnalisés selon
                vos envies et vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Section Réalisations avec filtre */}
        <section>
          <h2>Nos réalisations en maçonnerie</h2>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid-container">
            {filteredImages.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image.src}
                  alt={`Maçonnerie ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la maçonnerie ${index + 1}`}
                />
                <div className="image-caption">{image.description}</div>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Modal d'affichage des images */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={filteredImages.map((img) => img.src)}
          selectedImageIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Maconnerie;
