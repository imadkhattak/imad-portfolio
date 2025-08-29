import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenCV", level: 85 },
        { name: "Transformers", level: 87 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "📊",
      skills: [
        { name: "SQL", level: 93 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 94 },
        { name: "Jupyter", level: 90 },
        { name: "Apache Spark", level: 78 },
        { name: "Power BI", level: 82 }
      ]
    },
    {
      title: "Development",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 87 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 83 },
        { name: "FastAPI", level: 88 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 92 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "MLflow", level: 80 },
        { name: "CI/CD", level: 78 },
        { name: "Terraform", level: 72 }
      ]
    }
  ];

  const certifications = [
    "AI Engineering IBM- Specialty",
    "Applied Data Science - World Quant University",
    "Machine Learning (Coursera)"
  ];

  const tools = [
    "VS Code", "PyCharm", "Jupyter Lab", "Google Colab", "Kaggle",
    "GitHub", "GitLab", "Slack"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-foreground-muted text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-background-tertiary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="bg-gradient-card border-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <span className="text-2xl">🏆</span>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-background-tertiary hover:bg-hover transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground-muted">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="bg-gradient-card border-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <span className="text-2xl">🛠️</span>
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-background-tertiary text-foreground-muted hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;