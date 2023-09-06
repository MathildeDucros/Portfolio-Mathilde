import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, carrent, jobit, tripguide, morning, movies } from "../assets";
import { webclic } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(web_link, "_blank")}
              className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
            >
              <img
                src={webclic}
                alt="source code"
                className="w-1/1.5 h-1/1.5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const tags = [
    {
      name: "MERN-stack",
      color: "blue-text-gradient",
    },
    {
      name: "MongoDB",
      color: "green-text-gradient",
    },
    {
      name: "Material-UI",
      color: "pink-text-gradient",
    },
    {
      name: "Redux",
      color: "orange-text-gradient",
    },
    {
      name: "Rapid API-Exercices DB",
      color: "blue-text-gradient",
    },
  ];

  const projects = [
    {
      name: "Dall-E",
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
      name: "Promptopia (work in progress)",
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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mon Travail</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets suivants mettent en valeur mes compétences et mon
          expérience à travers des exemples concrets de mon travail. Chaque
          projet est brièvement décrit avec mes liens Github et les liens des
          site. Ils reflètent ma capacité à résoudre des problèmes complexes, à
          travailler avec différentes technologes et à gérer efficacement des
          projets.
        </motion.p>
      </div>
      <div>
        <div className="pt-20 pb-10 sm:text-[28px] text-[24px]  uppercase tracking-wider">
          Le projet du moment.
        </div>

        <div className="w-full">
          <div className="bg-black-100 p-5 rounded-2xl  w-full">
            <div className="relative w-full h-full">
              <video width="100%" height="auto" controls autoplay loop muted>
                <source src="/video/sitevideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() =>
                    window.open("https://coaching-fa.com/", "_blank")
                  }
                  className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
                >
                  <img
                    src={webclic}
                    alt="source code"
                    className="w-1/1.5 h-1/1.5 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">F.A Coaching</h3>
              <p className="mt-2 text-secondary text-[14px]">
                Site visant à optimiser le travail d'un éducateur sportif en
                proposant la création d'un générateur de programme, d'un
                gestionnaire de clients, ainsi que d'autres fonctionnalités à
                venir telles qu'un planning et le paiement en ligne.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20  sm:text-[28px] text-[24px]  uppercase tracking-wider">
        Projets effectués.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
