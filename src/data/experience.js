export const experienceCategories = [
  { id: "all", label: "All Experiences" },
  { id: "work", label: "Professional Experience (Virtusa)" },
  { id: "leadership", label: "Roles & Responsibilities" }
];

export const experienceData = [
  {
    id: "virtusa-fullstack",
    company: "Virtusa",
    role: "Associate Engineer (Java Full Stack Developer)",
    employmentType: "Full-Time",
    category: "work", // Explicit work experience
    categoryLabel: "Work Experience",
    period: "2025 – Present",
    current: true,
    location: "Hyderabad, India",
    summary: "Developing and maintaining enterprise-grade web applications and high-throughput microservices using Java, Spring Boot, Spring Cloud, Kafka, and React in fast-paced Agile sprint environments.",
    responsibilities: [
      "Developed and maintained scalable web applications using Java, Spring Boot, and React.",
      "Developed RESTful backend services using Java, Spring Boot, and Spring Data JPA, improving API performance through optimized database access.",
      "Implemented secure authentication using Spring Security and JWT with role-based access control (RBAC).",
      "Built Spring Cloud microservices integrated with Eureka service discovery, centralized Config Server, and API Gateway.",
      "Worked with Apache Kafka for event-driven asynchronous communication between distributed microservices.",
      "Participated in Agile ceremonies, sprint planning, daily standups, code reviews, bug fixing, and production release support.",
      "Collaborated closely with frontend developers to deliver end-to-end, high-performance features."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Eureka & API Gateway",
      "Apache Kafka",
      "Spring Security (JWT)",
      "Spring Data JPA / Hibernate",
      "React",
      "Docker",
      "MySQL",
      "Maven",
      "Swagger"
    ],
    achievements: [
      "Optimized database query performance with Spring Data JPA indexing and caching",
      "Successfully integrated resilient Kafka event topics across core services"
    ]
  },
  {
    id: "salesforce-intern",
    company: "Salesforce / SmartInternz / AICTE",
    role: "Salesforce Developer Virtual Intern",
    employmentType: "Virtual Internship",
    category: "leadership", // Roles & Responsibilities
    categoryLabel: "Roles & Responsibilities",
    period: "Oct 2023 – Jan 2024",
    current: false,
    location: "Remote, India",
    summary: "Developed custom enterprise cloud solutions, Apex backend business logic, and reactive user interfaces on the Salesforce Lightning platform.",
    responsibilities: [
      "Designed and automated complex CRM business workflows utilizing Apex classes, triggers, and platform events.",
      "Constructed modular, reactive front-end interfaces using Lightning Web Components (LWC) and modern ES6 JavaScript.",
      "Formulated optimized SOQL queries and data manipulation scripts adhering to Salesforce governor limits.",
      "Conducted thorough unit testing with mock data ensuring over 85% Apex test coverage for enterprise deployment."
    ],
    technologies: ["Salesforce CRM", "Apex", "Lightning Web Components (LWC)", "SOQL", "Process Automation"],
    achievements: [
      "Successfully delivered all capstone developer milestones within target deadlines",
      "Awarded official certificate of completion endorsed by AICTE and Salesforce"
    ]
  },
  {
    id: "ingenuity-secretary",
    company: "IngenuITy (IT Department Student Body, CVRCE)",
    role: "Organizational Secretary & Lead Coordinator",
    employmentType: "Technical Leadership & Student Governance",
    category: "leadership", // Roles & Responsibilities
    categoryLabel: "Roles & Responsibilities",
    period: "2023 – 2025",
    current: false,
    location: "CVR College of Engineering, Hyderabad",
    summary: "Led executive organization of departmental technical fests, hackathons, and programming bootcamps, expanding student participation by 30%.",
    responsibilities: [
      "Steered end-to-end planning and logistics for 5+ major departmental technical symposiums and coding tournaments.",
      "Led a 15-member student developer and logistics committee managing participant registrations and digital event infrastructure.",
      "Organized peer programming mentorship bootcamps on Git version control, web development, and algorithmic problem solving.",
      "Collaborated with faculty heads and industry judges to curate competitive evaluation rubrics."
    ],
    technologies: ["Technical Leadership", "Agile Event Management", "Team Coordination", "Public Speaking"],
    achievements: [
      "Drove a measurable 30% increase in student engagement across departmental technical initiatives",
      "Recognized by the Department of Information Technology for exemplary leadership"
    ]
  },
  {
    id: "theatre-club-treasurer",
    company: "Theatre Club, CVR College of Engineering",
    role: "Treasurer & Core Committee Member",
    employmentType: "Club Leadership & Financial Operations",
    category: "leadership", // Roles & Responsibilities
    categoryLabel: "Roles & Responsibilities",
    period: "2022 – 2024",
    current: false,
    location: "Hyderabad, Telangana",
    summary: "Administered club treasury, vendor contracts, and stage production budgets while elevating active membership engagement by 25%.",
    responsibilities: [
      "Managed annual operational finances of ₹50,000+ with zero audit discrepancy.",
      "Negotiated vendor contracts for stage production, audio engineering, and event materials.",
      "Spearheaded creative campus outreach campaigns expanding student performer registrations by 25%.",
      "Coordinated schedule timelines and rehearsal spaces for annual college festival performances."
    ],
    technologies: ["Budget Allocation", "Financial Auditing", "Resource Planning", "Cross-Functional Collaboration"],
    achievements: [
      "Streamlined budgeting processes leading to 15% cost savings allocated towards club equipment",
      "Co-produced award-winning stage performances during university annual festivals"
    ]
  }
];
