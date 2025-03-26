import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderPages from "../components/HeaderPages";
import ImageModal from "../components/ImageModal";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faRulerCombined,
  faHandshake,
  faStar,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { terrasseImages, categories, terrasseContent } from "../data/terrasses";
import "../styles/Terrasses.css";

const Terrasses = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Correction de l'import AOS
    import("aos").then(({ default: AOS }) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
      AOS.refresh();
    });

    setLoaded(true);
    return () => {
      document.body.style.overflow = "unset";
    };
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
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredImages =
    selectedCategory === "Tous"
      ? terrasseImages
      : terrasseImages.filter((img) => img.category === selectedCategory);

  return (
    <div className={`terrasses-page ${loaded ? "loaded" : ""}`}>
      <Helmet>
        <title>{terrasseContent.meta.title}</title>
        <meta name="description" content={terrasseContent.meta.description} />
        <meta property="og:image" content={terrasseContent.meta.ogImage} />
        <link rel="canonical" href={terrasseContent.meta.canonicalUrl} />
      </Helmet>

      <HeaderPages />

      <main aria-label="Réalisations de terrasses par LP Paysages">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${terrasseContent.hero.image})`,
          }}
          data-aos="fade"
          data-aos-duration="1000"
        >
          <div className="container">
            <h1 data-aos="fade-up" data-aos-delay="300">
              {terrasseContent.hero.title}
            </h1>
            <p className="subtitle" data-aos="fade-up" data-aos-delay="500">
              {terrasseContent.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 data-aos="fade-down">
              {terrasseContent.sections.values.title}
            </h2>
            <div className="values-grid">
              {terrasseContent.sections.values.items.map((item, index) => (
                <div
                  key={index}
                  className="value-card"
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <FontAwesomeIcon
                    icon={
                      {
                        leaf: faLeaf,
                        ruler: faRulerCombined,
                        handshake: faHandshake,
                      }[item.icon]
                    }
                    className="value-icon"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 data-aos="flip-down">
              {terrasseContent.sections.services.title}
            </h2>
            <div className="services-grid">
              {terrasseContent.sections.services.items.map((service, index) => (
                <div
                  key={index}
                  className="service-card"
                  data-aos="zoom-in"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.altText}
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <h2 data-aos="flip-up">Nos réalisations</h2>
            <div className="filters" data-aos="fade-right" data-aos-delay="100">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
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
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={150 * (index % 3)}
                >
                  <figure>
                    <img
                      src={image.src}
                      alt={image.description}
                      onClick={() => openModal(index)}
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

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 data-aos="fade-down">
              {terrasseContent.sections.testimonials.title}
            </h2>
            <div
              className="testimonials-slider"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              {terrasseContent.sections.testimonials.items.map(
                (testimonial, index) => (
                  <blockquote key={index}>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                    <cite>{testimonial.author}</cite>
                  </blockquote>
                )
              )}
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

export default Terrasses;
