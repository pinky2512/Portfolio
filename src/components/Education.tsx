import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  University at Buffalo
                </h3>
                <span className="text-sm text-muted-foreground">
                  Aug 2024 – Dec 2026
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">
                Master of Science in Engineering Science (Artificial Intelligence)
              </p>
              <p className="text-muted-foreground">
                Buffalo, NY
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
