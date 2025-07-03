import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Hero.css";
// Import des images optimisées
import ImageHero1 from "../assets/Aménagement extérieur/amenagement-1.webp";
import ImageHero2 from "../assets/Clotûres/cloture_1.webp";
import ImageHero3 from "../assets/Murs/mur-1.webp";
import { useEffect } from "react";

const Hero = () => {
  // Préchargement des images
  useEffect(() => {
    const images = [ImageHero1, ImageHero2, ImageHero3];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="accueil" className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="swiper-container"
        aria-live="polite"
      >
        <SwiperSlide>
          <img
            src={ImageHero1}
            alt="Aménagement extérieur avec des plantations et des allées"
            loading="eager"
            width="1920"
            height="1080"
            style={{ objectFit: "cover" }}
            decoding="async"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageHero2}
            alt="Clôture moderne pour délimiter un jardin"
            loading="lazy"
            width="1920"
            height="1080"
            style={{ objectFit: "cover" }}
            decoding="async"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageHero3}
            alt="Mur paysager décoratif dans un jardin"
            loading="lazy"
            width="1920"
            height="1080"
            style={{ objectFit: "cover" }}
            decoding="async"
          />
        </SwiperSlide>
      </Swiper>

      {/* Contenu texte par-dessus Swiper */}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          Bienvenue chez <span>LP Paysages</span>
        </h1>
        <p>
          Transformez votre espace extérieur avec nos solutions paysagères sur
          mesure.
          <br />
          De l&apos;aménagement de jardins à la création de murs paysagers, nous
          sommes là pour réaliser vos rêves paysagers.
        </p>
        <a href="#contact" className="cta-button-hero">
          Contactez-nous
        </a>
      </div>
    </section>
  );
};

export default Hero;
