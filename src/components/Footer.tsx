import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "AI Development", href: "#services" },
      { name: "Machine Learning", href: "#services" },
      { name: "Data Engineering", href: "#services" },
      { name: "Consulting", href: "#services" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "Newsletter", href: "#" }
    ]
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/imadkhattak"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:imad.works100@gmail.com"
    }
  ];

  return (
    <footer className="bg-background-tertiary border-t border-border-light">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Imad AI Engineer
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                Building the future with intelligent systems. Passionate AI Engineer dedicated to 
                creating innovative solutions that bridge cutting-edge research with real-world applications.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background-secondary rounded-lg flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/20 transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Stay Updated
              </h4>
              <p className="text-foreground-muted">
                Get the latest insights on AI trends, project updates, and industry best practices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background-secondary border border-border-light rounded-lg text-foreground placeholder-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground-muted text-sm">
            © {currentYear} Imad Portfolio. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-foreground-muted text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex gap-6 text-sm text-foreground-muted">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;