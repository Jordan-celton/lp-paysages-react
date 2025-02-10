import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Terrasses from "./pages/Terrasses";
import Clotures from "./pages/Clotures";
import Exterieur from "./pages/Exterieur";
import Maconnerie from "./pages/Maconnerie";

// Composant qui gère le scroll après navigation
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetSection) {
      const element = document.getElementById(location.state.targetSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToSection />
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
