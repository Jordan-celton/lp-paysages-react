import { Helmet } from "react-helmet-async";
import React, { Suspense } from "react";
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
        <meta property="og:url" content="https://www.lppaysages.com" />
        <meta name="twitter:card" content="summary_large_image" />
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
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
