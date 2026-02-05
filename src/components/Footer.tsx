import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
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
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Imad AI Engineer
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-4">
              Building intelligent systems that solve real-world problems.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-background-secondary rounded-lg flex items-center justify-center text-foreground-muted hover:text-primary hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground font-semibold mb-3">{category}</h4>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground-muted text-xs">
            © {currentYear} Imad Portfolio.
          </div>
          
          <div className="flex items-center gap-1 text-foreground-muted text-xs">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;