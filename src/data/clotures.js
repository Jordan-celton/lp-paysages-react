import cloture1 from "../assets/Clotûres/cloture_1.webp";
import cloture2 from "../assets/Clotûres/cloture_2.webp";
import cloture4 from "../assets/Clotûres/cloture_4.webp";
import cloture5 from "../assets/Clotûres/cloture_5.webp";
import cloture6 from "../assets/Clotûres/cloture_6.webp";
import cloture8 from "../assets/Clotûres/cloture_8.webp";
import clotureHero from "../assets/Clotûres/clotures-hero.webp";

export const imagesData = [
  {
    src: cloture1,
    category: "Bois",
    description:
      "Clôture en bois idéale pour créer une ambiance naturelle et chaleureuse dans votre jardin.",
    location: "Quimper",
    year: "2023",
  },
  {
    src: cloture2,
    category: "Métal",
    description:
      "Clôture en métal moderne et résistante, offrant une sécurité accrue à votre propriété.",
    location: "Concarneau",
    year: "2022",
  },
  {
    src: cloture4,
    category: "Métal",
    description:
      "Clôture en acier pour une sécurité optimale et une esthétique contemporaine.",
    location: "Bénodet",
    year: "2023",
  },
  {
    src: cloture5,
    category: "Bois",
    description:
      "Clôture en bois, robuste et durable, offrant une délimitation élégante pour votre jardin.",
    location: "Fouesnant",
    year: "2021",
  },
  {
    src: cloture6,
    category: "Métal",
    description:
      "Clôture en aluminium légère, résistante et moderne, idéale pour protéger votre propriété.",
    location: "Douarnenez",
    year: "2022",
  },
  {
    src: cloture8,
    category: "Métal",
    description:
      "Clôture métallique en panneaux rigides pour une protection durable et une esthétique raffinée.",
    location: "Pont-l'Abbé",
    year: "2023",
  },
];

export const categories = ["Tous", "Bois", "Métal"];

export const cloturesContent = {
  meta: {
    title: "Clôtures sur mesure | LP Paysages",
    description:
      "Découvrez nos réalisations de clôtures pour sécuriser et embellir vos extérieurs autour de Quimper.",
    ogImage: cloture1,
    canonicalUrl: "https://www.lp-paysages.fr/clotures",
  },
  hero: {
    image: clotureHero,
    title: "Clôtures sur mesure en Finistère",
    subtitle: "Sécurité et esthétique pour délimiter votre espace",
    altText: "Clôture en bois avec vue sur jardin",
  },
  services: {
    title: "Nos services",
    description:
      "Chez LP Paysages, nous proposons différents types de clôtures adaptées à vos besoins spécifiques.",
    items: [
      {
        title: "Clôtures en bois",
        description:
          "Option naturelle et chaleureuse pour votre jardin, durable et esthétique.",
        image: cloture1,
        altText: "Clôture en bois naturel",
      },
      {
        title: "Clôtures en métal",
        description:
          "Solution moderne et résistante pour une sécurité accrue de votre propriété.",
        image: cloture2,
        altText: "Clôture métallique contemporaine",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations de clôtures",
    description:
      "Découvrez nos différents projets de clôtures réalisés dans le Finistère Sud.",
  },
};
