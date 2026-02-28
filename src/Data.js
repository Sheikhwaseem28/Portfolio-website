import project2 from "./assets/projects/project3.png";
import skilscan from "./assets/projects/Skillscan.png";

// ============================================
// HERO SECTION - First Impression
// ============================================
export const HERO_CONTENT = `Software Developer specializing in scalable, high-performance web applications with proven impact on business metrics. Successfully enhanced customer retention by 10% through data-driven analytics features at Dutta Integrated Services. Expert in React.js, Node.js, and modern web technologies with a track record of delivering production-ready solutions. Combines technical expertise with business acumen to create user-centric applications that drive measurable growth and engagement.`;

// ============================================
// ABOUT SECTION - Technical Expertise
// ============================================
export const ABOUT_TEXT = `Software Developer with competitive programming excellence (AIR 343 in GeeksforGeeks Weekly Contest) and 350+ DSA problems solved. Strong foundation in C++ for algorithmic optimization and system design. Professional experience spans customer analytics systems, social platforms, and enterprise tools. Proven ability to reduce page load times by 30% through performance optimization. Combines technical rigor with practical business impact, delivering solutions that balance efficiency, scalability, and user experience.`;

// ============================================
// PROFESSIONAL EXPERIENCE
// ============================================
export const EXPERIENCES = [
  {
    year: "Aug 2025 - Present",
    role: "Software Developer Intern",
    company: "Dutta Integrated Services",
    description: `• Solved a complex customer engagement problem by building a month-wise order tracking and analytics system using the MERN stack, identifying inactive customers through behavioral patterns and enabling data-driven retention strategies that improved customer retention by 10%.

• Solved the challenge of fragmented IPD patient record management by developing a centralized IPD patienttimeline system for an HMS portal, enabling seamless chronological tracking of medications,diagnostic tests, and visit schedules, and significantly improving clinical visibility and operational efficiency forhealthcare teams.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Rest APIs", "Server-Socket"],
  },
  {
    year: "Aug 2024",
    role: "Frontend Developer Intern",
    company: "LoveInProperty Pvt. Ltd.",
    description: `• Built scalable and responsive web interfaces using React.js and Tailwind CSS, optimizing performance, consistency, and usability across multiple devices and browsers through a modular and maintainable frontend architecture.
• Optimized image assets and implemented efficient loading techniques, reducing page load time by 30% and significantly improving performance and user experience across devices.`,
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
    title: "AlgoForge AI – AI-Powered DSA Revision & Optimization Platform",
    image: skilscan,
    description: `• Solved the problem of inconsistent DSA revision and limited optimization feedback by architecting and developing AlgoForge AI, an AI-powered DSA Revision & Optimization platform using MERN Stack and Gemini AI.
• Implemented AI-driven code review, automated error detection and correction, time/space complexity analysis, structured revision tracking, solution optimization with version comparison, and DFD visualization to drive measurable improvement in retention, analytical clarity, and interview readiness.`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Gemini",
      "Tailwind CSS"
    ],
    liveLink: "https://algorevision-ai.vercel.app/",
    highlights: [
      "AI-Powered Code Review & Error Resolution",
      "Automated Time & Space Complexity Analysis",
      "Structured DSA Revision & Reminder Management",
      "Intelligent Code Optimization with Version Comparison",
      "DFD-Based Algorithm Visualization",
      "Multi-Language Code Storage & Execution",
      "Full-Stack MERN Architecture with Gemini AI Integration"
    ],
  },
  {
    title: "SkillScan - AI-Powered Resume Analyzer",
    image: skilscan,
    description: `• Created an AI-powered resume analysis platform to address the common challenge faced by students and jobseekers where resumes fail to match real job requirements, delivering clear insights on skill gaps and role alignment.
• Designed secure Google OAuth and email-based authentication with per-user request limits, and built scalable Node.js APIs to ensure controlled usage, data protection, and reliable system performance.`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Gemini",
      "Tailwind CSS"
    ],
    link: "https://github.com/Sheikhwaseem28/resume-analyzer-frontend",
    liveLink: "https://resume-analyzer-frontend-sand.vercel.app/",
    highlights: [
      "AI Resume Analysis",
      "Google OAuth Authentication",
      "Rate-Limited API Requests",
      "ATS Optimization Insights",
      "Production-Ready Architecture"
    ],
  },
  {
    title: "LinkZipp - URL Shortener Platform",
    image: project2,
    description: `Complete URL shortener with secure user authentication and session management. Integrated click tracking and analytics to monitor link performance and user engagement. Implemented JWT-based session security to protect user data and ensure safe authentication. Designed easy-to-use interface focused on usability and smooth navigation with responsive design.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Analytics"],
    link: "https://github.com/Sheikhwaseem28/Link_frontend",
    liveLink: "https://link-frontend-omega.vercel.app/",
    highlights: ["URL Analytics", "Secure Authentication", "Click Tracking", "User-Friendly UI"],
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
    description: `350+ Data Structures and Algorithms problems solved across LeetCode and GeeksforGeeks - Strong foundation in computational problem-solving.`,
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
  experience: "Fresher",
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
