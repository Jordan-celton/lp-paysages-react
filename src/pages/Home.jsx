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
      <Header />
      <Hero />
      <About setModalOpen={setModalOpen} />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />

      {/* La modale est ici, dans Home */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
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
