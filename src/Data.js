import project1 from "./assets/projects/project2.jpg";
import project2 from "./assets/projects/project3.png";
import project3 from "./assets/projects/project1.png";
import projectTxt from "./assets/projects/projectTax.jpg";

// ============================================
// HERO SECTION - First Impression
// ============================================
export const HERO_CONTENT = `Software Developer specializing in scalable, high-performance web applications with proven impact on business metrics. Successfully enhanced customer retention by 10% through data-driven analytics features at Dutta Integrated Services. Expert in React.js, Node.js, and modern web technologies with a track record of delivering production-ready solutions. Combines technical expertise with business acumen to create user-centric applications that drive measurable growth and engagement.`;

// ============================================
// ABOUT SECTION - Technical Expertise
// ============================================
export const ABOUT_TEXT = `Software Developer with competitive programming excellence (AIR 343 in GeeksforGeeks Weekly Contest) and 500+ DSA problems solved. Strong foundation in C++ for algorithmic optimization and system design. Professional experience spans customer analytics systems, social platforms, and enterprise tools. Proven ability to reduce page load times by 30% through performance optimization. Combines technical rigor with practical business impact, delivering solutions that balance efficiency, scalability, and user experience.`;

// ============================================
// PROFESSIONAL EXPERIENCE
// ============================================
export const EXPERIENCES = [
  {
    year: "Aug 2025 - Present",
    role: "Software Developer Intern",
    company: "Dutta Integrated Services",
    description: `Developed customer order tracking and analytics features to monitor month-wise activity patterns and identify inactive customers, improving customer retention by 10%. Contributed to the development and enhancement of Hospital Management System (HMS) software, working on patient workflows, data handling, and responsive dashboards. Additionally, collaborated on Laundry Management System development, implementing modules for order tracking, status management, and reporting. Delivered MERN stack solutions with data-driven insights that directly supported operational efficiency and business decision-making.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Rest APIs", "Server-Socket"],
  },
  {
    year: "Aug 2024",
    role: "Frontend Developer Intern",
    company: "LoveInProperty Pvt. Ltd.",
    description: `Developed responsive web interfaces using React.js and Tailwind CSS with scalable architecture. Optimized images and loading techniques to reduce page load time by 30%, enhancing cross-device performance and user experience. Implemented modern frontend best practices including component reusability, state management, and performance optimization.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Responsive Design", "Git", "Performance"],
  },
  {
    year: "Jan 2024 - Mar 2024",
    role: "Industrial Training - Full Stack Development",
    company: "CodeQuotient Pvt. Ltd.",
    description: `Gained proficiency in HTML, CSS, JavaScript, and React.js by developing responsive, interactive web applications with optimized performance and industry-standard coding practices. Developed quiz application with randomized questions and real-time interaction. Mastered full-stack development workflow and deployment methodologies.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "REST APIs", "React.js"],
  },
];

// ============================================
// TECHNICAL SKILLS - Proficiency Levels
// ============================================
export const SKILLS = [
  { name: "React.js", level: 90 },
  { name: "JavaScript/ES6+", level: 90 },
  { name: "HTML5/CSS3", level: 92 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 83 },
  { name: "MongoDB", level: 80 },
  { name: "C++", level: 95 },
  { name: "Data Structures & Algorithms", level: 88 },
  { name: "Git/GitHub", level: 85 },
  { name: "Python", level: 50 },
  { name: "GCP", level: 65 },
];

// ============================================
// FEATURED PROJECTS - Portfolio Highlights
// ============================================
export const PROJECTS = [
  {
    title: "Echocircle - Social Networking Platform",
    image: project3,
    description: `Full-stack social media application with secure JWT authentication and bcrypt encryption. Developed scalable text and image post management with personal profile sections and user dashboard. Implemented real-time post updates and engaging user interaction features with responsive design ensuring seamless experience across devices. Demonstrates proficiency in building secure, production-ready social applications.`,
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "bcrypt", "Tailwind CSS"],
    link: "https://github.com/Sheikhwaseem28/Echocircle-frontend",
    liveLink: "https://echocircle-frontend.vercel.app/", // Add your actual live demo URL here
    highlights: ["Secure Authentication", "Real-time Updates", "User Dashboard", "Scalable Architecture"],
  },
  {
    title: "LinkZipp - URL Shortener Platform",
    image: project2,
    description: `Complete URL shortener with secure user authentication and session management. Integrated click tracking and analytics to monitor link performance and user engagement. Implemented JWT-based session security to protect user data and ensure safe authentication. Designed easy-to-use interface focused on usability and smooth navigation with responsive design.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Analytics"],
    link: "https://github.com/Sheikhwaseem28/Link_frontend",
    liveLink: "https://link-frontend-vert.vercel.app/", // Add your actual live demo URL here
    highlights: ["URL Analytics", "Secure Authentication", "Click Tracking", "User-Friendly UI"],
  },
  {
    title: "Municipal Finance & Tax Management System",
    image: projectTxt,
    description: `Enterprise-grade tax management platform featuring real-time dashboard analytics, automated tax calculations, and comprehensive payment tracking. Built with Flutter for cross-platform mobile support and Node.js/MongoDB backend for scalable data management. Implemented secure user authentication, role-based access control, and intuitive UX for managing local, state, and national tax obligations.`,
    technologies: ["Flutter", "Node.js", "MongoDB", "REST API", "Authentication"],
    link: "https://github.com/Sheikhwaseem28/Tax-Management",
    liveLink: null,
    highlights: ["Published Research Paper", "Real-time Analytics", "Enterprise Solution"],
  },
];


// ============================================
// ACHIEVEMENTS & CERTIFICATIONS
// ============================================
export const ACHIEVEMENTS = [
  {
    description: `AIR 343 in GeeksforGeeks Weekly Coding Contest - Demonstrated elite problem-solving skills and algorithmic thinking among thousands of participants.`,
    icon: "trophy",
    category: "Competitive Programming",
  },
  {
    description: `Qualified at college level for Smart India Hackathon 2024 - Recognized for innovative project submission and technical problem-solving capabilities.`,
    icon: "award",
    category: "Hackathon",
  },
  {
    description: `Web Development Certification from Udemy - Comprehensive full-stack training covering modern web technologies and industry best practices.`,
    icon: "certificate",
    category: "Certification",
  },
  {
    description: `500+ Data Structures and Algorithms problems solved across LeetCode and GeeksforGeeks - Strong foundation in computational problem-solving.`,
    icon: "trophy",
    category: "Technical Excellence",
  },
  {
    description: `Improved customer retention by 10% through analytics feature at Dutta Integrated Services - Demonstrated business impact through technical solutions.`,
    icon: "chart",
    category: "Business Impact",
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
  problemsSolved: "350+",
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
