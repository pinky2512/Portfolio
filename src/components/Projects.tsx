import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, TrendingUp, Brain, Accessibility, MessageSquare, CreditCard } from "lucide-react";

const projects = [
  {
    title: "Emotionally Intelligent AAC System (LLMs for Societal Good)",
    icon: Accessibility,
    tags: ["LLMs", "RAG", "LangChain", "LangGraph", "PEFT", "NLP"],
    description:
      "Architected an LLM-powered AAC system integrating emotion-aware retrieval and response generation using Empathetic Dialogues and GoEmotions datasets.",
    achievements: [
      "Integrated emotion-aware RAG pipelines using LangChain and LangGraph",
      "Improved response quality by 18% over baselines using multi-metric evaluation",
      "Achieved 80% human-rated satisfaction in personalization and emotional relevance",
    ],
    githubUrl: "https://github.com/pinky2512/AAC-System",
  },
  {
    title: "RL Algorithm Benchmarking (Discrete & Continuous Spaces)",
    icon: TrendingUp,
    tags: ["Reinforcement Learning", "DQN", "DDQN", "PPO", "A2C", "DDPG", "SAC"],
    description:
      "Constructed a benchmarking framework to evaluate reinforcement learning algorithms across discrete and continuous control environments.",
    achievements: [
      "Evaluated 6 RL algorithms across 1M+ environment steps",
      "DDQN achieved 25% faster convergence on discrete tasks",
      "PPO/A2C/DDPG delivered 30–40% higher cumulative rewards in continuous environments",
    ],
    githubUrl: "https://github.com/pinky2512/RL-Benchmarking",
  },
  {
    title: "NYC Taxi Ride Demand Forecasting",
    icon: Code2,
    tags: ["Time Series", "MLOps", "Hopsworks", "MLflow", "AWS SageMaker"],
    description:
      "Built an end-to-end demand forecasting pipeline processing large-scale taxi trip data using modern MLOps practices.",
    achievements: [
      "Processed 100M+ trips using Hopsworks Feature Store and MLflow",
      "Automated retraining and deployment via GitHub Actions CI/CD",
      "Delivered a Streamlit dashboard reducing reporting time by 6+ hours/week",
    ],
    githubUrl: "https://github.com/pinky2512/NYC-Taxi-Forecasting",
  },
  {
    title: "Sign-Based Personal Assistant",
    icon: Brain,
    tags: ["Computer Vision", "CNN", "LSTM", "Accessibility", "Azure ML"],
    description:
      "Engineered a real-time sign-language recognition system optimized for low-latency accessibility use cases.",
    achievements: [
      "Achieved 95% accuracy across 10K+ gesture samples",
      "Optimized inference latency to below 300ms for real-time interaction",
    ],
    githubUrl: "https://github.com/pinky2512/Sign-Language-Assistant",
  },
  {
    title: "Toxic Comment Classification",
    icon: MessageSquare,
    tags: ["NLP", "GloVe", "Ensemble Methods"],
    description: "Built an NLP ranking + classification pipeline with GloVe embeddings and ensemble voting.",
    achievements: [
      "Achieved 92% precision / 89% recall",
      "Reduced false positives by 20% with agentic workflow",
    ],
    githubUrl: "https://github.com/pinky2512/Toxic-Comment-Classification",
  },
  {
    title: "Credit Card Default Prediction",
    icon: CreditCard,
    tags: ["Risk Modeling", "XGBoost", "LightGBM"],
    description: "Built risk prediction models on 30K+ transactions using ensemble ML methods.",
    achievements: [
      "Improved risk ranking accuracy by 12%",
      "Enabled AI-driven decision support for financial risk",
    ],
    githubUrl: "https://github.com/pinky2512/Credit-Default-Prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            End-to-end AI/ML solutions showcasing expertise in LLMs, MLOps, and real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card
                key={idx}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground flex-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="outline"
                      className="border-primary/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2 mt-auto">
                  {project.achievements.map((achievement, achIdx) => (
                    <li
                      key={achIdx}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
