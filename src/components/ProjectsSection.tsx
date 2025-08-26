import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Content Generator",
      description: "A sophisticated content generation platform using GPT models and custom fine-tuning. Features real-time content optimization, multi-language support, and SEO analysis.",
      image: "🤖",
      technologies: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL"],
      category: "Natural Language Processing",
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Computer Vision Detection System",
      description: "Real-time object detection and tracking system for industrial automation. Implemented using YOLO architecture with custom training on specialized datasets.",
      image: "👁️",
      technologies: ["Python", "PyTorch", "OpenCV", "Docker", "AWS"],
      category: "Computer Vision",
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Machine learning platform for business forecasting with interactive dashboards. Includes time series analysis, anomaly detection, and automated reporting.",
      image: "📈",
      technologies: ["Python", "Scikit-learn", "Plotly", "Streamlit", "MongoDB"],
      category: "Data Science",
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Chatbot Intelligence Platform",
      description: "Multi-modal conversational AI with voice synthesis, emotion recognition, and context awareness. Deployed across multiple communication channels.",
      image: "💬",
      technologies: ["Python", "TensorFlow", "Rasa", "WebRTC", "Redis"],
      category: "Conversational AI",
      status: "Development",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "MLOps Pipeline Automation",
      description: "End-to-end machine learning operations platform with automated model training, validation, deployment, and monitoring capabilities.",
      image: "⚙️",
      technologies: ["Kubernetes", "MLflow", "Airflow", "Prometheus", "Grafana"],
      category: "MLOps",
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Recommendation Engine",
      description: "Scalable recommendation system using collaborative filtering and deep learning. Handles millions of users with sub-second response times.",
      image: "🎯",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Cassandra", "Kafka"],
      category: "Recommendation Systems",
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
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
