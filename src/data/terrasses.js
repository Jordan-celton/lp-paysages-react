import terrasse1 from "../assets/Terrasse/terrasse-1.webp";
import terrasse2 from "../assets/Terrasse/terrasse-2.webp";
import terrasse3 from "../assets/Terrasse/terrasse-3.webp";
import terrasse4 from "../assets/Terrasse/terrasse-4.webp";
import terrasse5 from "../assets/Terrasse/terrasse-5.webp";
import terrasse6 from "../assets/Terrasse/terrasse-6.webp";
import terrasse7 from "../assets/Terrasse/terrasse-7.webp";
import terrasseHero from "../assets/Terrasse/terrasse-hero.webp";

export const terrasseImages = [
  {
    src: terrasse1,
    category: "Bois",
    description: "Terrasse en bois exotique à Quimper",
    location: "Quimper",
    year: "2023",
  },
  {
    src: terrasse2,
    category: "Bois",
    description: "Aménagement terrasse avec pergola",
    location: "Concarneau",
    year: "2022",
  },
  {
    src: terrasse3,
    category: "Dallage",
    description: "Dallage en pierre naturelle",
    location: "Bénodet",
    year: "2023",
  },
  {
    src: terrasse4,
    category: "Dallage",
    description: "Terrasse contemporaine en pierre",
    location: "Fouesnant",
    year: "2021",
  },
  {
    src: terrasse5,
    category: "Bois",
    description: "Terrasse sur pilotis avec vue mer",
    location: "Douarnenez",
    year: "2022",
  },
  {
    src: terrasse6,
    category: "Dallage",
    description: "Patio en dallage mixte",
    location: "Pont-l'Abbé",
    year: "2023",
  },
  {
    src: terrasse7,
    category: "Bois",
    description: "Terrasse bois avec spa intégré",
    location: "Névez",
    year: "2021",
  },
];

export const categories = ["Tous", "Bois", "Dallage", "Composites"];

export const terrasseContent = {
  meta: {
    title:
      "Terrasses sur mesure à Quimper | LP Paysages - Bois, Pierre, Composite",
    description:
      "Création de terrasses en bois exotique, pierre naturelle et matériaux composites à Quimper. Devis gratuit pour votre projet d'aménagement extérieur.",
    ogImage: terrasse1,
    canonicalUrl: "https://www.lp-paysages.fr/terrasses",
  },
  hero: {
    image: terrasseHero,
    title: "Terrasses sur mesure en Finistère Sud",
    subtitle:
      "Transformez votre extérieur avec des matériaux nobles et durables",
    altText: "Terrasse en bois avec vue sur jardin",
  },
  sections: {
    values: {
      title: "Notre expertise terrasse",
      items: [
        {
          icon: "leaf",
          title: "Écologique",
          description:
            "Matériaux sourcés durablement et traitements respectueux",
        },
        {
          icon: "ruler",
          title: "Sur-mesure",
          description: "Conception adaptée à votre espace et votre style",
        },
        {
          icon: "handshake",
          title: "Accompagnement",
          description: "De la conception à la pose finale",
        },
      ],
    },
    services: {
      title: "Nos solutions terrasses",
      items: [
        {
          title: "Terrasses en bois",
          features: [
            "Bois exotiques (Ipé, Cumaru...)",
            "Bois européens traités (Pin, Chêne)",
            "Pose sur lambourdes ou plots",
          ],
          image: terrasse1,
          altText: "Exemple de terrasse en bois",
        },
        {
          title: "Dallage pierre",
          features: [
            "Pierre naturelle (granit, ardoise)",
            "Pierre reconstituée",
            "Dallage sur sable ou béton",
          ],
          image: terrasse3,
          altText: "Exemple de dallage en pierre",
        },
        {
          title: "Composites",
          features: [
            "Matériau sans entretien",
            "Large choix de coloris",
            "Structure aluminium ou bois",
          ],
          image: terrasse2,
          altText: "Exemple de terrasse composite",
        },
      ],
    },
    testimonials: {
      title: "Nos clients témoignent",
      items: [
        {
          text: "Notre terrasse en ipé est magnifique après 3 ans d'utilisation. LP Paysages a fait un travail remarquable.",
          author: "Marie D., Bénodet",
          rating: 5,
        },
      ],
    },
  },
};

export const iconMap = {
  leaf: "faLeaf",
  ruler: "faRulerCombined",
  handshake: "faHandshake",
  star: "faStar",
  marker: "faMapMarkerAlt",
  calendar: "faCalendarAlt",
};
