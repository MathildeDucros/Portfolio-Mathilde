import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  github,
  carrent,
  jobit,
  tripguide,
  morning,
  movies,
  Locapic,
  Faceup,
  CometCall,
} from "../assets";
import { webclic } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
  web_link,
  spe,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-black p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-full">
          {video ? (
            <video
              src={video}
              alt="project_video"
              className="w-full h-full object-cover rounded-2xl"
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
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
            )}
            {web_link && (
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
            )}
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
    </div>
  );
};

const Works = () => {
  const mobileProjects = projects.filter((project) => project.spe === "mobile");
  const webProjects = projects.filter((project) => project.spe === "web");
  console.log(projects, webProjects);

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
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={`${styles.sectionSubText} `}>Mon Travail</p>
      <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets suivants mettent en valeur mes compétences et mon
          expérience à travers des exemples concrets de mon travail. Chaque
          projet est brièvement décrit avec mes liens Github et les liens des
          sites. Ils reflètent ma capacité à résoudre des problèmes complexes, à
          travailler avec différentes technologies et à gérer efficacement des
          projets.
        </p>
      </div>
      <div>
        <div className="pt-20 pb-10 sm:text-[28px] text-[24px]  uppercase tracking-wider">
          Le projet du moment.
        </div>

        <div className="w-full">
          <div className="bg-black p-5 rounded-2xl  w-full">
            <div className="relative w-full h-full">
              <video width="100%" height="auto" controls autoPlay loop muted>
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
                gestionnaire de clients et de comptabilité, ainsi que d'autres
                fonctionnalités à venir telles qu'un planning et le paiement en
                ligne.
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

      <div className="pt-20 sm:text-[28px] text-[24px] uppercase tracking-wider">
        Projets mobiles.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="pt-20 sm:text-[28px] text-[24px] uppercase tracking-wider">
        Projets web.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {webProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projets");
