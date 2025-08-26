import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code2, 
  Database, 
  Zap, 
  Target, 
  Users, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Custom AI models and intelligent systems tailored to your business needs. From concept to deployment, I deliver cutting-edge solutions that drive real results.",
      features: [
        "Custom ML model development",
        "Computer vision systems",
        "Natural language processing",
        "Predictive analytics",
        "Deep learning architectures"
      ],
      pricing: "Starting at $5,000",
      deliveryTime: "4-8 weeks",
      popular: true
    },
    {
      icon: Code2,
      title: "AI Application Development",
      description: "Full-stack development of AI-powered applications with modern web technologies. Scalable, secure, and user-friendly solutions.",
      features: [
        "Web application development",
        "API design & integration",
        "Database architecture",
        "Cloud deployment",
        "Performance optimization"
      ],
      pricing: "Starting at $3,000",
      deliveryTime: "3-6 weeks",
      popular: false
    },
    {
      icon: Database,
      title: "Data Engineering & MLOps",
      description: "Robust data pipelines and MLOps infrastructure to ensure your AI systems are production-ready and scalable.",
      features: [
        "Data pipeline development",
        "Model deployment automation",
        "Monitoring & logging",
        "CI/CD for ML models",
        "Infrastructure as Code"
      ],
      pricing: "Starting at $4,000",
      deliveryTime: "2-4 weeks",
      popular: false
    },
    {
      icon: Zap,
      title: "AI Optimization & Performance",
      description: "Optimize existing AI systems for better performance, reduced costs, and improved accuracy. Get more from your current investments.",
      features: [
        "Model optimization",
        "Performance tuning",
        "Cost reduction strategies",
        "Accuracy improvements",
        "Scalability enhancements"
      ],
      pricing: "Starting at $2,500",
      deliveryTime: "2-3 weeks",
      popular: false
    },
    {
      icon: Target,
      title: "AI Strategy Consulting",
      description: "Strategic guidance on AI adoption, technology selection, and implementation roadmaps. Make informed decisions about your AI journey.",
      features: [
        "AI readiness assessment",
        "Technology recommendations",
        "Implementation roadmap",
        "ROI analysis",
        "Risk assessment"
      ],
      pricing: "Starting at $1,500",
      deliveryTime: "1-2 weeks",
      popular: false
    },
    {
      icon: Users,
      title: "Training & Workshops",
      description: "Comprehensive training programs for teams looking to upskill in AI and machine learning. From basics to advanced topics.",
      features: [
        "Custom training programs",
        "Hands-on workshops",
        "Team skill assessment",
        "Ongoing mentorship",
        "Certificate programs"
      ],
      pricing: "Starting at $2,000",
      deliveryTime: "1-4 weeks",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business needs, challenges, and objectives to define the perfect AI solution."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Developing a comprehensive roadmap with clear milestones, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Building and deploying your AI solution using best practices and cutting-edge technologies."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing and fine-tuning to ensure optimal performance and reliability."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Smooth deployment to production with ongoing support and maintenance services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Services & Solutions
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive AI services to transform your business with intelligent solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border-light hover:shadow-hover transform hover:scale-105 transition-all duration-300 relative overflow-hidden ${
                service.popular ? "ring-2 ring-primary/50" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-3 text-sm text-foreground-muted"
                    >
                      <CheckCircle className="h-4 w-4 text-accent-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 pt-4 border-t border-border-light">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-muted">Starting at</span>
                    <span className="text-lg font-bold text-primary">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-muted">Delivery</span>
                    <span className="text-sm font-medium text-foreground">{service.deliveryTime}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              My Development Process
            </h3>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery of your AI projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent-cyan"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-foreground-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-card border-border-light max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help you leverage artificial intelligence to achieve your goals. 
                Book a free consultation to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;