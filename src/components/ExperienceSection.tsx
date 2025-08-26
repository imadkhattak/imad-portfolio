import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading the development of next-generation AI products and managing a team of machine learning engineers. Responsible for architecting scalable ML systems and driving innovation in computer vision and NLP domains.",
      achievements: [
        "Built a computer vision system that increased accuracy by 35%",
        "Led a team of 6 engineers in developing enterprise AI solutions",
        "Reduced model inference time by 60% through optimization techniques",
        "Published 3 research papers on advanced ML architectures"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Kubernetes", "AWS", "MLflow"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataMind Analytics",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and deployed machine learning models for predictive analytics and recommendation systems. Collaborated with cross-functional teams to integrate AI solutions into existing business processes.",
      achievements: [
        "Implemented recommendation engine serving 10M+ daily users",
        "Improved customer retention by 25% through predictive modeling",
        "Automated data pipeline processing 1TB+ daily data",
        "Mentored 4 junior developers in ML best practices"
      ],
      technologies: ["Python", "Scikit-learn", "Apache Spark", "Docker", "GCP", "PostgreSQL"]
    },
    {
      title: "AI Research Intern",
      company: "Innovation Labs",
      location: "Boston, MA",
      period: "2019 - 2020",
      type: "Internship",
      description: "Conducted research on deep learning applications in natural language processing. Contributed to open-source projects and presented findings at international conferences.",
      achievements: [
        "Developed novel attention mechanism for text classification",
        "Achieved state-of-the-art results on 3 benchmark datasets",
        "Presented research at NeurIPS 2020",
        "Open-sourced code adopted by 500+ researchers"
      ],
      technologies: ["Python", "PyTorch", "Transformers", "CUDA", "Linux", "Git"]
    },
    {
      title: "Software Developer",
      company: "StartupTech",
      location: "Remote",
      period: "2018 - 2019",
      type: "Freelance",
      description: "Built web applications and integrated machine learning models for various startups. Gained experience in full-stack development and deployment of AI-powered applications.",
      achievements: [
        "Delivered 8 successful projects for different clients",
        "Integrated ML models into production web applications",
        "Reduced development time by 40% through code reusability",
        "Maintained 99.9% uptime for critical applications"
      ],
      technologies: ["JavaScript", "React", "Node.js", "Python", "MongoDB", "AWS"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.9/4.0",
      thesis: "Deep Reinforcement Learning for Autonomous Systems",
      coursework: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Robotics"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "MIT",
      location: "Cambridge, MA",
      period: "2013 - 2017",
      gpa: "3.8/4.0",
      thesis: "Optimization Algorithms for Large-Scale Data Processing",
      coursework: ["Algorithms", "Data Structures", "Statistics", "Linear Algebra", "Software Engineering"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A journey of continuous growth and impactful contributions in the field of artificial intelligence
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-[1.02] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm text-foreground-muted">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="w-fit border-border-light text-foreground-subtle">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs bg-background-tertiary text-foreground-muted"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Description & Achievements */}
                    <div className="lg:col-span-2 space-y-4">
                      <p className="text-foreground-muted leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <p className="text-sm font-medium text-foreground mb-3">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className="flex items-start gap-3 text-sm text-foreground-muted"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                      <div>
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Thesis:</p>
                      <p className="text-sm text-foreground-muted italic">{edu.thesis}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex} 
                            variant="outline" 
                            className="text-xs border-border-light text-foreground-subtle"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;