import project2 from "./assets/projects/project3.png";
import skilscan from "./assets/projects/Skillscan.png";
import AlgoForge from "./assets/projects/AlgoForge.png";

// ============================================
// HERO SECTION - First Impression
// ============================================
export const HERO_CONTENT = `Impactful and skilled Software Developer dedicated to building high-performance web applications and AI-driven solutions. With professional experience driving a 20% boost in customer retention at Dutta Integrated Services and a 30% reduction in page load times at LoveInProperty, I combine engineering rigor with business impact. Expert in the MERN stack, Next.js, and FastAPI, I specialize in engineering autonomous multi-agent systems, predictive machine learning platforms, and scalable APIs that solve real-world problems.`;

// ============================================
// ABOUT SECTION - Technical Expertise
// ============================================
export const ABOUT_TEXT = `I am an impactful and skilled Software Developer with a track record of building sophisticated full-stack platforms and AI integrations. My technical foundation is anchored in competitive programming (AIR 343 in GeeksforGeeks Weekly Contest and 400+ DSA problems solved in C++). From architecting intelligent systems like AlgoForge (an AI-powered DSA optimization tool) and DeepScout (an autonomous multi-agent research workflow) to developing high-performance RESTful microservices, I design software with scalability and user experience in mind. Having delivered high-impact features during production internships—such as automated SMTP notification systems and analytics dashboards—I excel at translating complex requirements into clean, optimized code.`;

// ============================================
// PROFESSIONAL EXPERIENCE
// ============================================
export const EXPERIENCES = [
  {
    year: "Aug 2025 - Feb 2026",
    role: "Software Developer Intern",
    company: "Dutta Integrated Services",
    description: `• Developed an analytics feature to monitor customer behavior and identify order summary, enabling data-driven retention strategies that improved customer retention by 20%.

• Engineered an SMTP notification service for an insurance claim management module within a hospital HMS, applying transaction management principles to reduce manual reconciliation overhead by 25% and ensure reliable real-time claim communication.`,
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
    title: "DeepScout – Autonomous Multi-Agent Research System",
    description: `• Built an automated AI research pipeline using LangChain and Google gemini-2.5-flash to automate information retrieval, analysis, and comprehensive research report generation.
• Integrated Tavily API and BeautifulSoup to search, identify, and scrape relevant web pages, providing contextual information for accurate report generation.
• Developed an LLM-based evaluation pipeline that reviewed generated reports, assigned quality scores, highlighted strengths, and suggested improvements.`,
    technologies: [
      "React.js",
      "FastAPI",
      "LangChain",
      "Gemini API",
      "Tavily API",
      "BeautifulSoup"
    ],
    liveLink: "https://multiagent-frontend-seven.vercel.app",
    highlights: [
      "Autonomous AI Research Pipeline",
      "LangChain Agentic Workflow",
      "Smart BeautifulSoup Web Scraping",
      "LLM Evaluation & Quality Scoring"
    ],
  },
  {
    title: "PriceTrace AI – Price Tracking and Prediction Platform",
    description: `• Built a full-stack price monitoring platform with a RESTful microservices backend, scraping live product data from Amazon and Flipkart, persisting time-series records in MongoDB, and serving historical trend visualizations with configurable target-price alerts.
• Engineered an ensemble forecasting model integrating Facebook Prophet, Ridge Regression, and Holt-Winters Exponential Smoothing to improve price prediction accuracy.`,
    technologies: [
      "React.js",
      "FastAPI",
      "Scikit-learn",
      "Playwright",
      "MongoDB",
      "Facebook Prophet"
    ],
    liveLink: "https://pricetrace-frontend.vercel.app/login",
    highlights: [
      "Real-Time E-Commerce Scraping",
      "Ensemble Machine Learning Forecasting",
      "Time-Series Trend Visualizations",
      "Configurable Target Price Alerts"
    ],
  },
  {
    title: "AlgoForge AI – AI-Powered DSA Revision & Optimization Platform",
    image: AlgoForge,
    description: `• Architected an intelligent DSA revision platform integrating Gemini AI with the MERN stack to deliver personalized optimization feedback and structured revision schedules, bridging the gap between problem-solving practice and algorithmic efficiency.
• Developed a comprehensive code analysis engine featuring automated error detection/correction, time/space complexity evaluation, version-to-version optimization comparisons, and interactive DFD visualization—directly improving user retention and analytical proficiency.`,
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
    description: `• Engineered an AI-powered resume analysis platform that compares candidate resumes against target job descriptions to generate personalized skill gap analyses and role alignment metrics, enabling data-driven application optimization for job seekers.
• Implemented secure authentication mechanisms including Google OAuth and email-based login with per-user rate limiting, while designing scalable Node.js APIs that balance controlled access with data confidentiality and consistent system performance.`,
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
    description: `• Developed a full-stack URL shortening service that transforms lengthy URLs into concise, shareable links with guaranteed redirection integrity, simplifying link sharing through an intuitive interface.
• Built robust backend services using Node.js and Express to handle CRUD operations for URL management, implementing optimized MongoDB schemas and low-latency redirection logic for seamless user experiences.`,
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
    description: `Qualified at college level for Smart India Hackathon 2024 - Recognized for innovative project submission and technical problem-solving capabilities.`,
    icon: "award",
    category: "Hackathon",
  },
  {
    description: `AIR 343 in GeeksforGeeks Weekly Coding Contest - Demonstrated elite problem-solving skills and algorithmic thinking among thousands of participants.`,
    icon: "trophy",
    category: "Competitive Programming",
  },
  {
    description: `  Earned a Data Structures and Algorithms (DSA) certification from Apna College, gaining strong proficiency in problem-solving.`,
    icon: "certificate",
    category: "Certification",
  },
  {
    description: `Completed industry-led full-stack MERN development curriculum (Hitesh Choudhary) and immediately applied those competencies in a 6-month production internship, delivering shipped features across a live products.`,
    icon: "certificate",
    category: "Certification",
  },
  {
    description: `Solved 400+ DSA problems on LeetCode and GeeksforGeeks with a strong focus on time and space complexity optimization.`,
    icon: "trophy",
    category: "Technical Excellence",
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
  leetcode: "https://leetcode.com/u/sheikhwaseem/",
  availability: "Immediately Available",

  location: "Open to Remote/Hybrid/Onsite opportunities",
};

// ============================================
// PROFESSIONAL SUMMARY - Quick Stats
// ============================================
export const STATS = {
  experience: "Fresher",
  projects: "15+",
  problemsSolved: "400+",
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
