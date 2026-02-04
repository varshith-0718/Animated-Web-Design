import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.experiences.list.path, async (_req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.personalInfo.get.path, async (_req, res) => {
    const info = await storage.getPersonalInfo();
    if (!info) {
      return res.status(404).json({ message: "Personal info not found" });
    }
    res.json(info);
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingInfo = await storage.getPersonalInfo();
  if (!existingInfo) {
    console.log("Seeding database...");
    
    // Seed Personal Info
    await storage.createPersonalInfo({
      name: "Raavi Varshith Reddy R.",
      headline: "AI / ML Engineer | MLOps | Agentic AI | Autogen | NLP",
      bio: "I'm a Data Scientist and AI/ML Engineer with experience building and deploying machine learning systems across finance, healthcare, and e-commerce. I enjoy working on problems where the data is messy and the requirements aren't fully defined.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername"
      }
    });

    // Seed Skills
    const skillsData = {
      "Programming": ["Python", "SQL", "C++"],
      "ML & DL": ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "CatBoost", "BERT", "GPT Models"],
      "GenAI / LLMs": ["OpenAI APIs", "Hugging Face Transformers", "LangChain", "LangGraph", "LangSmith", "CrewAI", "AutoGen", "RAG Architectures"],
      "AI Agents": ["LangGraph Agents", "CrewAI Agents", "Rule-based Decision Agents", "Multi-Agent Evaluation Pipelines"],
      "Vector Databases": ["FAISS", "Pinecone", "Chroma", "Milvus"],
      "ML Algorithms": ["Regression", "Classification", "Ensemble Methods", "Gradient Boosting", "Clustering", "Time-Series Models", "CNN/RNN architectures", "Transformer-based models"],
      "Data Engineering": ["PySpark", "Kafka", "Snowflake", "BigQuery", "Redshift", "ETL/ELT Design"],
      "MLOps & Automation": ["MLflow", "Airflow", "Kubernetes", "Docker", "Terraform", "FastAPI", "GitHub Actions", "Azure DevOps", "n8n", "Cursor AI", "MCP"],
      "Cloud": ["AWS S3/Lambda/ECS/SageMaker", "Azure ML/AKS/Azure OpenAI", "GCP BigQuery/Vertex AI"],
      "Evaluation & Safety": ["SHAP", "LIME", "RAGAS", "BLEU/ROUGE", "ROC-AUC", "Prompt Safety Testing", "Bias Analysis"],
      "Visualization": ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn"],
      "Security & Compliance": ["HIPAA", "PII/PHI Redaction", "HITL Review Loops"]
    };

    for (const [category, items] of Object.entries(skillsData)) {
      await storage.createSkill({ category, items });
    }

    // Seed Experiences
    const experiencesData = [
      {
        title: "AI/ML Engineer",
        company: "JPMorgan Chase",
        role: "AI/ML Engineer",
        duration: "Jan 2025 – Dec 2025",
        description: "Developed a secure Generative AI assistant for internal operations for finance team, enabling natural language querying over financial documents and transaction datasets.",
        highlights: [
          "Developed a secure Generative AI assistant for internal operations for finance team, enabling natural language querying over financial documents and transaction datasets, reducing manual data lookup time by 35% across 1.3M+ financial records and internal policy documents.",
          "Implemented Retrieval-Augmented Generation (RAG) using LangChain, structured workflows with LangGraph, and monitored prompt performance and latency using LangSmith.",
          "Built task-specific AI agents for compliance checks, report summarization, and customer query resolution, improving response accuracy by ~28% in controlled evaluations.",
          "Integrated GitHub Copilot into Python and API development workflows, accelerating feature implementation & refactoring cycles by 20%.",
          "Used Model Context Protocol (MCP) for controlled tool invocation and n8n to automate ingestion, embedding refresh, and compliance-triggered workflows across 2M+ financial and policy documents."
        ],
        environment: ["Python", "LangChain", "LangGraph", "LangSmith", "RAG", "AI Agents", "GitHub Copilot", "Cursor AI", "MCP", "n8n", "AWS EC2/S3/IAM"]
      },
      {
        title: "Machine Learning Engineer",
        company: "Humana",
        role: "Machine Learning Engineer",
        duration: "Aug 2022 – Dec 2023",
        description: "Built and trained supervised ML models to predict patient risk scores and readmission likelihood.",
        highlights: [
          "Built and trained supervised ML models to predict patient risk scores and readmission likelihood, improving early risk identification accuracy by ~22% across 1.2M+ patient encounter records.",
          "Performed advanced feature engineering on clinical, demographic, and temporal datasets, improving model stability and reducing noise-driven variance.",
          "Implemented end-to-end MLOps pipelines for model training, versioning, and deployment using containerized workflows, reducing ML model release cycles from weeks to days for pipelines processing millions of clinical data points per training run.",
          "Deployed scalable inference services on Kubernetes, with infrastructure provisioned via Terraform, ensuring reproducible and auditable environments."
        ],
        environment: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "MLflow", "Azure ML", "Docker", "Kubernetes", "Terraform", "Azure Blob Storage", "SQL"]
      },
      {
        title: "Data Scientist",
        company: "eBay",
        role: "Associate Data Scientist",
        duration: "Jun 2021 – Jul 2022",
        description: "Analyzed large-scale retail transaction and customer data to identify sales trends and product performance.",
        highlights: [
          "Analyzed large-scale retail transaction and customer data to identify sales trends, product performance, and regional demand patterns across 10M+ point-of-sale transactions.",
          "Built scalable data pipelines for ingesting, cleaning, and transforming 15M+ daily records from sales, inventory, and pricing systems.",
          "Performed statistical analysis and exploratory data analysis to uncover seasonality, promotion impact, and customer purchasing behavior, supporting merchandising and pricing decisions.",
          "Designed optimized analytical models and queries in BigQuery to compute KPIs such as revenue, basket size, and sell-through rates, reducing report generation time by ~30%.",
          "Developed interactive dashboards and reports to track sales performance and inventory health across 1,000+ retail locations.",
          "Optimized ETL workflows using SQL and Python, improving pipeline performance and reducing data latency for downstream analytics."
        ],
        environment: ["Python", "SQL", "Pandas", "NumPy", "BigQuery", "Cloud Storage", "Looker Studio", "Data Modeling", "ETL Pipelines"]
      }
    ];

    for (const exp of experiencesData) {
      await storage.createExperience(exp);
    }
    
    // Seed Projects (using similar data if projects are distinct, otherwise reuse)
    // The JSONs were identical, but I'll add a sample project just in case the user wants to see the section populated differently
    const projectsData = [
      {
        title: "Portfolio Website",
        description: "A modern, dark-themed personal portfolio website built with React, Tailwind CSS, and Framer Motion.",
        highlights: ["Responsive Design", "Smooth Animations", "SEO Optimized"],
        link: "https://github.com/yourusername/portfolio",
        duration: "Feb 2026"
      }
    ];
    
    for (const proj of projectsData) {
      await storage.createProject(proj);
    }

    console.log("Seeding completed.");
  }
}
