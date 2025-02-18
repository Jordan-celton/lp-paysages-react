import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import "../styles/Pages.css";
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
            Voici quelques réalisations de maçonnerie paysagère à Quimper et ses
            environs.
          </p>
        </section>

        {/* Section Nos services */}
        <section>
          <h2>Nos services</h2>
          <p>
            Chez LP Paysages, nous proposons des services spécialisés en
            maçonnerie paysagère pour donner forme à vos projets extérieurs. Que
            ce soit pour la construction de murs, d’enceintes, ou d’aménagements
            personnalisés, nous mettons notre savoir-faire à votre disposition.
          </p>
          <div className="services-container">
            <div className="service-item">
              <h3>Murs en pierre</h3>
              <img src={mur1} alt="Mur en pierre" />
              <p>
                Nous créons des murs en pierre naturelle pour ajouter du
                caractère et de la solidité à vos espaces extérieurs. Ces murs
                offrent une excellente résistance aux intempéries.
              </p>
            </div>
            <div className="service-item">
              <h3>Murs en béton</h3>
              <img src={mur2} alt="Mur en béton" />
              <p>
                Offrez à votre jardin ou terrasse une touche moderne avec nos
                murs en béton, robustes et élégants, adaptés à vos besoins
                spécifiques.
              </p>
            </div>
            <div className="service-item">
              <h3>Aménagements extérieurs </h3>
              <img src={mur3} alt="Aménagement extérieur" />
              <p>
                Tous nos projets sont personnalisés en fonction de vos envies.
                Nous vous proposons des aménagements extérieurs uniques et
                adaptés à vos goûts.
              </p>
            </div>
          </div>
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

export default Maconnerie;
