// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Initialisation d'AOS avec des options personnalisées
AOS.init({
  duration: 1000, // Durée de l'animation
  easing: "ease-in-out", // Type de courbe d'animation
  once: true, // Animation qui se produit une seule fois
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
