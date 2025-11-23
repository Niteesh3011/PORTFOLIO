import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px] h-full"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-6 sm:py-8 sm:px-8 min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex flex-col justify-center items-center gap-4 sm:gap-5 h-full">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              console.warn(`Failed to load icon for ${title}`);
            }}
          />

          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 sm:mt-6 text-secondary text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl mx-auto sm:mx-0 sm:leading-[30px] leading-[24px] text-center sm:text-left"
      >
Hello! I'm Niteesh Pandit, a dedicated Data Scientist focused on transforming complex data into clear, actionable business strategies.

My core expertise is the full data lifecycle: from cleaning and analysis to developing predictive models and communicating impact. I combine strong statistical rigor with practical machine learning techniques to solve high-value problems.
      </motion.p>
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
