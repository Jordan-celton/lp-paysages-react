import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

// Importation des images
import terrasse1 from "../assets/Terrasse/terrasse-1.webp";
import terrasse2 from "../assets/Terrasse/terrasse-2.webp";
import terrasse3 from "../assets/Terrasse/terrasse-3.webp";
import terrasse4 from "../assets/Terrasse/terrasse-4.webp";
import terrasse5 from "../assets/Terrasse/terrasse-5.webp";
import terrasse6 from "../assets/Terrasse/terrasse-6.webp";
import terrasse7 from "../assets/Terrasse/terrasse-7.webp";

const imagesData = [
  {
    src: terrasse1,
    category: "Bois",
    description:
      "Une belle terrasse en bois naturel pour un espace chaleureux.",
  },
  {
    src: terrasse2,
    category: "Bois",
    description:
      "Terrasse en bois idéale pour un jardin moderne et accueillant.",
  },
  {
    src: terrasse3,
    category: "Dallage",
    description: "Dallage en pierre offrant un style élégant et robuste.",
  },
  {
    src: terrasse4,
    category: "Dallage",
    description:
      "Une terrasse en pierre naturelle pour une touche authentique.",
  },
  {
    src: terrasse5,
    category: "Bois",
    description: "Terrasse en bois exotique résistante aux intempéries.",
  },
  {
    src: terrasse6,
    category: "Dallage",
    description:
      "Un dallage raffiné parfait pour les grandes surfaces extérieures.",
  },
  {
    src: terrasse7,
    category: "Bois",
    description:
      "Terrasse en bois claire apportant une ambiance zen et apaisante.",
  },
];

const categories = ["Tous", "Bois", "Dallage", "Composites"];

const Terrasses = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtrage des images selon la catégorie sélectionnée
  const filteredImages =
    selectedCategory === "Tous"
      ? imagesData
      : imagesData.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <Helmet>
        <title>Terrasses sur mesure | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de terrasses en bois et en pierre autour de Quimper. LP Paysages vous accompagne pour concevoir votre terrasse idéale."
        />
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

        {/* Section Nos services */}
        <section>
          <h2>Nos services</h2>
          <div className="services-container">
            <div className="service-item">
              <h3>Terrasses en bois</h3>
              <img src={terrasse1} alt="Terrasse en bois" />
              <p>
                Profitez d’une terrasse en bois, idéale pour un aspect naturel
                et chaleureux.
              </p>
            </div>
            <div className="service-item">
              <h3>Dallage en pierres naturelles</h3>
              <img src={terrasse3} alt="Terrasse en pierre" />
              <p>
                Choisissez une terrasse en pierre pour une solution robuste et
                élégante.
              </p>
            </div>
            <div className="service-item">
              <h3>Terrasses composites</h3>
              <img src={terrasse2} alt="Terrasse composite" />
              <p>
                Une terrasse moderne et résistante, facile d'entretien et
                esthétique.
              </p>
            </div>
          </div>
        </section>

        {/* Section Réalisations avec filtre */}
        <section>
          <h2>Nos réalisations de terrasses</h2>

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
                {/* Image */}
                <img
                  src={image.src}
                  alt={`Terrasse ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la terrasse ${index + 1}`}
                />

                {/* Texte explicatif */}
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

export default Terrasses;
