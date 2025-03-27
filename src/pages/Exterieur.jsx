import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imagesData, categories, exterieurContent } from "../data/exterieur";
import "../styles/Pages.css";

const Exterieur = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredImages =
    selectedCategory === "Tous"
      ? imagesData
      : imagesData.filter(
          (img) => img.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className={`exterieur-page ${loaded ? "loaded" : ""}`}>
      <Helmet>
        <title>{exterieurContent.meta.title}</title>
        <meta name="description" content={exterieurContent.meta.description} />
        <meta property="og:image" content={exterieurContent.meta.ogImage} />
        <link rel="canonical" href={exterieurContent.meta.canonicalUrl} />
      </Helmet>

      <HeaderPages />

      <main aria-label="Aménagements extérieurs par LP Paysages">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${exterieurContent.hero.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade"
        >
          <div className="container">
            <h1 data-aos="fade-up">{exterieurContent.hero.title}</h1>
            <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
              {exterieurContent.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" data-aos="fade-up">
          <div className="container">
            <h2>{exterieurContent.services.title}</h2>
            <p className="section-description">
              {exterieurContent.services.description}
            </p>

            <div className="services-grid">
              {exterieurContent.services.items.map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.altText}
                      loading="lazy"
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section" data-aos="fade-up">
          <div className="container">
            <h2>{exterieurContent.gallery.title}</h2>
            <p className="section-description">
              {exterieurContent.gallery.description}
            </p>

            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  aria-label={`Filtrer par ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <article
                  key={index}
                  className="gallery-item"
                  data-aos="fade-up"
                  data-aos-delay={`${(index % 4) * 100}`}
                >
                  <figure>
                    <img
                      src={image.src}
                      alt={image.description}
                      loading="lazy"
                      onClick={() => openModal(index)}
                      aria-label={`Voir ${image.description} en grand`}
                    />
                    <figcaption>
                      <h3>{image.description}</h3>
                      <div className="image-meta">
                        <span>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                          {image.location}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} /> {image.year}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {selectedImageIndex !== null && (
        <ImageModal
          images={filteredImages.map((img) => img.src)}
          selectedImageIndex={selectedImageIndex}
          descriptions={filteredImages.map((img) => img.description)}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Exterieur;
