import {
  git,
  docker,
} from "../assets";

import githubIcon from "../assets/Github-desktop-logo-symbol.svg.png";
import instagramIcon from "../assets/Instagram_logo_2022.svg.webp";

// Experience section icons
import physicsWallahIcon from "../assets/Physics wallah.webp";
import smartbridgeIcon from "../assets/smartbridge.jpg";
import cognifyzIcon from "../assets/cognifyz.webp";
import courseraIcon from "../assets/Coursera-Logo_600x600.svg.png";

// Project images
import signLanguageDetectionImage from "../assets/Sign Language Detection.webp";
import nerImage from "../assets/Named Entity Recognition (NER).avif";
import chatbotImage from "../assets/Ai ChatBot.webp";
import geneAIImage from "../assets/GeneAI – Intelligent Voice Assistant.avif";
import imageCaptionGeneratorImage from "../assets/AI-Powered Image and Caption Generator.webp";
import textSummarizerImage from "../assets/Ai driven text summarization.jpg";

import {
  python,
  tensorflow,
  pytorch,
  scikitlearn,
  pandas,
  numpy,
  jupyter,
  sql,
  plotly,
  powerbi,
  aws,
  dataScientist,
  mlEngineer,
  deepLearningEngineer,
  generativeAIEngineer,
} from "../assets/dataScienceIcons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },
  {
    id: "skills",
    title: "skills",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: dataScientist,
  },
  {
    title: "ML Engineer",
    icon: mlEngineer,
  },
  {
    title: "Deep Learning Engineer",
    icon: deepLearningEngineer,
  },
  {
    title: "Generative AI Engineer",
    icon: generativeAIEngineer,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Plotly",
    icon: plotly,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science & Generative AI Trainee",
    company_name: "Physics Wallah skills",
    icon: physicsWallahIcon,
    iconBg: "#ffff",
    date: "July 2025 - Mar 2026",
    points: [
      "Completed comprehensive training in machine learning, deep learning, and data science methodologies.",
      "Built multiple ML projects including classification, regression, and NLP models using scikit-learn and TensorFlow.",
      "Worked with tools like Python, Jupyter Notebooks, Pandas, NumPy, and various ML libraries.",
      "Gained hands-on experience in model deployment, hyperparameter tuning, and model evaluation techniques.",
    ],
  },
  {
    title: "Machine Learning Engineer ",
    company_name: "SmartInternz",
    icon: smartbridgeIcon,
    iconBg: "#0188E3",
    date: "Sep 2025 - Oct 2025",
    points: [
      "Successfully completed Virtual Internship Program as Machine Learning Engineer with SmartInternz.",
      "Demonstrated high level of efficiency in applying ML concepts practically through hands-on projects.",
      "Worked on real-world machine learning solutions and gained expertise in ML model development.",
      "Certificate ID: VIP-ML-2025-25500. Program supported by Google for Developers and AICTE.",
    ],
  },
  {
    title: "Google Cybersecurity Analyst",
    company_name: "Coursera",
    icon: courseraIcon,
    iconBg: "#4285F4",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Completed Google Cybersecurity Analyst Professional Certificate program on Coursera.",
      "Gained comprehensive knowledge in cybersecurity fundamentals, threat detection, and security analysis.",
      "Learned to identify and mitigate security risks, analyze security incidents, and implement security measures.",
      "Acquired skills in network security, incident response, and security operations.",
    ],
  },
  {
    title: "Python Development Intern",
    company_name: "Cognifyz Technologies",
    icon: cognifyzIcon,
    iconBg: "#FF6B6B",
    date: "Apr 2024 - May 2024",
    points: [
      "Successfully completed internship as Python Development Intern at Cognifyz Technologies.",
      "Gained valuable hands-on experience in Python development and software engineering practices.",
      "Enhanced communication and problem-solving skills while working with a team of professionals.",
      "Developed practical Python applications and contributed to real-world software development projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The predictive models developed helped us reduce operational costs by 30% and improve decision-making accuracy significantly.",
    name: "Sara Lee",
    designation: "Data Analytics Director",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a data scientist who truly understands business needs and translates them into actionable ML solutions like this.",
    name: "Chris Brown",
    designation: "Chief Data Officer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After implementing the machine learning models, our prediction accuracy improved by 50% and we gained valuable insights from our data.",
    name: "Lisa Wang",
    designation: "Head of AI",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sign Language Detection",
    description:
      "This project builds an AI-powered system to detect and interpret sign language from images or videos. It enhances communication accessibility for the hearing impaired.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: signLanguageDetectionImage,
    source_code_link: "https://github.com/Niteesh3011/Sign-Language-Detection",
    live_website_link: "https://github.com/Niteesh3011/Sign-Language-Detection",
  },
  {
    name: "Named Entity Recognition (NER)",
    description:
      "This project develops a Named Entity Recognition (NER) system to identify and classify entities like names, dates, and locations in text. It enhances information extraction and text analysis for various applications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: nerImage,
    source_code_link: "https://github.com/Niteesh3011/Named-Entity-Recognition-NER-",
    live_website_link: "https://github.com/Niteesh3011/Named-Entity-Recognition-NER-",
  },
  {
    name: "AI-Powered Custom Chatbot",
    description:
      "This project develops a tailored chatbot using GPT, designed to provide domain-specific responses and personalized interactions. It enhances user experience across various applications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gpt",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: chatbotImage,
    source_code_link: "https://github.com/Niteesh3011/AI-Powered-Custom-Chatbot-",
    live_website_link: "https://github.com/Niteesh3011/AI-Powered-Custom-Chatbot-",
  },
  {
    name: "GeneAI – Intelligent Voice Assistant",
    description:
      "This project develops GeneAI, a smart voice assistant similar to Alexa, enabling seamless voice interactions and task automation. It enhances user convenience through AI-driven responses and commands.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "voice-assistant",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: geneAIImage,
    source_code_link: "https://github.com/Niteesh3011/-GeneAI-Intelligent-Voice-Assistant-",
    live_website_link: "https://github.com/Niteesh3011/-GeneAI-Intelligent-Voice-Assistant-",
  },
  {
    name: "AI-Powered Image and Caption Generator",
    description:
      "This project develops a system that generates images and captions based on user prompts using advanced AI models. It enhances creativity and automation in content generation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "image-generation",
        color: "pink-text-gradient",
      },
    ],
    image: imageCaptionGeneratorImage,
    source_code_link: "https://github.com/Niteesh3011/AI-Powered-Image-and-Caption-Generator-",
    live_website_link: "https://github.com/Niteesh3011/AI-Powered-Image-and-Caption-Generator-",
  },
  {
    name: "AI Driven Text Summarizer",
    description:
      "This project develops an AI-driven text summarizer that automatically condenses long texts while preserving key information. It enhances readability and efficiency for users by generating concise summaries.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: textSummarizerImage,
    source_code_link: "https://github.com/Niteesh3011/Ai-driven-text-summarization",
    live_website_link: "https://github.com/Niteesh3011/Ai-driven-text-summarization",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/niteesh-pandit-42110b253",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    link: "https://github.com/Niteesh3011",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    link: "https://www.instagram.com/its_niteesh_prajapati/",
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };
