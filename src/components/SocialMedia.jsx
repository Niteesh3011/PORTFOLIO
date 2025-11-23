import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { socialLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SocialMediaCard = ({ index, name, icon, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full green-pink-gradient shadow-card rounded-[12px] p-[1px] hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-tertiary rounded-[12px] py-3 px-4 min-h-[70px] flex flex-col items-center justify-center gap-1.5 cursor-pointer">
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
          width={32}
          height={32}
          style={{ maxWidth: '32px', maxHeight: '32px' }}
          loading="lazy"
        />
        <h3 className="text-white text-[12px] font-bold text-center">
          {name}
        </h3>
      </div>
    </motion.a>
  );
};

const SocialMedia = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={styles.sectionSubText}>Connect With Me</p>
        <h2 className={styles.sectionHeadText}>Social Media</h2>
      </motion.div>
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-4 sm:gap-5 justify-center">
        {socialLinks.map((social, index) => (
          <div key={social.name} className="w-[120px] sm:w-[140px] md:w-[150px]">
            <SocialMediaCard index={index} {...social} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SocialMedia, "social");

