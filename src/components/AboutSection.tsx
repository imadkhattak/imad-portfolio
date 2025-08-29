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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Passionate AI Engineer with a mission to create intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-foreground-muted leading-relaxed">
                With over 1 year of experience in artificial intelligence and machine learning, 
                I've had the privilege of working on cutting-edge projects that span from computer vision 
                systems to natural language processing applications.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                My passion lies in transforming complex research concepts into practical, scalable solutions. 
                I believe that the future of technology is not just about building smarter systems, 
                but about creating AI that truly understands and enhances human capabilities.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                When I'm not coding or training models, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring the latest advancements in AI research.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-background-tertiary text-foreground-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-foreground-muted">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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