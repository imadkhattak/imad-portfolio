import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
     {
       "title": "AI Job Application Assistant",
       "description": "Scrapes job postings, parses CVs, and auto-matches candidates using LLMs. Flask-based web interface.",
       "image": "/placeholder.svg", 
       "technologies": ["Python", "Flask", "LangChain", "Ollama", "HTML/CSS"],
       "category": "AI & Web Development",
       "status": "Completed",
       "demoUrl": "#",
       "githubUrl": "https://github.com/imadkhattak",
      "featured": true
     },
    {
      title: "Mall Info Voice Bot",
      description: "Voice-based AI chatbot for mall queries. Uses Faster-Whisper, MySQL, and LLMs for natural conversation.",
      image: "/placeholder.svg",
      technologies: ["Python", "MySQL", "Faster-Whisper", "LangChain"],
      category: "AI & Voice Assistant",
      status: "Completed",
      demoUrl: "https://youtu.be/bJwAE4ip3-w",
      githubUrl: "https://github.com/imadkhattak",
      featured: true
    },
    {
      title: "NL to SQL Agent",
      description: "Converts natural language questions into MySQL queries using LLMs. Integrated with n8n and Pinecone.",
      image: "/placeholder.svg",
      technologies: ["Python", "n8n", "MySQL", "Ollama", "Pinecone"],
      category: "AI Agents",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "https://github.com/imadkhattak",
      featured: true
    },
    {
      title: "Car Price Prediction",
      description: "ML pipeline to predict car prices using scraped data. Features data cleaning and regression models.",
      image: "/placeholder.svg",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "https://github.com/imadkhattak",
      featured: false
    }
  ];

  const categories = ["All", "NLP", "Computer Vision", "Data Science", "Voice AI", "MLOps"];

  return (
    <section id="projects" className="py-20 bg-background-secondary border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Showcase of innovative AI solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="border-border-light text-foreground-muted hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border-light hover:shadow-hover overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-muted w-full relative">
                 {/* Replace with actual image in production */}
                 <div className="absolute inset-0 flex items-center justify-center text-foreground-muted opacity-20 text-4xl font-bold">
                    UI Preview
                 </div>
              </div>
              
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start mb-2">
                   <Badge variant="outline" className="text-xs">{project.category}</Badge>
                   <Badge className="bg-primary/20 text-primary text-xs px-2 py-0.5">{project.status}</Badge>
                </div>
                <CardTitle className="text-lg text-foreground line-clamp-1">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-4 pt-0 flex-1 flex flex-col">
                <p className="text-sm text-foreground-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-background-tertiary text-foreground-subtle border border-border-light">
                            {tech}
                        </Badge>
                    ))}
                    </div>
                    
                    <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        <ExternalLink className="mr-2 h-3 w-3" /> Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-border-light hover:bg-muted">
                        <Github className="mr-2 h-3 w-3" /> Code
                    </Button>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button 
            variant="ghost" 
            className="text-primary hover:bg-primary/10"
          >
            View GitHub for more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
