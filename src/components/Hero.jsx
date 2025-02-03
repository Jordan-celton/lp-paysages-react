import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Hero.css"; // Fichier CSS pour le style

const Hero = () => {
  return (
    <section id="accueil">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="swiper-container"
      >
        <SwiperSlide>
          <img
            src="/public/Aménagement extérieur/amenagement-1.webp"
            alt="Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/Clotûres/cloture 1.webp" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/Murs/mur 1.webp" alt="Image 3" />
        </SwiperSlide>
      </Swiper>

      <div className="hero-content">
        <h1>Bienvenue à LP Paysages</h1>
        <p>
          Transformez votre espace extérieur avec nos solutions paysagères sur
          mesure.
        </p>
        <a href="#contact" className="cta-button">
          Contactez-nous
        </a>
      </div>
    </section>
  );
};

export default Hero;
