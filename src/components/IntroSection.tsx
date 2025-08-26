import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const IntroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI Engineer", "Machine Learning Expert", "Deep Learning Specialist", "Computer Vision Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg text-foreground-muted mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in delay-200">
            Your Name
          </h1>
          
          {/* Dynamic Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground-muted">
              I'm a{" "}
              <span className="gradient-text inline-block min-w-[300px] text-left">
                {roles[currentRole]}
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-400">
            Passionate about building intelligent systems and pushing the boundaries of artificial intelligence. 
            I create innovative solutions that bridge the gap between cutting-edge research and real-world applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-600">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-800">
            <a href="#" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
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
      </div>
    </section>
  );
};

export default IntroSection;