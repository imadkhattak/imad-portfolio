import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
    title: "AI/ML Intern",
    company: "Resolve, NSTP Islamabad",
    location: "Islamabad, PK",
    period: "July 2025 - August 2025",
    type: "Internship",
    description: "Built a SQL-based Question Answering System using LLMs (LLaMA 3, Mistral) to retrieve insights from structured databases. Designed two pipelines: a simple chain-based Q&A and a multi-step SQL Agent leveraging LangChain.",
    achievements: [
      "Developed SQL-based Question Answering System with LLMs (LLaMA 3, Mistral)",
      "Designed and implemented simple chain-based Q&A and SQL Agent pipelines",
      "Integrated LangChain with MySQL for secure multi-query reasoning workflows"
    ],
    technologies: ["Python", "LangChain", "LLaMA", "Mistral", "MySQL", "Flask"]
  },
  {
    title: "Automation Engineer Intern",
    company: "Algorithm",
    location: "Peshawar, PK",
    period: "June 2025 - August 2025",
    type: "Internship",
    description: "Automated document processing workflows using n8n and OCR with LLMs for structured data extraction and CRM integration.",
    achievements: [
      "Built automated document pipelines using n8n and OCR.space API",
      "Integrated Google Gemini for text parsing and information extraction",
      "Connected workflows with Monday.com CRM for auto record creation",
      "Implemented schema validation and structured output parsing for reliability"
    ],
    technologies: ["Python", "n8n", "OCR.space API", "Google Gemini", "Monday.com"]
  },
  {
    title: "AI/ML Intern",
    company: "Bave Technologies",
    location: "Peshawar, PK",
    period: "Sep 2024 - Oct 2024",
    type: "Internship",
    description: "Developed robust web scraping pipelines and automated data workflows for consulting projects.",
    achievements: [
      "Built web scraping pipelines using Selenium, Requests, and BeautifulSoup",
      "Automated data collection workflows for efficiency",
      "Cleaned and stored structured data into CSV formats"
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Requests", "CSV"]
  }

  ];

  const education = [
   {
  degree: "Bachelor of Science in Data Science",
  school: "Institute of Management Sciences (IMSciences)",
  location: "Peshawar, Pakistan",
  period: "Sep 2021 – June 2025",
  gpa: "3.10/4.0",
  thesis: "Voice-to-Voice Bot for Shopping Mall Information Retrieval (Final Year Project)",
  coursework: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Database Systems", "Data Visualization"]
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