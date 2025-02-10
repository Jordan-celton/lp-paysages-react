import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Hero.css";
import ImageHero1 from "../assets/Aménagement extérieur/amenagement-1.webp";
import ImageHero2 from "../assets/Clotûres/cloture_1.webp";
import ImageHero3 from "../assets/Murs/mur-1.webp";

const Hero = () => {
  return (
    <section id="accueil">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        lazyPreloadPrevNext={1}
        initialSlide={0}
        className="swiper-container"
      >
        <SwiperSlide>
          <img
            src={ImageHero1}
            alt="Aménagement extérieur avec des plantations et des allées"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageHero2}
            alt="Clôture moderne pour délimiter un jardin"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ImageHero3}
            alt="Mur paysager décoratif dans un jardin"
            loading="lazy"
            width="100%"
            height="auto"
          />
        </SwiperSlide>
      </Swiper>

      <div className="hero-content">
        <h1>Bienvenue à LP Paysages</h1>
        <p>
          Transformez votre espace extérieur avec nos solutions paysagères sur
          mesure.
        </p>
        <a href="#contact" className="cta-button-hero">
          Contactez-nous
        </a>
      </div>
    </section>
  );
};

export default Hero;
