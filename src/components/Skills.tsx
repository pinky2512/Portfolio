import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
   {
    title: "LLMs & Agentic AI",
    skills: ["LangGraph", "LangChain", "Google ADK", "RAG Pipelines", "Prompt Engineering", "Multi Agent Systems"],
  },
  {
    title: "ML & Deep Learning",
    skills: ["Transformers", "Time-Series Modeling", "PEFT/LoRA", "Embedding Models"],
  },
  {
    title: "MLOps",
    skills: ["Docker", "Kubernetes", "MLflow", "CI/CD", "Model Serving", "Experiment Tracking"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "pandas", "NumPy", "OpenCV", "TFLite", "Flask", "FastAPI"],
  },
  {
    title: "Cloud & Data Infrastructure",
    skills: ["AWS (EC2, Lambda, S3)", "GCP", "Redis", "PySpark"],
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            Comprehensive expertise across the AI/ML technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
