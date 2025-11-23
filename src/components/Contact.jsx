// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { slideIn } from "../utils/motion";
// import { SectionWrapper } from "../hoc";
// // import emailjs from "@emailjs/browser";

// // EmailJS Configuration:
// // Service ID: service_9gvq101
// // Template ID: template_49jw5yq
// // Public Key: 3lDtCP31mFt_52s7F
// // 
// // IMPORTANT: Configure your EmailJS template (template_49jw5yq) to:
// // 1. Set "To Email" field to: niteeshpandit@hotmail.com
// // 2. Use template variables: {{from_name}}, {{from_email}}, {{to_email}}, {{message}}
// // 3. Ensure the email service is connected to your email account

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setform] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setloading] = useState(false);
//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setform({ ...form, [name]: value });
//   };
//   // const handlesubmit = (e) => {
//   //   e.preventDefault();
//   //   setloading(true);

//   //   // template_49jw5yq
//   //   // service_9gvq101
//   //   // 3lDtCP31mFt_52s7F

//   //   emailjs
//   //     .send(
//   //       "service_9gvq101",
//   //       "template_49jw5yq",
//   //       {
//   //         from_name: form.name,
//   //         from_email: form.email,
//   //         to_email: "niteeshpandit@hotmail.com",
//   //         message: form.message,
//   //       },
//   //       "3lDtCP31mFt_52s7F"
//   //     )
//   //     .then(
//   //       () => {
//   //         setloading(false);
//   //         alert("Thank you. I will get back to you as soon as possible");
//   //         setform({
//   //           name: "",
//   //           email: "",
//   //           message: "",
//   //         });
//   //       },
//   //       (error) => {
//   //         setloading(false);
//   //         console.log(error);
//   //         alert("Something went wrong.");
//   //       }
//   //     );
//   // };
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     setloading(true);
  
//     emailjs
//       .send(
//         "service_9gvq101",
//         "template_49jw5yq",
//         {
//           from_name: form.name,
//           from_email: form.email,
//           to_email: "niteeshpandit@hotmail.com",
//           message: form.message,
//         },
//         "3lDtCP31mFt_52s7F"
//       )
//       .then(
//         () => {
//           setloading(false);
//           alert("Thank you. I will get back to you as soon as possible");
//           setform({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setloading(false);
//           console.log(error);
//           alert("Something went wrong.");
//         }
//       );
//   };
  
//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         {/* <form
//           ref={formRef}
//           action="https://formspree.io/f/xyzvwrvv"
//           onSubmit={handlesubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handlechange}
//               placeholder="what's your name?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handlechange}
//               placeholder="what's your email?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message</span>
//             <textarea
//               rows={5}
//               type="text"
//               name="message"
//               value={form.message}
//               onChange={handlechange}
//               placeholder="what do you want to say?"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//             />
//           </label>
//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form> */}
//         <form
//   action="https://formspree.io/f/xyzvwrvv"
//   method="POST"
//   className="mt-12 flex flex-col gap-8"
// >
//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">Your Name</span>
//     <input
//       type="text"
//       name="name"
//       value={form.name}
//       onChange={handlechange}
//       placeholder="what's your name?"
//       className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//     />
//   </label>

//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">Your Email</span>
//     <input
//       type="email"
//       name="email"
//       value={form.email}
//       onChange={handlechange}
//       placeholder="what's your email?"
//       className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//     />
//   </label>

//   <label className="flex flex-col">
//     <span className="text-white font-medium mb-4">Your Message</span>
//     <textarea
//       rows={5}
//       name="message"
//       value={form.message}
//       onChange={handlechange}
//       placeholder="what do you want to say?"
//       className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//     />
//   </label>

//   <button
//     type="submit"
//     className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//   >
//     Send
//   </button>
// </form>

//       </motion.div>
//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/movbwagp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! I'll get back to you as soon as possible.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div variants={slideIn("", "", 0.1, 1)} className="w-full mb-8 sm:mb-10 md:mb-12">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 w-full items-center lg:items-start">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 w-full lg:max-w-[550px] bg-black-100 p-5 sm:p-6 md:p-7 rounded-2xl"
        >
          <motion.p
            variants={slideIn("", "", 0.3, 1)}
            className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] mb-4 sm:mb-5 leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </motion.p>

          {/* Formspree Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5 md:gap-6"
          >
            <motion.div
              variants={slideIn("", "", 0.4, 1)}
              className="flex flex-col"
            >
              <label htmlFor="name" className="text-white font-medium mb-2 text-sm">
                Your Name <span className="text-[#915eff]">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-tertiary py-2.5 sm:py-3 px-4 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915eff] transition-all duration-300 font-medium text-sm"
                required
              />
            </motion.div>

            <motion.div
              variants={slideIn("", "", 0.5, 1)}
              className="flex flex-col"
            >
              <label htmlFor="email" className="text-white font-medium mb-2 text-sm">
                Your Email <span className="text-[#915eff]">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-tertiary py-2.5 sm:py-3 px-4 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915eff] transition-all duration-300 font-medium text-sm"
                required
              />
            </motion.div>

            <motion.div
              variants={slideIn("", "", 0.6, 1)}
              className="flex flex-col"
            >
              <label htmlFor="message" className="text-white font-medium mb-2 text-sm">
                Your Message <span className="text-[#915eff]">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                className="bg-tertiary py-2.5 sm:py-3 px-4 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915eff] transition-all duration-300 font-medium text-sm resize-none"
                required
              ></textarea>
            </motion.div>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                <p className="text-sm sm:text-base">{status.message}</p>
              </motion.div>
            )}

            <motion.button
              variants={slideIn("", "", 0.7, 1)}
              type="submit"
              disabled={loading}
              className="group relative bg-gradient-to-r from-[#915eff] to-[#bf61ff] py-2.5 sm:py-3 px-6 sm:px-8 outline-none w-full sm:w-fit text-white font-bold shadow-lg shadow-[#915eff]/50 rounded-xl text-sm hover:shadow-[#915eff]/70 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 w-full lg:w-auto lg:flex-1 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] flex items-center justify-center"
        >
          <div className="w-full h-full relative">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
