import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Globe, BookOpen, Database, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: Code,
      skills: ["Python", "SQL", "JavaScript (Basic)"]
    },
    {
      title: "AI / Machine Learning",
      icon: Brain,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Speech-to-Text (Whisper / Faster-Whisper)",
        "Text-to-Speech (Edge TTS)",
        "LangChain",
        "LLM Integration"
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        "Flask",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "Frontend–Backend Integration"
      ]
    },
    {
      title: "Web Scraping & Automation",
      icon: BookOpen,
      skills: [
        "Selenium",
        "Playwright (Python)",
        "BeautifulSoup",
        "Requests",
        "ScrapingDog",
        "ScrapingBee"
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        "MySQL",
        "SQLite",
        "PostgreSQL (Basic)",
        "Git",
        "GitHub",
        "Linux (Basic)"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Problem Solving",
        "Analytical Thinking",
        "Communication",
        "Team Collaboration",
        "Attention to Detail"
      ]
    }
  ];

  const tools = [
    "VS Code",
    "PyCharm",
    "Jupyter Lab",
    "Google Colab",
    "Kaggle",
    "GitHub",
    "GitLab",
    "Postman",
    "Chrome DevTools"
  ];


  return (
    <section id="skills" className="py-20 bg-background border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-wider uppercase mb-2">My Expertise</p>
          <h2 className="text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-none shadow-card hover:shadow-hover transition-all duration-300 rounded-xl relative overflow-hidden group">
               {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 to-primary/10 group-hover:bg-primary transition-colors duration-300"></div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <category.icon className="h-6 w-6" />
                   </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-background-tertiary text-foreground-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 px-3 py-1 rounded-md text-sm font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;