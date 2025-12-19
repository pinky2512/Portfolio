import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Borra Meghana Chowdary
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              AI/ML Engineer & Research Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in LLMs, Recommender Systems, and MLOps. Currently pursuing MS in Engineering Science (AI) at University at Buffalo.
            </p>
            <div className="pt-4 pb-2">
              <p className="text-base text-foreground max-w-3xl mx-auto leading-relaxed">
                Open to roles in <span className="text-primary font-semibold">Machine Learning Engineering</span>, <span className="text-primary font-semibold">Applied Research</span>, and <span className="text-primary font-semibold">MLOps</span> — especially projects involving personalization, reinforcement learning, and generative AI systems.
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="default"
              size="lg"
              className="gap-2 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
              onClick={() => window.open('mailto:mborra@buffalo.edu', '_blank')}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/meghana-chowdary-borra/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open('https://github.com/pinky2512', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>📍 Buffalo, New York 14214</p>
            <p>📞 +1 (769) 969-5368</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
