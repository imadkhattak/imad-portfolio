import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
     {
       "title": "AI Job Application Assistant",
       "description": "An AI-powered job application assistant that scrapes job postings from multiple platforms (LinkedIn, Indeed, Glassdoor), parses user-uploaded CVs, and utilizes a Large Language Model (LLM) to match candidate profiles with suitable job openings. The web interface is built with Flask.",
       "image": "💼",
       "technologies": ["Python", "Flask", "LangChain", "Ollama", "Requests", "PyPDF", "HTML", "CSS", "JavaScript"],
       "category": "AI & Web Development",
       "status": "Completed",
       "demoUrl": "#",
       "githubUrl": "https://github.com/imadkhattak",
      "featured": true
     },
    {
      title: "Calling Bot for Shopping Malls Information Retrieval",
      description: "A voice-based AI chatbot that allows users to query shopping mall information through natural speech. Built with Faster-Whisper for speech-to-text, MySQL for database storage, and LLMs for natural language responses. Features real-time query handling, silence detection, and continuous conversational loop.",
      image: "📞",
      technologies: ["Python", "MySQL", "Faster-Whisper", "LangChain", "Flask"],
      category: "AI & Voice Assistant",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "https://github.com/imadkhattak", // replace with your repo link if available
      featured: true
    },

    {
      title: "SQL Agent for Natural Language Queries",
      description: "An intelligent SQL agent that converts natural language questions into MySQL queries using LLMs. Integrated with n8n workflow automation, Pinecone for schema storage, and Ollama for query generation. Enables seamless data exploration without writing SQL manually.",
      image: "🗄️",
      technologies: ["Python", "n8n", "MySQL", "Ollama", "Pinecone"],
      category: "AI Agents",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "https://github.com/imadkhattak", // replace with actual repo if available
      featured: true
    },
    {
  title: "Car Price Prediction System",
  description: "Built a machine learning pipeline to predict car prices using data scraped from PakWheels. Performed data collection with Selenium, data cleaning, feature engineering, and applied regression models for accurate predictions.",
  image: "🚗",
  technologies: ["Python", "Selenium", "Pandas", "Scikit-learn", "Matplotlib"],
  category: "Machine Learning",
  status: "Completed",
  demoUrl: "#",
  githubUrl: "https://github.com/imadkhattak", // replace with actual repo if available
  featured: false
}
  ];

  const categories = ["All", "Natural Language Processing", "Computer Vision", "Data Science", "Conversational AI", "MLOps", "Recommendation Systems"];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A showcase of innovative AI solutions that demonstrate my expertise across different domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-border-light text-foreground-muted hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className="bg-primary/20 text-primary">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit bg-background-tertiary text-foreground-muted">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground-muted leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-border-light text-foreground-subtle"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border-light text-foreground-muted hover:bg-hover"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{project.image}</div>
                  <Badge 
                    className={`${
                      project.status === "Production" 
                        ? "bg-accent-green/20 text-accent-green" 
                        : "bg-accent-orange/20 text-accent-orange"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit bg-background-tertiary text-foreground-muted text-xs">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-border-light text-foreground-subtle"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-border-light text-foreground-subtle">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border-light text-foreground-muted hover:bg-hover"
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
