import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24`}
      >
        <div className="hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="flex-1 w-full text-center sm:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Niteesh</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 w-full max-w-4xl mx-auto sm:mx-0"
          >
            <p className="text-[#dfd9ff] font-light lg:text-[22px] sm:text-[20px] text-[15px] lg:leading-[36px] sm:leading-[32px] leading-[26px] tracking-wide px-2 sm:px-0">
              Thank you for visiting my data science portfolio! I appreciate you taking the time to review my work and my journey of transforming data into valuable insights. I am passionate about solving complex problems and I hope you found something interesting here.
            </p>
            <p className="text-[#915eff] font-semibold lg:text-[24px] sm:text-[22px] text-[18px] mt-4 sm:mt-6 tracking-wide px-2 sm:px-0">
              Please feel free to connect!
          </p>
          </motion.div>
        </div>
      </div>
      
      {/* 3D Computer Section */}
      <div className="w-full max-w-7xl mx-auto h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-6 sm:mt-8 md:mt-10 relative px-4 sm:px-6 md:px-8 lg:px-16">
      <ComputersCanvas />
      </div>

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[56px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
