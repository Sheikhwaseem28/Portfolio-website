import project1 from "./assets/projects/project2.jpg";
import project2 from "./assets/projects/project3.jpg";
import project3 from "./assets/projects/project1.jpg";
import projectTxt from "./assets/projects/projectTax.jpg";


 export const HERO_CONTENT = `I’m a frontend-focused developer specializing in building responsive and interactive user interfaces using ReactJS. I’ve worked extensively with the MERN stack (MongoDB, Express.js, React, Node.js) to create full-stack web applications that are both functional and user-friendly. My projects include a social media platform with secure login and real-time posts, a movie streaming site with personalized watchlists, and a dynamic news website that fetches real-time content through APIs. While my strength lies in crafting clean and intuitive frontends, I’m currently expanding my backend skills—building scalable APIs, managing databases, and strengthening my understanding of server-side development to grow as a complete full-stack developer.`;

export const ABOUT_TEXT = `I specialize in solving complex problems using C++, leveraging my deep understanding of data structures and algorithms to develop efficient, high-performance solutions.I continuously strengthen my coding skills by practicing on competitive programming platforms, where I analyze problems, optimize logic, and implement scalable solutions under time constraints. I thrive on breaking down intricate problems, designing clean algorithms, and delivering precise, optimized code that reflects strong computational thinking and attention to detail.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Mar 2024",
    role: "Industrial Training ",
    company: "CodeQuotient Pvt. Lmt.",
    description: ` During my industrial training at CodeQuotient, I mastered core web development technologies, including HTML,
 CSS, JavaScript, and Node.js. I engineered dynamic user interfaces and robust web applications, ensuring
 seamless performance while aligning with precise project requirements.`,
    technologies: ["HTML","CSS","Javascript", "NodeJS"],
  },
  {
    year: "Aug 2024",
    role: "Frontend Developer Intern ",
    company: "LoveInProperty Pvt. Lmt.",
    description: ` I partnered with technical leads and industry experts to architect and execute high-impact client projects with
 precision and efficiency using Reactjs and Tailwind CSS.Elevating user experience with seamless responsiveness
 across all devices and browsers.`,
    technologies: ["ReactJS","TailwindCSS"],
  },
];

export const PROJECTS = [
  {
    title: "Municipal Finance and Tax Management System",
    image: projectTxt,
    description:
      ` Theprojectprovides auser-friendly dashboard, an advanced
 tax calculator, and a customizable profile page, empowering users to see and manage local, state, and national taxes. It
 enables seamless tracking of payment history, and personalized profile settings, ensuring a streamlined and hassle-free
 tax management experience.`,
    technologies: ["Flutter", "Nodejs","MongoDB"],
    link:"https://github.com/Sheikhwaseem28/Tax-Management",
  },
  {
    title: "SocialBook",
    image: project3,
    description:
      `A social networking platform built with ReactJS, Express.js, Tailwind CSS, and MongoDB, enabling
 users to sign up, log in, share posts, and connect securely. The platform ensures a seamless user experience with
 real-time updates and robust authentication.`,
    technologies: ["MongoDB", "Reactjs", "Expressjs", "Nodejs"],
    link:"https://github.com/Sheikhwaseem28/SocialBook",
  },
  {
    title: "MoonFlix",
    image: project2,
    description:
      `Developed an API-based movie website that allows users to sign up, log in, and explore a vast database of films. The platform includes secure authentication and personalized features, enabling users to save favorites and leave reviews. This project enhanced my skills in API integration and user experience design.`,
    technologies: ["MongoDB", "Reactjs", "Expressjs", "Nodejs"],
    link:"https://github.com/Sheikhwaseem28/MoonFlix",
  },
];

export const ACHIEVEMENTS = [
  
  {
    description:
      `Web Development Certification by Hitesh Choudhary from Udemy.`,
  },
  {
  description:
  `Published a research project on Municipal Finance and Tax Management System.`,
},
{
description:
`Certified in Software Developer Trainee by AMCAT.`,
},
{
description:
`Certified in Hardware and Networking by AMCAT.`,
},
  
];



export const CONTACT = {
  address: "Moti Nagar Raipur , Chhattishgarh ",
  phoneNo: "+91 9171417168 ",
  email: "sheikhwaseem700800@gmail.com",
};
