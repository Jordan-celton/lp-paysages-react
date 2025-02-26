import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

// Importation des images
import amenagement1 from "../assets/Aménagement extérieur/amenagement-1.webp";
import amenagement2 from "../assets/Aménagement extérieur/amenagement-2.webp";
import amenagement3 from "../assets/Aménagement extérieur/amenagement-3.webp";
import amenagement4 from "../assets/Aménagement extérieur/amenagement-4.webp";
import amenagement5 from "../assets/Aménagement extérieur/amenagement-5.webp";
import amenagement6 from "../assets/Aménagement extérieur/amenagement-6.webp";
import amenagement7 from "../assets/Aménagement extérieur/amenagement-7.webp";
import amenagement9 from "../assets/Aménagement extérieur/amenagement-9.webp";
import amenagement11 from "../assets/Aménagement extérieur/amenagement-11.webp";
import terrasse5 from "../assets/Terrasse/terrasse-5.webp";

// Données des images
const imagesData = [
  {
    src: amenagement1,
    category: "Paysager",
    description:
      "Création d'un jardin paysager esthétique et fonctionnel, adapté à votre environnement.",
  },
  {
    src: amenagement2,
    category: "paysager",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
  },
  {
    src: amenagement3,
    category: "Sur-mesure",
    description:
      "Aménagement sur mesure adapté à vos besoins spécifiques, que ce soit des allées ou des espaces de jeux.",
  },
  {
    src: amenagement4,
    category: "Paysager",
    description:
      "Jardin paysager personnalisé avec une sélection de plantes adaptées à votre espace.",
  },
  {
    src: amenagement5,
    category: "Sur-mesure",
    description:
      "Création d'un espace extérieur unique, réalisé sur mesure selon vos envies.",
  },
  {
    src: amenagement6,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur unique, réalisé selon vos envies et les caractéristiques de votre terrain.",
  },
  {
    src: amenagement7,
    category: "Terrasses",
    description:
      "Aménagement paysager créatif pour transformer votre espace extérieur en un lieu harmonieux.",
  },
  {
    src: terrasse5,
    category: "Terrasses",
    description:
      "Terrasse en bois sur mesure, idéale pour profiter de votre extérieur en toute saison.",
  },
  {
    src: amenagement9,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
  },
  {
    src: amenagement11,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
  },
];

// Catégories
const categories = ["Tous", "Paysager", "Terrasses", "Sur-mesure"];

const Exterieur = () => {
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
        <title>Aménagement extérieur | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations d'aménagements extérieurs autour de Quimper. LP Paysages vous accompagne pour créer votre espace extérieur idéal."
        />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>Voici quelques réalisations faites autour de Quimper.</p>
        </section>

        {/* Section Nos services */}
        <section>
          <h2>Nos services</h2>
          <p>
            Chez LP Paysages, nous proposons des aménagements extérieurs adaptés
            à vos besoins spécifiques. Que vous recherchiez un jardin paysager,
            une terrasse en bois ou un espace extérieur personnalisé, nous avons
            la solution idéale pour vous.
          </p>
          <div className="services-container">
            <div className="service-item">
              <h3>Aménagement paysager</h3>
              <img src={amenagement1} alt="Aménagement paysager" />
              <p>
                Nous créons des jardins esthétiques et fonctionnels, en
                choisissant des plantes et des matériaux adaptés à votre
                environnement.
              </p>
            </div>
            <div className="service-item">
              <h3>Terrasses en bois</h3>
              <img src={terrasse5} alt="Terrasse en bois" />
              <p>
                Offrez à votre extérieur une terrasse en bois élégante et
                durable, réalisée sur mesure pour votre espace extérieur.
              </p>
            </div>
            <div className="service-item">
              <h3>Aménagement sur mesure</h3>
              <img src={amenagement11} alt="Aménagement sur mesure" />
              <p>
                Chaque projet est unique, et nous nous adaptons à vos besoins
                pour créer des aménagements sur mesure, selon vos envies et
                contraintes.
              </p>
            </div>
          </div>
        </section>

        {/* Section Réalisations avec filtre */}
        <section>
          <h2>Aménagements extérieurs</h2>

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
                  alt={`Aménagement extérieur ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de l'aménagement extérieur ${
                    index + 1
                  }`}
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

export default Exterieur;
