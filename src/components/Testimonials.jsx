import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Mon jardin est métamorphosé, un vrai havre de paix. Merci à toute l'équipe !",
      author: "Claire L.",
    },
    {
      text: "Leur créativité et leur savoir-faire sont impressionnants. Bravo !",
      author: "Julien M.",
    },
    {
      text: "Service rapide et impeccable. Je suis ravi de mon nouveau jardin.",
      author: "Sophie T.",
    },
    {
      text: "Remise à niveau du jardin, un gros travail de reprise des éléments, pose d’un textile, garnissage. 👍🏻 une équipe très sérieuse et consciencieuse que nous remercions. Nous sommes ravis du résultat, bravo. 😁",
      author: "Philippe B.",
    },
    {
      text: "Dessouchage d'un talus, pose paillis d'ardoise pour le stabiliser puis panneaux d'eucalyptus et d'ardoise pour clôture. Gravillon le long et pelouse refaite. Un sacré boulot très bien réalisé, plus que satisfait du rendu. Merci à Ludovic et son équipe.",
      author: "Valérie C.",
    },
    {
      text: "Super travail de l’équipe de LP Paysages sur Loctudy sur un chantier complexe! Dépose des ardoises d’une terrasse de 55m2 pour faire une chape avec une pente qui permette l’évacuation de l’eau de pluie. Puis repose des ardoises d’origine. Merci et bravo 👍👏",
      author: "Michael C.",
    },
  ];

  return (
    <section id="temoignages" data-aos="fade-up">
      <h2>Témoignages</h2>
      <div className="carousel-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          aria-live="polite" // Ajout de aria-live pour que le contenu change soit annoncé par les lecteurs d'écran
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-item">
                <p
                  className="review-text"
                  aria-labelledby={`testimonial-${index}`}
                >
                  &quot;{testimonial.text}&quot;
                </p>
                <p
                  className="review-author"
                  aria-describedby={`testimonial-author-${index}`}
                >
                  - {testimonial.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div
        className="swiper-button-prev"
        aria-label="Précédent"
        tabIndex="0" // Assurer la navigation clavier
      ></div>
      <div
        className="swiper-button-next"
        aria-label="Suivant"
        tabIndex="0"
      ></div> */}
    </section>
  );
};

export default Testimonials;
