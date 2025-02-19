import { Helmet } from "react-helmet-async";
import React, { useState, useEffect, Suspense } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

// Lazy load des autres composants
const About = React.lazy(() => import("../components/About"));
const Services = React.lazy(() => import("../components/Services"));
const Projects = React.lazy(() => import("../components/Projects"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const Contact = React.lazy(() => import("../components/Contact"));
import Footer from "../components/Footer"; // importation statique

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Fonction pour fermer la modale avec la touche "Escape"
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div>
      {/* Balises SEO */}
      <Helmet>
        <title>LP Paysages | Paysagiste expert en aménagement extérieur</title>
        <meta
          name="description"
          content="LP Paysages transforme vos espaces verts avec des aménagements paysagers de qualité. Demandez un devis dès maintenant !"
        />
        <meta
          name="keywords"
          content="paysagiste, jardin, aménagement extérieur, espaces verts, entretien jardin, création paysagère"
        />
        <meta
          property="og:title"
          content="LP Paysages | Aménagement extérieur et entretien de jardins"
        />
        <meta
          property="og:description"
          content="Découvrez nos services de paysagisme et embellissez votre espace extérieur."
        />
        {/* <meta
          property="og:image"
          content="https://www.lppaysages.com/images/hero.webp" // Image WebP optimisée
        /> */}
        <meta property="og:url" content="https://www.lppaysages.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Préchargement des images principales */}
        {/* <link
          rel="preload"
          href="https://www.lppaysages.com/images/hero.webp"
          as="image"
          type="image/webp"
        /> */}
        {/* <link
          rel="preload"
          href="https://www.lppaysages.com/images/hero-alt.webp"
          as="image"
          type="image/webp"
        /> */}
      </Helmet>

      {/* Header et Hero */}
      <Header />
      <Hero />

      {/* Chargement paresseux des autres sections */}
      <Suspense
        fallback={
          <div className="loading-indicator">Chargement des sections...</div>
        }
      >
        <About setModalOpen={setModalOpen} />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>

      {/* La modale pour la demande de devis */}
      {modalOpen && (
        <div
          className="modal"
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!modalOpen}
        >
          <div className="modal-content">
            <button
              className="close"
              onClick={() => setModalOpen(false)}
              aria-label="Fermer la modale"
            >
              &times;
            </button>
            <h2 id="modal-title">Demande de devis</h2>
            <form action="send_devis.php" method="post">
              <label htmlFor="nom">Nom:</label>
              <input type="text" id="nom" name="nom" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="details">Détails:</label>
              <textarea id="details" name="details" required></textarea>

              <button type="submit">Envoyer la demande de devis</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
