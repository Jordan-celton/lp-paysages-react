import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Terrasses from "./pages/Terrasses";
import Clotures from "./pages/Clotures";
import Exterieur from "./pages/Exterieur";
import Maconnerie from "./pages/Maconnerie";

// Gestion améliorée du scroll
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si pas de hash, on scroll vers le haut
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Si hash présent (ex: /#projets), on scroll vers la section
    else {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrasses" element={<Terrasses />} />
          <Route path="/clotures" element={<Clotures />} />
          <Route path="/exterieur" element={<Exterieur />} />
          <Route path="/maconnerie" element={<Maconnerie />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
