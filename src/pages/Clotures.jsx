import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../styles/Pages.css";

// Importation des images
import cloture1 from "../assets/Clotûres/cloture_1.webp";
import cloture2 from "../assets/Clotûres/cloture_2.webp";
import cloture4 from "../assets/Clotûres/cloture_4.webp";
import cloture5 from "../assets/Clotûres/cloture_5.webp";
import cloture6 from "../assets/Clotûres/cloture_6.webp";
import cloture8 from "../assets/Clotûres/cloture_8.webp";

// Données des images
const imagesData = [
  {
    src: cloture1,
    category: "Bois",
    description:
      "Clôture en bois idéale pour créer une ambiance naturelle et chaleureuse dans votre jardin.",
  },
  {
    src: cloture2,
    category: "Métal",
    description:
      "Clôture en métal moderne et résistante, offrant une sécurité accrue à votre propriété.",
  },
  {
    src: cloture4,
    category: "Métal",
    description:
      "Clôture en acier pour une sécurité optimale et une esthétique contemporaine.",
  },
  {
    src: cloture5,
    category: "Bois",
    description:
      "Clôture en bois, robuste et durable, offrant une délimitation élégante pour votre jardin.",
  },
  {
    src: cloture6,
    category: "Métal",
    description:
      "Clôture en aluminium légère, résistante et moderne, idéale pour protéger votre propriété.",
  },
  {
    src: cloture8,
    category: "Métal",
    description:
      "Clôture métallique en panneaux rigides pour une protection durable et une esthétique raffinée.",
  },
];

// Catégories
const categories = ["Tous", "Bois", "Métal"];

const Clotures = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
        <title>Clôtures sur mesure | LP Paysages</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de clôtures pour sécuriser et embellir vos extérieurs autour de Quimper. LP Paysages vous accompagne dans votre projet."
        />
      </Helmet>

      <HeaderPages />
      <main>
        <section>
          <h1>LP Paysages</h1>
          <p>
            Découvrez nos réalisations de clôtures en bois et en métal autour de
            Quimper.
          </p>
        </section>

        <section>
          <h2>Nos services</h2>
          <p>
            Chez LP Paysages, nous proposons différents types de clôtures
            adaptées à vos besoins spécifiques. Que vous cherchiez une solution
            esthétique pour votre jardin ou une option plus sécuritaire pour
            délimiter votre propriété, nous avons la solution parfaite pour
            vous.
          </p>
          <div className="services-container">
            <div className="service-item">
              <h3>Clôtures en bois</h3>
              <img src={cloture1} alt="Clôture en bois" />
              <p>
                Les clôtures en bois sont une excellente option pour créer une
                ambiance naturelle et chaleureuse dans votre jardin. Elles sont
                durables, esthétiques et s’adaptent parfaitement à tout type de
                terrain. Vous pouvez les personnaliser en fonction de vos
                préférences et de l’esthétique de votre extérieur.
              </p>
            </div>
            <div className="service-item">
              <h3>Clôtures en métal</h3>
              <img src={cloture2} alt="Clôture en métal" />
              <p>
                Les clôtures en métal offrent une sécurité accrue tout en
                apportant une touche moderne à votre propriété. Résistantes aux
                intempéries et aux nuisances extérieures, elles nécessitent peu
                d'entretien et sont idéales pour les terrains nécessitant une
                délimitation robuste.
              </p>
            </div>
          </div>
        </section>

        {/* Section Réalisations avec filtre */}
        <section>
          <h2>Nos réalisations de clôtures</h2>

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
                  alt={`Clôture ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la clôture ${index + 1}`}
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

export default Clotures;
