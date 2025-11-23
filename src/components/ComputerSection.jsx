import { ComputersCanvas } from "./canvas";

const ComputerSection = () => {
  return (
    <section className="relative w-full min-h-screen max-h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className="w-full h-full min-h-[700px] sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default ComputerSection;

