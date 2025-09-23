export const siteConfig = {
  name: "Ahmad Shimmas",
  title: "Backend Developer | Django & REST APIs",
  description:
    "Portfolio website of Ahmad Shimmas — showcasing expertise in backend development, scalable APIs, and modern web applications.",
  accentColor: "#1d4ed8",
  social: {
    email: "ahmadshimmas@gmail.com",
    linkedin: "https://linkedin.com/in/ahmadshimmas", // replace with your actual LinkedIn username
    github: "https://github.com/ahmedshimmas",
  },
  aboutMe:
    "I’m a backend developer who builds clean, scalable systems with Python, Django, and Django REST Framework. From custom e-commerce solutions to task trackers to SAAS platforms and automation, I turn complex ideas into reliable, production-ready applications. My focus: performance, maintainability, and delivering solutions that clients can depend on.",
  skills: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "SQLite",
    "AWS EC2/S3",
    "Nginx",
    "Docker",
    "Celery",
    "Redis",
    "Caching",
    "Throttling",
    "JWT & OAuth2 Authentication",
    "RBACs",
    "API Integration",
    "Stripe",
    "Git & GitHub",
  ],
  projects: [
    {
      name: "AIScout",
      description:
        "AI-powered platform for generating and managing custom designs. Implements intelligent design workflows and scalable backend services.",
      link: "https://football-ai-power.netlify.app/home",
      skills: ["Python", "Django", "REST API", "Celery", "Redis", "Docker", "Nginx", "Twilio"],
    },
    {
      name: "Custom Apparel Design System",
      description:
        "Full-stack solution for creating personalized apparel products with dynamic design placement, pricing rules, and integrated order management.",
      link: "https://cad-mockup.netlify.app/",
      skills: ["Django", "DRF", "PostgreSQL", "Celery", "Redis", "Docker", "Stripe", "AI-Integration", "Nginx", "Twilio"],
    },
    {
      name: "TickTrack (Daily Task Tracker)",
      description:
        "A productivity app where users can manage daily tasks with timers and receive automated progress emails using Celery + Redis.",
      link: "https://github.com/ahmedshimmas/Tick-Track",
      skills: ["Django", "Celery", "Redis", "SMTP", "API"],
    },
    {
      name: "YouTube Downloader",
      description:
        "Lightweight application that fetches and downloads YouTube videos with multiple format options, built using Python and REST APIs.",
      link: "https://github.com/ahmedshimmas/Youtube-Downloader",
      skills: ["Python", "REST API", "Requests", "Tkinter", "PyInstaller"],
    },
    {
      name: "E-commerce Platform",
      description:
        "Multi-page responsive e-commerce site with cart, checkout, and order management. Backend built with Django and DRF, frontend with Bootstrap & jQuery.",
      skills: ["Django", "DRF", "Bootstrap", "jQuery", "HTML", "CSS", "Javascript", "PostgreSQL", "Stripe"],
    }
  ],
  experience: [
    {
      company: "Fabulous Technology Solutions",
      title: "Python Backend Developer",
      dateRange: "Jun 2024 – Present",
      bullets: [
        "Currently working here, contributing and solo-handling production projects",
        "Developing APIs and background tasks using Django REST Framework and Celery+Redis.",
        "Implementing authentication flows with JWT/OAuth2 and role-based permissions.",
        "Optimized database queries to reduce response times and improve scalability.",
        "Finished and helped deploying many production projects.",
      ],
    },
    {
      company: "Theta Solutions",
      title: "Frontend + Python Backend Developer",
      dateRange: "2024",
      bullets: [
        "Learned Frontend architecture, created multiple full-stack projects in learning phase.",
        "Learned backend with Python, automation with Celery+Redis, and deployment with Docker",
        "Provided clean documentation and reusable code for client handoff.",
      ],
    },
  ],
  education: [
    {
      school: "University of Management and Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2020 – 2024",
      achievements: [
        "Developed strong analytical and communication skills.",
        "Transitioned into full-time software developmer through self-learning, project building, and certifications.",
      ],
    },
    {
      school: "Self-Taught & Online Platforms",
      degree: "Backend Development & Django REST Framework + DevOps",
      dateRange: "2025 – Present",
      achievements: [
        "Starting developing pipeplines for CI/CD",
        "Getting familiar with automation tools like Jenkins, Ansible",
        "Will be adding Kubernetes later for orchestration",
        "Monitoring with Grafana + Premetheus",
      ],
    },
  ],
};
