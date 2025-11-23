import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Resume from "./components/Resume";
import Works from "./components/Works";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816] w-full overflow-x-hidden">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center w-full">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Resume />
      <Works />
      <SocialMedia />
      <div className="relative z-0 w-full">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
