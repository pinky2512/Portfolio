import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, TrendingUp, Brain, Accessibility, MessageSquare, CreditCard } from "lucide-react";

const projects = [
  {
    title: "Personalized AAC System (LLMs for Societal Good)",
    icon: Accessibility,
    tags: ["Recommender Systems", "RAG", "LangChain", "FAISS"],
    description: "Built an agentic AI workflow with LangChain, FAISS, and OpenAI Function Calling for empathetic AAC recommendations.",
    achievements: [
      "Fine-tuned LLMs with RAG (90K+ dialogues)",
      "Improved personalization by 18%",
      "Achieved 80% human-rated satisfaction",
    ],
    githubUrl: "https://github.com/pinky2512/AAC-System",
  },
  {
    title: "RL Algorithm Benchmarking",
    icon: TrendingUp,
    tags: ["Reinforcement Learning", "Policy Optimization"],
    description: "Benchmarked 6 algorithms across 1M+ steps on multiple environments including CartPole, LunarLander, and CarRacing.",
    achievements: [
      "DDQN improved stability with 25% faster convergence",
      "PPO/A2C/DDPG outperformed by 30–40% in cumulative reward",
    ],
    githubUrl: "https://github.com/pinky2512/RL-Benchmarking",
  },
  {
    title: "NYC Taxi Ride Demand Forecasting",
    icon: Code2,
    tags: ["Real-Time ML", "MLOps", "Hopsworks", "MLflow"],
    description: "Designed a retrieval + ranking pipeline processing 100M+ trips using modern MLOps practices.",
    achievements: [
      "Deployed real-time recommendation models on AWS/Azure",
      "Reduced reporting time by 6+ hrs/week",
    ],
    githubUrl: "https://github.com/pinky2512/NYC-Taxi-Forecasting",
  },
  {
    title: "Sign-Based Personal Assistant",
    icon: Brain,
    tags: ["Computer Vision", "CNN", "LSTM", "Accessibility"],
    description: "Built real-time gesture-to-text assistant with CNN + LSTM for accessibility.",
    achievements: [
      "Achieved 95% accuracy with <300ms latency",
      "Integrated LangChain + AutoGen for multimodal workflows",
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
