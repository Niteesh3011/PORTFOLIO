import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the href to the resume file path (you'll need to add your resume PDF to the public folder)
    link.href = "/resume.pdf"; // Update this path to your actual resume file
    link.download = "Niteesh_Pandit_Resume.pdf"; // Name of the downloaded file
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={styles.sectionSubText}>My Professional Profile</p>
        <h2 className={styles.sectionHeadText}>Resume</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center"
      >
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="text-secondary text-[15px] sm:text-[16px] md:text-[17px] max-w-2xl text-center sm:leading-[28px] leading-[24px] mb-8 sm:mb-10"
        >
          Download my resume to learn more about my professional experience, skills, and achievements. 
          I'm always open to discussing new opportunities and collaborations.
        </motion.p>
        <motion.button
          variants={fadeIn("up", "spring", 0.3, 1)}
          onClick={handleDownload}
          className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#915eff] to-[#bf61ff] text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] rounded-xl shadow-lg shadow-[#915eff]/50 hover:shadow-[#915eff]/70 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#bf61ff] to-[#915eff] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
        <motion.p
          variants={fadeIn("", "", 0.4, 1)}
          className="mt-6 text-[#915eff] text-[13px] sm:text-[14px] text-center"
        >
          PDF Format • Updated Regularly
        </motion.p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");

