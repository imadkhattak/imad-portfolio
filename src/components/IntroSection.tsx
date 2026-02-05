import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

const IntroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 border-b border-primary/20 text-center pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl mb-8 animate-fade-in effect-glow hover:scale-105 transition-transform duration-300">
          <img 
            src="../../imad.jpg" 
            alt="Imad ud din khattak" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Greeting */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in delay-100">
           <span className="text-xl md:text-2xl font-bold text-foreground">Hi, I'm Imad</span>
           <span className="text-2xl animate-wave">👋</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-foreground animate-fade-in delay-200">
          Building <span className="gradient-text">intelligent systems</span>, automations, and experiences.
        </h1>

        {/* Description */}
        <p className="text-xl text-foreground-muted max-w-2xl mb-10 animate-fade-in delay-300">
           A Data Scientist and AI Engineer. I specialize in Machine Learning, Deep Learning, and building scalable AI solutions.
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToContact} 
          className="rounded-full px-10 py-7 text-lg mb-12 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in delay-400"
        >
          Connect with me
        </Button>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 animate-fade-in delay-500">
            <a href="https://github.com/imadkhattak" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/imad-ud-din-khattak" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/imad_.khattak/" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="mailto:imad.works100@gmail.com" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          onClick={scrollToAbout}
          className="p-2 rounded-full hover:bg-primary/20"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;