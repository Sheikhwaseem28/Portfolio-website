import project1 from "./assets/projects/project2.jpg";
import project2 from "./assets/projects/project3.jpg";
import project3 from "./assets/projects/project1.jpg";
import projectTxt from "./assets/projects/projectTax.jpg";

// ============================================
// HERO SECTION - First Impression
// ============================================
export const HERO_CONTENT = `Full-stack developer specializing in the MERN stack with a passion for building scalable, user-centric web applications. Proven track record in developing end-to-end solutions including social platforms, streaming services, and enterprise management systems. Expert in React.js for creating responsive, interactive UIs, with expanding expertise in Node.js backend development, RESTful API design, and database architecture. Committed to writing clean, maintainable code and delivering seamless user experiences that drive engagement and business growth.`;

// ============================================
// ABOUT SECTION - Technical Expertise
// ============================================
export const ABOUT_TEXT = `Software engineer with strong competitive programming background and expertise in algorithmic problem-solving using C++. Proficient in Data Structures & Algorithms with 500+ problems solved across competitive platforms. Specialized in optimizing code performance, reducing time complexity, and implementing scalable solutions. Experienced in analyzing complex problems, designing efficient algorithms, and delivering production-ready code. Strong foundation in computational thinking, system design, and software engineering best practices.`;

// ============================================
// PROFESSIONAL EXPERIENCE
// ============================================
export const EXPERIENCES = [
  {
    year: "Aug 2024",
    role: "Frontend Developer Intern",
    company: "LoveInProperty Pvt. Ltd.",
    description: `Collaborated with cross-functional teams to deliver high-impact client projects using React.js and Tailwind CSS. Architected responsive, pixel-perfect user interfaces ensuring seamless experiences across all devices and browsers. Implemented modern frontend best practices including component reusability, state management, and performance optimization. Successfully delivered multiple production features ahead of schedule while maintaining high code quality standards.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design", "Git"],
  },
  {
    year: "Jan 2024 - Mar 2024",
    role: "Industrial Training - Full Stack Development",
    company: "CodeQuotient Pvt. Ltd.",
    description: `Completed intensive full-stack development training focused on modern web technologies. Mastered HTML5, CSS3, JavaScript ES6+, and Node.js to build dynamic, database-driven applications. Developed multiple projects demonstrating proficiency in both frontend and backend development. Gained hands-on experience with version control, deployment workflows, and agile development methodologies.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "REST APIs"],
  },
];

// ============================================
// TECHNICAL SKILLS - Proficiency Levels
// ============================================
export const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "JavaScript/ES6+", level: 88 },
  { name: "HTML5/CSS3", level: 92 },
  { name: "Tailwind CSS", level: 87 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 83 },
  { name: "MongoDB", level: 80 },
  { name: "C++", level: 85 },
  { name: "Data Structures & Algorithms", level: 88 },
  { name: "Git/GitHub", level: 85 },
];

// ============================================
// FEATURED PROJECTS - Portfolio Highlights
// ============================================
export const PROJECTS = [
  {
    title: "Municipal Finance & Tax Management System",
    image: projectTxt,
    description: `Enterprise-grade tax management platform featuring real-time dashboard analytics, automated tax calculations, and comprehensive payment tracking. Built with Flutter for cross-platform mobile support and Node.js/MongoDB backend for scalable data management. Implemented secure user authentication, role-based access control, and intuitive UX for managing local, state, and national tax obligations. Successfully streamlined tax processes for efficient financial management.`,
    technologies: ["Flutter", "Node.js", "MongoDB", "REST API", "Authentication"],
    link: "https://github.com/Sheikhwaseem28/Tax-Management",
    liveLink: null, // Set to your deployed URL when ready
    highlights: ["Published Research Paper", "Real-time Analytics", "Enterprise Solution"],
  },
  {
    title: "SocialBook - Social Networking Platform",
    image: project3,
    description: `Full-stack social media application with real-time post updates, secure authentication system, and engaging user interaction features. Engineered with React.js for dynamic frontend, Express.js for robust API layer, and MongoDB for flexible data storage. Implemented JWT-based authentication, real-time notifications, and responsive design ensuring seamless experience across devices. Demonstrates proficiency in building scalable, production-ready applications.`,
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "Tailwind CSS"],
    link: "https://github.com/Sheikhwaseem28/SocialBook",
    liveLink: null, // Set to your deployed URL when ready
    highlights: ["Real-time Updates", "Secure Authentication", "Responsive Design"],
  },
  {
    title: "MoonFlix - Movie Streaming Platform",
    image: project2,
    description: `Feature-rich movie discovery platform integrating external APIs for vast film database access. Built personalized user experiences with favorites management, review systems, and advanced search functionality. Developed secure authentication flow, optimized API calls for performance, and created intuitive UI for seamless content exploration. Enhanced skills in third-party API integration, state management, and user-centric design.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "External APIs"],
    link: "https://github.com/Sheikhwaseem28/MoonFlix",
    liveLink: null, // Set to your deployed URL when ready
    highlights: ["API Integration", "User Personalization", "Performance Optimization"],
  },
];

// ============================================
// ACHIEVEMENTS & CERTIFICATIONS
// ============================================
export const ACHIEVEMENTS = [
  {
    description: `Published research paper on "Municipal Finance and Tax Management System" demonstrating expertise in system design and real-world problem-solving.`,
    icon: "research",
    category: "Publication",
  },
  {
    description: `Web Development Certification from Udemy (Hitesh Choudhary) - Comprehensive MERN stack training with hands-on project implementation.`,
    icon: "certificate",
    category: "Certification",
  },
  {
    description: `AMCAT Certified Software Developer Trainee - Validated technical skills in software development, problem-solving, and programming fundamentals.`,
    icon: "award",
    category: "Assessment",
  },
  {
    description: `AMCAT Certified in Hardware and Networking - Demonstrated understanding of computer systems, networking protocols, and IT infrastructure.`,
    icon: "certificate",
    category: "Technical Skills",
  },
  {
    description: `500+ Data Structures and Algorithms problems solved across competitive programming platforms including LeetCode and GeeksforGeeks.`,
    icon: "trophy",
    category: "Competitive Programming",
  },
];

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT = {
  address: "Raipur, Chhattisgarh, India",
  phoneNo: "+91 9171417168",
  email: "sheikhwaseem700800@gmail.com",
  linkedin: "https://www.linkedin.com/in/sheikh-waseem/",
  github: "https://github.com/Sheikhwaseem28",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/sheikhwc1zo/",
  availability: "Immediately Available",
  location: "Open to Remote/Hybrid/Onsite opportunities",
};

// ============================================
// PROFESSIONAL SUMMARY - Quick Stats
// ============================================
export const STATS = {
  experience: "1+ Years",
  projects: "15+",
  problemsSolved: "500+",
  technologies: "10+",
  certifications: 4,
};

// ============================================
// SOFT SKILLS & INTERESTS
// ============================================
export const SOFT_SKILLS = [
  "Problem Solving",
  "Team Collaboration",
  "Agile Methodology",
  "Code Review",
  "Technical Documentation",
  "Quick Learner",
  "Attention to Detail",
  "Communication",
];

export const INTERESTS = [
  "Open Source Contribution",
  "Competitive Programming",
  "Tech Blogging",
  "System Design",
  "UI/UX Design",
  "Performance Optimization",
];
