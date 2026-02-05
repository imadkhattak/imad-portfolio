import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "K2X Tech",
      location: "Peshawar, PK",
      period: "September 2025 - Present",
      type: "Internship",
      description: "Working on AI-driven systems leveraging Large Language Models (LLMs), Ollama, and relational databases. Developing Python-based automation scripts and intelligent data workflows for production-level applications.",
      achievements: [
        "Implemented and optimized LLM-based applications using Ollama for local inference",
        "Developed Python scripts integrating LLMs with databases for dynamic data interaction",
        "Collaborated with the AI team to enhance multi-agent and RAG-based system architectures"
      ],
      technologies: ["Python", "Ollama", "LangChain", "MySQL", "LLMs", "Flask"]
    },
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



  return (
    <section id="experience" className="py-20 bg-background-secondary/30 border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-wider uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Vertical Line Container */}
          <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12 py-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    {/* Header: Type & Date */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-foreground-muted font-medium flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground-muted/50"></span>
                        {exp.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {exp.title}
                    </h3>

                    {/* Subtitle: Company & Location */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-6">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description/Achievements */}
                    <ul className="space-y-3">
                      <li className="text-foreground-muted leading-relaxed text-[15px]">
                          {exp.description}
                      </li>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground-muted leading-relaxed text-[15px]">
                           <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                           {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          


        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
