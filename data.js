// All site content lives here. Edit this file to update the portfolio —
// no other file needs to change when you add a project, skill or role.

window.PORTFOLIO = {
  name: "Aarav Bhatt",
  fullName: "Aarav Rakshitkumar Bhatt",
  location: "Vadodara, Gujarat, India",
  email: "aaravbhatt28@yahoo.com",
  status: "Open to SDE internships & full-time roles",
  resume: "resume.pdf",

  roles: ["AI Full Stack Developer"],

  intro:
    "I build AI-powered full-stack applications — MERN on the web, with machine learning, LLMs and agentic AI under the hood.",

  socials: [
    { label: "GitHub", url: "https://github.com/aaravv28", icon: "fa-brands fa-github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aarav-rakshitkumar-bhatt-705aa7329/", icon: "fa-brands fa-linkedin-in" },
    { label: "Email", url: "mailto:aaravbhatt28@yahoo.com", icon: "fa-solid fa-envelope" },
  ],

  about: [
    "I am a third-year B.Tech Computer Engineering student at Dharmsinh Desai University, passionate about software development, Artificial Intelligence, and emerging technologies.",
    "My interests include Full Stack Web Development, AI & Machine Learning, Data Structures, and Algorithms. I enjoy building practical solutions, learning new technologies, and turning ideas into meaningful projects.",
    "AI is at the core of how I build. I develop end-to-end machine learning pipelines in Python — data cleaning, feature engineering, training and comparing models with scikit-learn, and serving predictions through interactive Streamlit apps. I integrate large language models into real products, like the Google Gemini-powered conversational shopping copilot I built for CampusCart.",
    "I'm especially focused on Agentic AI — autonomous, tool-using AI systems that can reason and take action — and contributed to the Agentic AI & Artificial Intelligence track at AWS Students Community Day Nadiad 2026. My goal is to combine strong full-stack engineering with AI to ship intelligent applications that solve real problems.",
    "I am continuously enhancing my skills through academic projects and self-learning, with the goal of growing into a skilled software engineer.",
    "I am always open to connecting with fellow developers, industry professionals, and like-minded individuals to learn, collaborate, and explore new opportunities.",
  ],

  stats: [
    { value: 9.04, decimals: 2, suffix: "", label: "Current CPI" },
    { value: 10, decimals: 0, suffix: "+", label: "Projects built" },
    { value: 20, decimals: 0, suffix: "+", label: "Technologies" },
    { value: 2028, decimals: 0, suffix: "", label: "Graduating", plain: true },
  ],

  education: [
    {
      title: "B.Tech, Computer Engineering",
      place: "Dharmsinh Desai University, Nadiad",
      period: "2024 – 2028",
      score: "CPI 9.04 / 10",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      title: "Class XII (Science)",
      place: "Gujarat Secondary & Higher Secondary Education Board",
      period: "2024",
      score: "94.68 Percentile",
      icon: "fa-solid fa-school",
    },
  ],

  experience: [
    {
      role: "Software Developer Intern",
      org: "AryaStay",
      period: "Sep 2026 – Present",
      type: "Internship",
      icon: "fa-solid fa-laptop-code",
      current: true,
      points: [
        "Contributing to real-world product development as part of the engineering team — building, testing and shipping features in a production codebase.",
        "Gaining hands-on experience with professional workflows: version control, collaboration and iterative delivery.",
        "Project specifics are confidential.",
      ],
    },
    {
      role: "Volunteer · Agentic AI & AI Track",
      org: "AWS Student Builder Group, DDU · AWS Students Community Day Nadiad 2026",
      period: "2026",
      type: "Community",
      icon: "fa-brands fa-aws",
      points: [
        "Contributed to the Agentic AI & Artificial Intelligence track at AWS Students Community Day Nadiad 2026, which brought together 500+ builders.",
        "Worked behind the scenes managing sessions by industry speakers and keeping the track running smoothly.",
        "Helped bring the college tech community together to learn, connect and explore cloud and AI.",
      ],
    },
    {
      role: "Core Organizing Team",
      org: "Felicific 2026 · Dharmsinh Desai University",
      period: "2026",
      type: "Leadership",
      icon: "fa-solid fa-people-group",
      points: [
        "Mentored and coordinated student teams during the university's annual technical and cultural festival.",
        "Supported event planning, participant coordination and the successful execution of the Family Feud event.",
      ],
    },
    {
      role: "Cadet · 'A' Certificate",
      org: "National Cadet Corps (NCC)",
      period: "",
      type: "Service",
      icon: "fa-solid fa-medal",
      points: [
        "Earned the NCC 'A' Certificate.",
        "Built discipline, teamwork and leadership through NCC training.",
      ],
    },
  ],

  projects: [
    {
      title: "Lakshya",
      category: "fullstack",
      status: "Completed",
      featured: true,
      icon: "fa-solid fa-bullseye",
      summary:
        "A campus placement platform connecting students, recruiters and the placement officer in one workflow.",
      points: [
        "Company registration flow with Draft → Pending → Approved/Rejected review by the placement officer",
        "Jobs with packages, deadlines and department-based eligibility rules",
        "JWT auth, file uploads and an API test suite with an in-memory MongoDB",
      ],
      tech: ["React 19", "Vite", "Node.js", "Express 5", "MongoDB", "Mongoose", "JWT"],
      github: "https://github.com/aaravv28/lakshya",
    },
    {
      title: "CampusConnect",
      category: "fullstack",
      status: "Ongoing",
      featured: true,
      icon: "fa-solid fa-users",
      summary:
        "A professional networking platform for students — profiles, connections, posts, events and placement opportunities.",
      points: [
        "REST APIs with JWT authentication and role-based authorization",
        "Responsive React.js interface for profiles, feeds and events",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
      title: "FarmGrid",
      category: "fullstack",
      status: "Completed",
      icon: "fa-solid fa-seedling",
      summary:
        "A farmer-to-customer produce marketplace with surplus clearance and shared transport for farmers.",
      points: [
        "Quick Sell lots whose price falls linearly over 48 hours, with the server as the single source of price",
        "Pooled transport trips that split vehicle cost between farmers by cargo weight",
        "Role-based access with ASP.NET Identity, account lockout and xUnit tests",
      ],
      tech: ["C#", ".NET 10", "ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap", "xUnit"],
      github: "https://github.com/aaravv28/FarmGrid",
    },
    {
      title: "CampusCart",
      category: "mobile",
      status: "Completed",
      icon: "fa-solid fa-cart-shopping",
      summary:
        "A cross-platform peer-to-peer marketplace where verified students buy and sell within their own campus.",
      points: [
        "CartAI shopping copilot powered by Google Gemini, with an offline fallback engine",
        "Deal evaluator, bargaining coach and safe campus meetup hubs",
        "Listings isolated to verified university email domains",
      ],
      tech: ["Flutter", "Dart", "Supabase", "Gemini API"],
      github: "https://github.com/aaravv28/CampusCart",
    },
    {
      title: "Smart Fraud Detection API",
      category: "backend",
      status: "Completed",
      icon: "fa-solid fa-shield-halved",
      summary:
        "A secure backend that monitors financial transactions and flags suspicious activity.",
      points: [
        "REST APIs for transaction processing, fraud alerts, transaction history and user management",
        "Rule-based fraud detection engine with role-based JWT authentication",
        "Request validation, centralized exception handling and Swagger/OpenAPI docs",
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger"],
    },
    {
      title: "Event Attendance Predictor",
      category: "ml",
      status: "Completed",
      icon: "fa-solid fa-chart-line",
      summary:
        "A machine learning model that predicts whether a registered student will actually attend a club event.",
      points: [
        "Cleaned messy real-world data and engineered a past-attendance-rate feature",
        "Compared Logistic Regression, Random Forest and Gradient Boosting — best F1 of 76.1%",
        "Streamlit app showing attendance probability and no-show risk levels",
      ],
      tech: ["Python", "scikit-learn", "pandas", "Streamlit", "Altair"],
      github: "https://github.com/aaravv28/event-attendance-predictor",
    },
  ],

  projectFilters: [
    { key: "all", label: "All" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "backend", label: "Backend" },
    { key: "mobile", label: "Mobile" },
    { key: "ml", label: "Machine Learning" },
  ],

  skills: [
    {
      group: "MERN Stack",
      icon: "fa-solid fa-layer-group",
      items: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "React.js", icon: "devicon-react-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Mongoose", icon: "devicon-mongoose-original" },
        { name: "Vite", icon: "devicon-vitejs-plain" },
        { name: "REST APIs" },
        { name: "JWT Authentication" },
      ],
    },
    {
      group: "AI / Machine Learning",
      icon: "fa-solid fa-brain",
      items: [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "scikit-learn", icon: "devicon-scikitlearn-plain" },
        { name: "pandas", icon: "devicon-pandas-plain" },
        { name: "NumPy", icon: "devicon-numpy-plain" },
        { name: "Streamlit", icon: "devicon-streamlit-plain" },
        { name: "Google Gemini API", icon: "fa-solid fa-wand-magic-sparkles" },
        { name: "LLM Integration", icon: "fa-solid fa-comments" },
        { name: "Agentic AI", icon: "fa-solid fa-robot" },
        { name: "Feature Engineering" },
        { name: "Model Evaluation" },
      ],
    },
    {
      group: "Languages",
      icon: "fa-solid fa-code",
      items: [
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "C#", icon: "devicon-csharp-plain" },
        { name: "Dart", icon: "devicon-dart-plain" },
      ],
    },
    {
      group: "Also worked with",
      icon: "fa-solid fa-cubes",
      items: [
        { name: "Spring Boot", icon: "devicon-spring-original" },
        { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain" },
        { name: "Flutter", icon: "devicon-flutter-plain" },
        { name: "Supabase", icon: "devicon-supabase-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MySQL", icon: "devicon-mysql-original" },
      ],
    },
    {
      group: "Tools",
      icon: "fa-solid fa-toolbox",
      items: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "npm", icon: "devicon-npm-original-wordmark" },
      ],
    },
    {
      group: "Core Concepts",
      icon: "fa-solid fa-brain",
      items: [
        { name: "Data Structures & Algorithms" },
        { name: "OOP" },
        { name: "DBMS" },
        { name: "Operating Systems" },
        { name: "Computer Networks" },
        { name: "Software Engineering" },
      ],
    },
  ],

  certifications: [
    {
      title: "SigmaX – AI Full Stack Development",
      issuer: "Apna College",
      icon: "fa-solid fa-robot",
      text: "AI-powered software engineering: the complete MERN stack with AI-integrated development — LLMs, RAG systems and LangChain.",
      tags: ["MERN", "LLMs", "RAG", "LangChain"],
    },
    {
      title: "Sigma – Full Stack Web Development",
      issuer: "Apna College",
      icon: "fa-solid fa-code",
      text: "End-to-end web development, from HTML, CSS and JavaScript to building full-stack apps with the MERN stack.",
      tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Sigma – Data Structures & Algorithms",
      issuer: "Apna College",
      icon: "fa-solid fa-diagram-project",
      text: "Core data structures and algorithms with problem solving for technical interviews and placements.",
      tags: ["DSA", "Problem Solving"],
    },
  ],

  beyond: [
    {
      icon: "fa-solid fa-trophy",
      title: "Hackathon",
      text: "Competed in a college hackathon as part of a three-member software development team.",
    },
    {
      icon: "fa-solid fa-calendar-check",
      title: "Event Organizer",
      text: "Organized technical and cultural events as a college committee member.",
    },
    {
      icon: "fa-solid fa-puzzle-piece",
      title: "Consistent DSA Practice",
      text: "Regularly solve Data Structures & Algorithms problems to sharpen analytical thinking.",
    },
    {
      icon: "fa-solid fa-comments",
      title: "Soft Skills",
      text: "Problem solving, team collaboration, communication and leadership.",
    },
  ],
};
