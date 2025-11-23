import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full h-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full flex flex-col"
      >
        <div
          className="w-full h-[200px] sm:h-[230px] md:h-[250px] relative cursor-pointer group overflow-hidden rounded-2xl"
          onClick={() => {
            window.open(live_website_link, "_blank");
          }}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex justify-end items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img
                src={`${github}${github.includes("?") ? "&" : "?"}tr=f-auto`}
                alt="GitHub Icon"
                loading="lazy"
                width="50%"
                height="50%"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[24px]">{name}</h3>
          <p className="text-secondary mt-3 sm:mt-4 text-[14px] sm:text-[15px] leading-relaxed flex-grow">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[13px] sm:text-[14px] md:text-[15px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={styles.sectionSubText}>Things I've Built </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex justify-center sm:justify-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 sm:mt-4 text-secondary text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl mx-auto sm:mx-0 sm:leading-[30px] leading-[24px] text-center sm:text-left"
        >
          Here are some of the projects I've built using modern web
          technologies. From frontend animations to backend logic, With live
          demos and source code provided, these works reflect my hands-on
          experience in building scalable and maintainable web applications.
        </motion.p>
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
