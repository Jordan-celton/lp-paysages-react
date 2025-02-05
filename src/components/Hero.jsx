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
        autoplay={{ delay: 3000 }}
        loop={true}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={ImageHero1} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageHero2} alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageHero3} alt="Image 3" />
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
