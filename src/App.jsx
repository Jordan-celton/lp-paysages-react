import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terrasses from "./pages/Terrasses";
import Clotures from "./pages/Clotures";
import Exterieur from "./pages/Exterieur";
import Maconnerie from "./pages/Maconnerie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terrasses" element={<Terrasses />} />
        <Route path="/clotures" element={<Clotures />} />
        <Route path="/exterieur" element={<Exterieur />} />
        <Route path="/maconnerie" element={<Maconnerie />} />
      </Routes>
    </Router>
  );
}

export default App;
