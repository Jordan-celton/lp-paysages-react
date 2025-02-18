import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
import Footer from "../components/Footer";

// Importation des images (en utilisant des importations optimisées pour les images)
import amenagement1 from "../assets/Aménagement extérieur/amenagement-1.webp";
import amenagement2 from "../assets/Aménagement extérieur/amenagement-2.webp";
import amenagement3 from "../assets/Aménagement extérieur/amenagement-3.webp";
import amenagement4 from "../assets/Aménagement extérieur/amenagement-4.webp";
import amenagement5 from "../assets/Aménagement extérieur/amenagement-5.webp";
import amenagement6 from "../assets/Aménagement extérieur/amenagement-6.webp";
import amenagement7 from "../assets/Aménagement extérieur/amenagement-7.webp";

const images = [
  amenagement1,
  amenagement2,
  amenagement3,
  amenagement4,
  amenagement5,
  amenagement6,
  amenagement7,
];

const Exterieur = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                environnement. Notre objectif est de transformer votre extérieur
                en un lieu agréable et harmonieux.
              </p>
            </div>
            <div className="service-item">
              <h3>Terrasses en bois</h3>
              <img src={amenagement2} alt="Terrasse en bois" />
              <p>
                Offrez à votre extérieur une terrasse en bois élégante et
                durable. Nous vous proposons des solutions sur mesure pour créer
                un espace de détente idéal, en utilisant des matériaux de
                qualité.
              </p>
            </div>
            <div className="service-item">
              <h3>Aménagement sur mesure</h3>
              <img src={amenagement3} alt="Aménagement sur mesure" />
              <p>
                Chaque projet est unique, et nous nous adaptons à vos besoins
                spécifiques pour concevoir des aménagements sur mesure. Que ce
                soit pour des allées, des jardins zen ou des espaces de jeux,
                nous créons l&apos;aménagement parfait pour votre terrain.
              </p>
            </div>
          </div>
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

        <section className="devisPage">
          <h2>Demande de devis</h2>
          {submitted ? (
            <p>Merci pour votre demande ! Nous vous contacterons bientôt.</p>
          ) : (
            <form className="formPage" onSubmit={handleSubmit}>
              <label>
                Nom:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button type="submit">Envoyer</button>
            </form>
          )}
        </section>
      </main>

      <Footer />

      {/* Modal avec l'image sélectionnée */}
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
