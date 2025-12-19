import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-2">
            Open to roles in <span className="text-primary font-semibold">Machine Learning Engineering</span>, <span className="text-primary font-semibold">Applied Research</span>, and <span className="text-primary font-semibold">MLOps</span> — especially projects involving personalization, reinforcement learning, and generative AI systems.
          </p>
        </div>

        <Card className="p-8 bg-card border-border animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:mborra@buffalo.edu"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  mborra@buffalo.edu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+17699695368"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +1 (769) 969-5368
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Buffalo, New York 14214</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
              <Github className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/pinky2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              className="gap-2 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
              onClick={() => window.open('mailto:mborra@buffalo.edu', '_blank')}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/meghana-chowdary-borra/', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
