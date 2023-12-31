import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  LaCapsule,
  vitejs,
  nextjs,
  expo,
  emploi,
  morning,
  movies,
  CometCall,
  Locapic,
  Faceup,
} from "../assets";
// import faceUp from "../video/faceUp.mp4";
// import Locapick from "../video/Locapick.mp4";
// import ComEtCall from "../video/ComEtCall.mp4";

export const navLinks = [
  {
    id: "about",
    title: "Aperçu",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "projets",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developpeuse",
    icon: web,
  },
  {
    title: "Full-Stack Developpeuse",
    icon: mobile,
  },
  {
    title: "MERN Developpeuse",
    icon: backend,
  },
  {
    title: "Mobile Developpeuse",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript ",
    icon: javascript,
  },
  {
    name: "TypeScript ",
    icon: typescript,
  },
  {
    name: "ReactJS ",
    icon: reactjs,
  },
  {
    name: "ReduxToolkit ",
    icon: redux,
  },
  {
    name: "TailwindCSS ",
    icon: tailwind,
  },
  {
    name: "NodeJS ",
    icon: nodejs,
  },
  {
    name: "MongoDB ",
    icon: mongodb,
  },
  {
    name: "ThreeJS ",
    icon: threejs,
  },
  {
    name: "github ",
    icon: github,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Expo ",
    icon: expo,
  },
  {
    name: "Vite ",
    icon: vitejs,
  },
  {
    name: "NextJS.13 ",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Full Stack Bootcamp",
    company_name: "La Capsule",
    icon: LaCapsule,
    iconBg: "#383E56",
    date: "Janvier 2023 - Mars 2023",
    points: [
      "Formation lors d'un BootCamp de 3 mois à l'issue de laquelle j'ai obtenu ma certification professionnelle de Chef de projet, concepteur et développeur d'applications web et mobile de La Capsule (certifié RNCP - niveau 6), équivalent à un niveau Bac +3/4.",

      "Les compétences acquises lors de cette formation sont les suivantes : React, Redux, React Native, planification de sprint, Node.js, Mongoose, Mockup, Jest (framework de test JavaScript), ingénierie logicielle Full Stack, frameworks JavaScript, Express.js, développement web, conception de l'expérience utilisateur (UX), Expo, User Story, React.js et MongoDB.",

      "Durant cette formation, nous avons développé 5 applications web, 2 applications mobiles, participé à 2 hackathons et réalisé un MVP nommé Com-et-Call, une application mobile, en utilisant les méthodologies agiles.",
    ],
  },
  {
    title: "Recherche d'emploi",
    company_name: "Limousin",
    icon: emploi,
    iconBg: "#E6DEDD",
    date: "Avril 2023 - Aujourd'hui",
    points: [
      "Je suis activement à la recherche d'un emploi pour construire ma carrière à Limoges et ses environs.",

      "Très motivée, je saurai m'adapter rapidement à votre société !",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Com-et-Call",
    spe: "mobile",
    description:
      "L'application qui vous fournit le bon contacte en fonction de la problématique que votre enfant rencontre à école . Problème de transport, de cantine, de professeur non remplacé..... Si votre problématique n'apparait pas dans notre liste, vous avez la possibilité d'obtenir de l'aide auprès de ChatGPT.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "Projet de fin de Batch",
        color: "blue-text-gradient",
      },
    ],
    image: CometCall,
    // video: ComEtCall,
    source_code_link: "https://github.com/BriceMoutanin/frontend-cometcall",
    // web_link: "https://dalle-client-pink.vercel.app/",
  },
  {
    name: "FaceUp",
    spe: "mobile",
    description:
      "FaceUp est une application mobile permettant de prendre des photos et de les stocker dans une galerie d’images.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "orange-text-gradient",
      },

      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "Projet Capsule",
        color: "pink-text-gradient",
      },
    ],
    image: Faceup,
    // video: faceUp,
    // source_code_link: "https://github.com/MathildeDucros/dalle-client",
    //web_link: "https://dalle-client-pink.vercel.app/",
  },
  {
    name: "Locapic",
    spe: "mobile",
    description:
      "Locapic est une application mobile permettant de géolocaliser un utilisateur en matérialisant ses déplacements sur une carte interactive et en offrant la possibilité d’y ajouter des points d'intérêt et de les retrouver simplement.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
      {
        name: "Projet Capsule",
        color: "pink-text-gradient",
      },
    ],
    image: Locapic,
    // video: Locapick,
    source_code_link: "https://github.com/MathildeDucros/front-locapic",
    // web_link: "https://dalle-client-pink.vercel.app/",
  },
  {
    name: "Dall-E",
    spe: "web",
    description:
      "Clone de Dall-E, générateur d'images en utilisant une intelligence artificielle",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MathildeDucros/dalle-client",
    web_link: "https://dalle-client-pink.vercel.app/",
  },
  {
    name: "Codex",
    spe: "web",
    description:
      "Codex, clone de chatGPT mais centralisé sur les besoins d'un développeur.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAi",
        color: "pink-text-gradient",
      },
      {
        name: "ViteJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MathildeDucros/Open-AI",
    web_link: "https://codex-ai-beige.vercel.app/",
  },
  {
    name: "Promptopia",
    spe: "web",
    description:
      "Mise en pratique de la dernière version de Next JS 13. Promptopia est similaire à Twitter, mais les utilisateurs y postent des prompts pour ChatGPT.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS 13",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MathildeDucros/promptopia",
    web_link: "https://promptopia-red.vercel.app/",
  },
  {
    name: "MorningNews",
    spe: "web",
    description:
      "MorningNews est un site d’affichage des news récentes du journal The Verge. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Projet Capsule",
        color: "pink-text-gradient",
      },
    ],
    image: morning,
    source_code_link: "https://github.com/MathildeDucros/morningnew-front",
    web_link: "https://morningnew-front.vercel.app/",
  },
  {
    name: "MyMoviz",
    spe: "web",
    description:
      "MyMoviz est un site qui va vous permettre d’afficher les derniers films sortis avec la possibilité de créer une wishlist, placer un compteur de vues et d’évaluer chacun des films présentés.",
    tags: [
      {
        name: "MERN-stack",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Projet Capsule",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/MathildeDucros/MyMovizFront",
    web_link: "https://my-moviz-front-two.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
