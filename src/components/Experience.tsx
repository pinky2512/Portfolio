import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "AFAD Agency",
    role: "AI & Digital Solutions Intern",
    period: "January 2023 - May 2024",
    achievements: [
      "Recognized limitations in ad-hoc performance tracking and established data-driven reporting workflows by aggregating web traffic, SEO, and social engagement signals across 8+ brands, improving campaign targeting and content performance by 15%.",
      "Introduced NLP based content utilities for keyword extraction and sentiment analysis to support AI-assisted content generation, reducing drafting time by ∼30% while improving consistency across client posts.",
      "Detected performance and SEO degradation patterns and systematically improved website speed and responsiveness, achieving 10–20% gains in load time and search visibility.",
      "Drove evaluation of AI vs rule based automation approaches with founders, prioritizing solutions based on latency, cost, and maintainability, and enabling 5+ scalable process improvements."
     ]
  },
  {
    company: "Salesforce",
    role: "Salesforce Developer Intern",
    period: "April 2023 – May 2023",
    achievements: [
      "Automated CRM workflows using Salesforce Flow + SQL, reducing manual entry by 80% across 10K+ records",
      "Optimized data pipelines and integrated ranking dashboards, accelerating customer insights by 40%",
    ],
  },
  {
    company: "Celonis",
    role: "AICTE Process Mining Intern",
    period: "Jul 2022 – Sep 2022",
    achievements: [
      "Developed clustering-based automation dashboards and process mining scripts, removing 10 manual steps per transaction",
      "Saved 5+ hours/rep/week and implemented KPI QA checks, improving data quality by 25%",
    ],
  },
  {
    company: "AWS Academy",
    role: "AICTE AI & ML Intern",
    period: "Mar 2022 – May 2022",
    achievements: [
      "Trained and deployed predictive ML models on AWS SageMaker using scikit-learn and XGBoost to analyze 50K+ transactions for forecasting and risk-related use cases.",
      "Reduced end-to-end inference latency by 15% through Spark ETL optimization, Dockerized deployment, and automated CI/CD pipelines using GitHub Actions.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Professional journey in AI/ML and software engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
