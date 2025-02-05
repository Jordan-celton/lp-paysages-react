import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <meta
          property="og:image"
          content="https://www.lppaysages.com/images/hero.jpg"
        />
        <meta property="og:url" content="https://www.lppaysages.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <Hero />
      <About setModalOpen={setModalOpen} />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

      {/* La modale pour la demande de devis */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close"
              onClick={() => setModalOpen(false)}
              aria-label="Fermer la modale"
            >
              &times;
            </button>
            <h2>Demande de devis</h2>
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
