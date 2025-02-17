import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";
import "../styles/Clotures.css";

// Importation des images
import cloture1 from "../assets/Clotûres/cloture_1.webp";
import cloture2 from "../assets/Clotûres/cloture_2.webp";
import cloture3 from "../assets/Clotûres/cloture_3.webp";
import cloture4 from "../assets/Clotûres/cloture_4.webp";
import cloture5 from "../assets/Clotûres/cloture_5.webp";
import cloture6 from "../assets/Clotûres/cloture_6.webp";
import cloture7 from "../assets/Clotûres/cloture_7.webp";
import cloture8 from "../assets/Clotûres/cloture_8.webp";

const images = [
  cloture1,
  cloture2,
  cloture3,
  cloture4,
  cloture5,
  cloture6,
  cloture7,
  cloture8,
];

const Clotures = () => {
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
          <h2>Nos réalisations de clôtures</h2>
          <div className="grid-container">
            {images.map((image, index) => (
              <div key={index} className="grid-item">
                <img
                  src={image}
                  alt={`Clôture ${index + 1}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                  onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Agrandir l'image de la clôture ${index + 1}`}
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

export default Clotures;
