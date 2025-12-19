import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Borra Meghana Chowdary. Built with passion for AI/ML.</p>
      </footer>
    </div>
  );
};

export default Index;
