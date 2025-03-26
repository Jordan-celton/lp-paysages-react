// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

AOS.init({
  duration: 800,
  easing: "ease-out-quart",
  once: false, // <- Changement important : permet de rejouer les animations
  offset: 120, // Déclenchement un peu plus tôt
  delay: 0, // Pas de délai initial
  mirror: true, // Anime aussi lors du scroll up
});

// Vérification si l'élément #root existe avant de créer la racine
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    // <StrictMode>
    <App />
    /* </StrictMode> */
  );
}
