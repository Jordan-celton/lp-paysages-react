import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
import Footer from "../components/Footer";

// Importation des images
import terrasse1 from "../assets/Terrasse/terrasse-1.webp";
import terrasse2 from "../assets/Terrasse/terrasse-2.webp";
import terrasse3 from "../assets/Terrasse/terrasse-3.webp";
import terrasse4 from "../assets/Terrasse/terrasse-4.webp";
import terrasse5 from "../assets/Terrasse/terrasse-5.webp";
import terrasse6 from "../assets/Terrasse/terrasse-6.webp";
import terrasse7 from "../assets/Terrasse/terrasse-7.webp";

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
    // Simulation de soumission de formulaire
    setSubmitted(true);
  };

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
          <p>
            Chez LP Paysages, nous proposons des services sur mesure pour créer
            la terrasse idéale pour votre extérieur. Nous utilisons des
            matériaux de qualité pour concevoir des espaces conviviaux et
            durables.
          </p>
          <div className="services-container">
            <div className="service-item">
              <h3>Terrasses en bois</h3>
              <img src={terrasse1} alt="Terrasse en bois" />
              <p>
                Profitez d’une terrasse en bois, idéale pour un aspect naturel
                et chaleureux. Nos terrasses en bois sont conçues pour durer
                tout en étant esthétiques et pratiques.
              </p>
            </div>
            <div className="service-item">
              <h3>Terrasses en pierre</h3>
              <img src={terrasse3} alt="Terrasse en pierre" />
              <p>
                Choisissez une terrasse en pierre pour une solution robuste et
                élégante. Ce matériau apporte une touche de raffinement à votre
                espace extérieur.
              </p>
            </div>
            <div className="service-item">
              <h3>Terrasses personnalisées</h3>
              <img src={terrasse2} alt="Terrasse personnalisée" />
              <p>
                Chaque projet est unique ! Nous vous accompagnons dans la
                création d’une terrasse qui correspond à vos goûts et à votre
                espace.
              </p>
            </div>
          </div>
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
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la terrasse ${index + 1}`}
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
            <form onSubmit={handleSubmit}>
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
