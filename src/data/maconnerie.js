import mur1 from "../assets/Murs/mur-1.webp";
import mur2 from "../assets/Murs/mur-2.webp";
import mur3 from "../assets/Murs/mur-3.webp";
import mur5 from "../assets/Murs/mur-5.webp";
import mur6 from "../assets/Murs/mur-6.webp";
import mur7 from "../assets/Murs/mur-7.webp";
import mur8 from "../assets/Murs/mur-8.webp";
import mur9 from "../assets/Murs/mur-9.webp";
import mur10 from "../assets/Murs/mur-10.webp";
import maconnerieHero from "../assets/Murs/maconnerie-hero.webp";

export const imagesData = [
  {
    src: mur1,
    category: "Pierre",
    description:
      "Mur en pierre naturelle apportant caractère et solidité à votre extérieur.",
    location: "Quimper",
    year: "2023",
  },
  {
    src: mur2,
    category: "Béton",
    description:
      "Mur en béton moderne et durable, offrant une finition soignée et résistante.",
    location: "Concarneau",
    year: "2022",
  },
  {
    src: mur3,
    category: "Pierre",
    description:
      "Murs en pierre décorative, parfaits pour l'aménagement de vos espaces extérieurs.",
    location: "Bénodet",
    year: "2023",
  },
  {
    src: mur5,
    category: "Pierre",
    description:
      "Mur en pierres naturelles offrant une excellente résistance aux intempéries.",
    location: "Fouesnant",
    year: "2021",
  },
  {
    src: mur6,
    category: "Béton",
    description:
      "Murs en béton, résistants et modernes, adaptés à tous types d'aménagements extérieurs.",
    location: "Douarnenez",
    year: "2022",
  },
  {
    src: mur7,
    category: "Pierre",
    description:
      "Mur en pierre naturelle, créant une ambiance chaleureuse et authentique dans votre jardin.",
    location: "Pont-l'Abbé",
    year: "2023",
  },
  {
    src: mur8,
    category: "Béton",
    description:
      "Murs en béton décoratif, idéals pour des aménagements extérieurs élégants.",
    location: "Névez",
    year: "2021",
  },
  {
    src: mur9,
    category: "Pierre",
    description:
      "Mur en pierre naturelle, robuste et esthétique, pour un extérieur plein de charme.",
    location: "Rosporden",
    year: "2022",
  },
  {
    src: mur10,
    category: "Pierre",
    description:
      "Aménagement extérieur en pierre, pour un espace extérieur unique et personnalisé.",
    location: "Quimperlé",
    year: "2023",
  },
];

export const categories = ["Tous", "Pierre", "Béton"];

export const maconnerieContent = {
  meta: {
    title: "Maçonnerie Paysagère | LP Paysages",
    description:
      "Découvrez nos réalisations en maçonnerie paysagère à Quimper et ses environs. LP Paysages conçoit vos murs et aménagements extérieurs en pierre et béton.",
    ogImage: mur1,
    canonicalUrl: "https://www.lp-paysages.fr/maconnerie",
  },
  hero: {
    image: maconnerieHero,
    title: "Maçonnerie paysagère en Finistère",
    subtitle: "Des murs et aménagements extérieurs solides et esthétiques",
    altText: "Mur en pierre naturelle avec végétation",
  },
  services: {
    title: "Nos services",
    description:
      "Nous proposons des solutions complètes en maçonnerie paysagère pour vos projets extérieurs.",
    items: [
      {
        title: "Murs en pierre naturelle",
        description:
          "Créez un espace unique avec nos murs en pierre naturelle, résistants aux intempéries et élégants.",
        image: mur9,
        altText: "Mur en pierre naturelle",
      },
      {
        title: "Murs en béton décoratif",
        description:
          "Optez pour des murs en béton, modernes et pratiques, pour une finition soignée et durable.",
        image: mur2,
        altText: "Mur en béton contemporain",
      },
      {
        title: "Aménagements extérieurs",
        description:
          "Nous concevons des aménagements extérieurs personnalisés selon vos envies et vos besoins.",
        image: mur10,
        altText: "Aménagement extérieur en pierre",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations en maçonnerie",
    description:
      "Découvrez nos différents projets de murs et aménagements en pierre et béton.",
  },
};
