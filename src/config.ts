export const siteConfig = {
  name: "Ahmad Shimmas",
  title: "Backend Engineer | Python, Django & Scalable APIs",
  description:
    "Portfolio of Ahmad Shimmas — Backend Engineer specializing in Python, Django REST Framework, scalable APIs, async processing, and cloud deployments.",

  accentColor: "#1d4ed8",

  social: {
    email: "ahmadshimmas@gmail.com",
    linkedin: "https://linkedin.com/in/ahmadshimmas",
    github: "https://github.com/ahmedshimmas",
  },

  aboutMe:
    "Backend Engineer focused on building scalable, production-ready systems using Python, Django, and Django REST Framework. I specialize in designing high-performance APIs, asynchronous task processing with Celery and Redis, and deploying containerized applications using Docker and AWS infrastructure. My work includes AI-powered platforms, CRM automation systems, real-time communication tools, and data pipelines. I care deeply about performance, clean architecture, and building systems that remain reliable under real production load.",

  skills: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "Celery",
    "Celery Beat",
    "APScheduler",
    "Django Channels",
    "WebSockets",
    "Docker",
    "Multi-stage Docker Builds",
    "Nginx",
    "Gunicorn",
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "AWS IAM",
    "API Integration",
    "Stripe",
    "Twilio WebRTC",
    "Webhooks",
    "RBAC",
    "JWT Authentication",
    "OAuth2",
    "Caching",
    "Database Optimization",
    "Async Task Processing",
    "Git",
    "GitHub",
    "Postman",
    "Linux",
  ],

  projects: [
    {
      name: "AgentWiz – AI CRM & Fleet Operations Platform",
      description:
        "Enterprise platform combining CRM automation, fleet dispatch, and HR operations. Designed scalable backend services using Django REST Framework and integrated AI microservices via FastAPI. Implemented browser-based calling with Twilio WebRTC, automated proposal workflows, and real-time vehicle tracking through telematics integrations.",
      link: "https://agentwiz.thefabulousshow.com/",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "FastAPI",
        "Twilio",
        "WebSockets",
        "Docker",
        "Redis",
        "AI Integration",
      ],
    },
    {
      name: "PlatePrep – AI Culinary Management Platform",
      description:
        "AI-powered platform for restaurant teams to manage menus, recipes, and cost optimization. Built backend APIs and async workflows for analyzing menu images and converting them into structured Canvas JSON for editing. Implemented AI-assisted recipe generation and secure role-based access controls.",
      link: "https://plateprep.com/",
      skills: [
        "Python",
        "Django",
        "DRF",
        "Celery",
        "Redis",
        "AI Integration",
        "RBAC",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      name: "StaronAI – AI Website Builder Platform",
      description:
        "Platform where users generate websites using AI, collaborate with developers, and manage project payments. Implemented real-time messaging using Django Channels and WebSockets, Stripe payment flows with webhooks, and subscription-based credit systems.",
      link: "https://staron.ai/",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "WebSockets",
        "Django Channels",
        "Stripe",
        "Celery",
        "Redis",
      ],
    },
    {
      name: "AIScout – Async Data Scraping Platform",
      description:
        "Asynchronous scraping platform processing thousands of data collection jobs daily. Built distributed scraping pipelines using Playwright and Celery workers with Dockerized deployment behind Nginx and Gunicorn.",
      link: "https://football-ai-power.netlify.app/home",
      skills: [
        "Python",
        "Playwright",
        "Django REST Framework",
        "Celery",
        "Redis",
        "Docker",
        "Nginx",
      ],
    },
    {
      name: "Custom Apparel Design System",
      description:
        "AI-assisted platform allowing users to design and order customized apparel with dynamic pricing rules and automated order lifecycle management. Backend built using Django REST Framework with async processing and cloud storage integration.",
      link: "https://cad-mockup.netlify.app/",
      skills: [
        "Django",
        "DRF",
        "PostgreSQL",
        "Celery",
        "Redis",
        "Docker",
        "Stripe",
        "AWS S3",
      ],
    },
  ],

  experience: [
    {
      company: "Fabtechsol Solutions",
      title: "Python Backend Developer",
      dateRange: "Sep 2024 – Present",
      bullets: [
        "Lead backend development for multiple production platforms including AI-driven CRM, SaaS tools, and automation systems.",
        "Design scalable APIs using Django REST Framework and integrate third-party services such as Stripe, Twilio, and AI microservices.",
        "Implemented asynchronous pipelines using Celery + Redis for background processing and high concurrency workloads.",
        "Containerized services with Docker and deployed production systems on AWS EC2 using Nginx and Gunicorn.",
        "Optimized database queries, caching strategies, and API performance to support thousands of active users.",
        "Mentor junior developers in Python, Django architecture, and backend engineering best practices.",
      ],
    },
    {
      company: "Theta Solutions",
      title: "Python Backend & Frontend Developer Trainee",
      dateRange: "May 2024 – Aug 2024",
      bullets: [
        "Completed professional training in Python, Django, and full-stack web development.",
        "Built multiple production-style projects including REST APIs, authentication systems, and database-backed applications.",
        "Learned containerization fundamentals with Docker and deployment best practices.",
        "Developed frontend interfaces using HTML, CSS, Bootstrap, and JavaScript.",
      ],
    },
  ],

  education: [
    {
      school: "University of Management and Technology",
      degree: "Bachelor of Science in English",
      dateRange: "2020 – 2024",
      achievements: [
        "Developed strong analytical and communication skills.",
        "Transitioned into full-time backend engineering through self-learning, professional training, and real-world project development.",
      ],
    },
    {
      school: "Self-Taught & Professional Learning",
      degree: "Backend Engineering, Cloud & DevOps",
      dateRange: "2024 – Present",
      achievements: [
        "Advanced backend architecture with Django REST Framework and async processing.",
        "Hands-on cloud deployments using Docker, Nginx, and AWS infrastructure.",
        "Exploring CI/CD automation, monitoring systems, and scalable infrastructure practices.",
      ],
    },
  ],
};