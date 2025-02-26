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

// Gestion du scroll lors du changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

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
