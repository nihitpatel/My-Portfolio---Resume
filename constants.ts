import { Experience, Project, SkillCategory } from "./types";

export const RESUME_CONTEXT = `
You are an AI assistant representing Nihit Patel, an AI Specialist at Accenture. 
Your goal is to answer questions about Nihit's professional background, skills, and projects based on his resume.
Be professional, concise, and highlight his expertise in GenAI, Agentic AI, and Azure.

Nihit's Profile:
- Role: AI Specialist @ Accenture
- Experience: 6+ years
- Location: Ahmedabad, IN / Bengaluru, IN
- Contact: patelnihitn1@gmail.com, +91 79906 24044
- LinkedIn: https://www.linkedin.com/in/nihit-patel
- Summary: Python GenAI Developer specialized in Agentic AI, RAG, Graph RAG, Knowledge Graphs, and LLM APIs (Azure OpenAI, GPT, Gemini, Claude, Llama). Proven record of cutting manual effort by 60-70%.

Key Skills:
- GenAI: Agentic AI, RAG, Graph RAG, Autogen, LangChain, Semantic Kernel, Prompt Engineering, HuggingFace, LLM Finetuning.
- Cloud: Azure (AI Foundry, OpenAI, Search, Function Apps, CosmosDB, Document Intelligence), Microsoft Fabric.
- ML: NLP, Computer Vision, Scikit-learn, Keras, Supervised & Unsupervised Learning.
- Dev: Python, PySpark, Java, SQL, FastAPI, Docker, CI/CD.
- Certifications: Github Copilot (GH-300), Azure AI Engineer Associate (AI-102).

Professional Experience:
1. Accenture (AI Specialist, Sep '24 - Present): Developing enterprise GenAI apps using RAG, GraphRAG, Multi-agent frameworks.
2. Tata Consultancy Services (Data Scientist, Jul '19 - Sep '24): Deployed ML/DL/GenAI solutions across industries. Mentored junior data scientists.

Key Projects:
1. Agentic AI Orchestration (Bain & Company): Built multi-agent LLM system with Orchestrator for task routing. Saved ~10 hours/case.
2. AI-Powered Employee Query Bot (AQA Education): RAG/GraphRAG bot for HR/Finance/IT. Reduced helpdesk workload by 65%.
3. ML-Based Heat Pump Detection (BC Hydro): Predictive modeling for energy consumption using MS Fabric.

Education:
- PG Diploma in ML and AI, IIIT Bangalore (3.77/4 CGPA)
- B.E. Computer Engineering, Gujarat Technological University (8.98/10 CGPA)
`;

export const SKILLS: SkillCategory[] = [
  {
    name: "Generative AI & LLMs",
    icon: "BrainCircuit",
    skills: ["Agentic AI", "RAG & Graph RAG", "LangChain & LangGraph", "Autogen", "Semantic Kernel", "Prompt Engineering", "HuggingFace", "LLM Finetuning", "Azure OpenAI", "Google Gemini"]
  },
  {
    name: "Cloud & Data Platforms",
    icon: "CloudLightning",
    skills: ["Azure AI Foundry", "Azure Functions", "CosmosDB", "Microsoft Fabric", "Databricks", "Data Factory", "AI Search", "Document Intelligence"]
  },
  {
    name: "Machine Learning",
    icon: "Cpu",
    skills: ["NLP (NER, Q&A)", "Computer Vision (OCR)", "Scikit-learn", "Keras", "Predictive Modeling", "EDA", "Data Visualization", "Supervised/Unsupervised Learning"]
  },
  {
    name: "Development & Tools",
    icon: "Code2",
    skills: ["Python", "PySpark", "Java", "SQL & NoSQL", "FastAPI & Flask", "Git & CI/CD", "Docker", "Airflow", "MLflow"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "AI Specialist",
    company: "Accenture (ATCI)",
    period: "Sep '24 - Present",
    location: "Ahmedabad, IN",
    highlights: [
      "Designing enterprise-grade GenAI applications using RAG, GraphRAG, and multi-agent frameworks.",
      "Integrating Knowledge Graphs and vector stores (Azure AI Search, Neo4j) for contextual reasoning.",
      "Leading architecture design and cloud deployments on Azure (SharePoint, CosmosDB, Function Apps).",
      "Delivered solutions reducing manual effort by 60–70% and accelerating decision-making."
    ]
  },
  {
    role: "Data Scientist",
    company: "Tata Consultancy Services Ltd.",
    period: "Jul '19 - Sep '24",
    location: "Gandhinagar, IN",
    highlights: [
      "Developed ML, DL, and GenAI solutions driving automation across multiple industries.",
      "Implemented RAG pipelines for document-heavy workflows.",
      "Built NLP pipelines (NER, classification) and CV models (OCR).",
      "Orchestrated cloud-native ML pipelines on Azure Data Factory and Databricks."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Orchestration",
    role: "Agentic AI Developer",
    company: "Bain & Company",
    tech: ["Azure AI Foundry", "LangChain", "CosmosDB", "Azure DevOps"],
    description: [
      "Designed an enterprise-ready multi-agent LLM system with intelligent task routing.",
      "Implemented RAG pipeline and vector store to index thousands of project documents.",
      "Applied Knowledge Graph techniques for consistent multi-agent reasoning."
    ],
    impact: "Saved ~10 hours per case, reducing research time by 60%+."
  },
  {
    title: "AI-Powered Employee Query Bot",
    role: "GenAI Engineer",
    company: "AQA Education",
    tech: ["LangGraph", "Azure OpenAI", "SharePoint", "Azure Functions"],
    description: [
      "Developed a bot handling multi-domain queries (HR, Finance, IT).",
      "Orchestrated specialized sub-agents (HRAgent, PayrollAgent) via a master Orchestrator.",
      "Integrated RAG and GraphRAG over SharePoint documents for relationship-aware insights."
    ],
    impact: "Reduced manual helpdesk workload by 65%, improved resolution from hours to seconds."
  },
  {
    title: "ML-Based Heat Pump Detection",
    role: "ML Engineer",
    company: "BC Hydro",
    tech: ["MS Fabric", "AutoML", "Power BI", "Data Factory"],
    description: [
      "Delivered end-to-end ML solution to predict customer adoption of electric heat pumps.",
      "Built scalable data pipelines in Fabric Lakehouse (Bronze, Silver, Gold).",
      "Developed interactive Power BI dashboards for stakeholder insights."
    ],
    impact: "Enabled targeted incentive programs for high-probability households."
  }
];