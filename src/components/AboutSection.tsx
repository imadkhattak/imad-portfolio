import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Deep understanding of machine learning algorithms, neural networks, and AI frameworks."
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in building end-to-end AI applications with modern web technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focused",
      description: "Constantly exploring new technologies and methodologies to solve complex problems."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Committed to delivering high-quality solutions that make a measurable impact."
    }
  ];

  const interests = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Generative AI", "MLOps", "Data Engineering", "Research & Development"
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-background-secondary border border-border-light relative z-10">
               {/* Replace with actual image */}
               <div className="absolute inset-0 flex items-center justify-center text-foreground-muted bg-muted/30">
                  <span className="text-6xl"><img src="Images/20250215_135953 (2).jpg" alt="" /></span>
               </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-6 -left-6 bottom-6 right-6 bg-primary/5 rounded-3xl transform -rotate-3"></div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6 text-left">
            <div>
              <p className="text-primary font-bold tracking-wider uppercase mb-2">About Me</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Hi there, I'm <span className="text-primary">Imad Khattak</span>
              </h2>
              <p className="text-lg text-foreground-muted font-medium mb-6">
                AI ENGINEER
              </p>
            </div>

            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                With over a year of experience in AI and ML, I specialize in building intelligent systems that solve real-world problems. 
                From computer vision to NLP, I transform complex research into scalable solutions.
              </p>
              <p>
                I am passionate about creating AI that truly understands and enhances human capabilities. 
                When I'm not coding, I'm contributing to open-source or exploring the latest in AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/cv.pdf" 
                target="_blank" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Download CV
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "1+", label: "Years Experience" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;