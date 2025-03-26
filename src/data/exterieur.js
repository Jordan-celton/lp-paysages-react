import amenagement1 from "../assets/Aménagement extérieur/amenagement-1.webp";
import amenagement2 from "../assets/Aménagement extérieur/amenagement-2.webp";
import amenagement3 from "../assets/Aménagement extérieur/amenagement-3.webp";
import amenagement4 from "../assets/Aménagement extérieur/amenagement-4.webp";
import amenagement5 from "../assets/Aménagement extérieur/amenagement-5.webp";
import amenagement6 from "../assets/Aménagement extérieur/amenagement-6.webp";
import amenagement7 from "../assets/Aménagement extérieur/amenagement-7.webp";
import amenagement9 from "../assets/Aménagement extérieur/amenagement-9.webp";
import amenagement11 from "../assets/Aménagement extérieur/amenagement-11.webp";
import exterieurHero from "../assets/Aménagement extérieur/amenagement-hero.webp";

export const imagesData = [
  {
    src: amenagement1,
    category: "Paysager",
    description:
      "Création d'un jardin paysager esthétique et fonctionnel, adapté à votre environnement.",
    location: "Quimper",
    year: "2023",
  },
  {
    src: amenagement2,
    category: "Paysager",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
    location: "Concarneau",
    year: "2022",
  },
  {
    src: amenagement3,
    category: "Sur-mesure",
    description:
      "Aménagement sur mesure adapté à vos besoins spécifiques, que ce soit des allées ou des espaces de jeux.",
    location: "Bénodet",
    year: "2023",
  },
  {
    src: amenagement4,
    category: "Paysager",
    description:
      "Jardin paysager personnalisé avec une sélection de plantes adaptées à votre espace.",
    location: "Fouesnant",
    year: "2021",
  },
  {
    src: amenagement5,
    category: "Sur-mesure",
    description:
      "Création d'un espace extérieur unique, réalisé sur mesure selon vos envies.",
    location: "Douarnenez",
    year: "2022",
  },
  {
    src: amenagement6,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur unique, réalisé selon vos envies et les caractéristiques de votre terrain.",
    location: "Pont-l'Abbé",
    year: "2023",
  },
  {
    src: amenagement7,
    category: "Terrasses",
    description:
      "Aménagement paysager créatif pour transformer votre espace extérieur en un lieu harmonieux.",
    location: "Névez",
    year: "2021",
  },
  {
    src: amenagement9,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
    location: "Quimperlé",
    year: "2023",
  },
  {
    src: amenagement11,
    category: "Sur-mesure",
    description:
      "Aménagement extérieur sur mesure, adapté à vos besoins spécifiques et à votre terrain.",
    location: "Moëlan-sur-Mer",
    year: "2021",
  },
];

export const categories = ["Tous", "Paysager", "Terrasses", "Sur-mesure"];

export const exterieurContent = {
  meta: {
    title: "Aménagement extérieur | LP Paysages",
    description:
      "Découvrez nos réalisations d'aménagements extérieurs autour de Quimper. LP Paysages vous accompagne pour créer votre espace extérieur idéal.",
    ogImage: amenagement1,
    canonicalUrl: "https://www.lp-paysages.fr/amenagement-exterieur",
  },
  hero: {
    image: exterieurHero,
    title: "Aménagements extérieurs sur mesure en Finistère",
    subtitle: "Transformez votre espace extérieur selon vos envies",
    altText: "Aménagement extérieur paysager avec terrasse et végétation",
  },
  services: {
    title: "Nos services",
    description:
      "Chez LP Paysages, nous proposons des aménagements extérieurs adaptés à vos besoins spécifiques. Que vous recherchiez un jardin paysager, une terrasse en bois ou un espace extérieur personnalisé, nous avons la solution idéale pour vous.",
    items: [
      {
        title: "Aménagement paysager",
        description:
          "Nous créons des jardins esthétiques et fonctionnels, en choisissant des plantes et des matériaux adaptés à votre environnement.",
        image: amenagement1,
        altText: "Jardin paysager aménagé",
      },
      {
        title: "Aménagement sur mesure",
        description:
          "Chaque projet est unique, et nous nous adaptons à vos besoins pour créer des aménagements sur mesure, selon vos envies et contraintes.",
        image: amenagement11,
        altText: "Aménagement extérieur personnalisé",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations",
    description:
      "Découvrez nos différents projets d'aménagement extérieur réalisés dans le Finistère Sud.",
  },
};
