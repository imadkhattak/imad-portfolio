import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";



const IntroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI Engineer", "Machine Learning Expert", "Deep Learning Specialist"];

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
    <section id="intro" className="min-h-screen flex items-center justify-between relative overflow-hidden px-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Left Column - Text */}
      <div className="flex-1 flex justify-center relative z-10 mt-10">
        <div className="text-left max-w-2xl ml-10">

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in delay-200">
            Imad ud din khattak
          </h1>

          {/* Dynamic Role */}
          <div className="h-16 mb-8 flex items-center justify-start">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground-muted">
              I'm a{" "}
              <span className="gradient-text inline-block min-w-[300px] text-left">
                {roles[currentRole]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-foreground-muted max-w-xl mb-12 leading-relaxed animate-fade-in delay-400">
            Passionate about building intelligent systems and pushing the boundaries of artificial intelligence. 
            I create innovative solutions that bridge the gap between cutting-edge research and real-world applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-16 animate-fade-in delay-600">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            {/* Download CV Button with Google Drive link */}
            <a 
              href="https://drive.google.com/file/d/1BMgprH_b-_an9Wepw_wiuGSeZ6hGkCyK/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>


          {/* Social Links */}
          <div className="flex justify-start space-x-6 mb-16 animate-fade-in delay-800">
            <a href="https://github.com/imadkhattak" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="www.linkedin.com/in/imad-ud-din-khattak" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/imad_.khattak/" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="imad.works100@gmail.com" className="text-foreground-muted hover:text-primary transform hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Picture */}
      <div className="flex-1 flex justify-center relative z-10">
        <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-xl">
          <img 
            src="../../dist/Pictures/imad.jpg" 
            alt="Imad ud din khattak" 
            className="w-full h-full object-cover"
          />
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