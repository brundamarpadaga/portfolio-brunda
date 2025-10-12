import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Brunda Marpadaga</h3>
            <p className="text-sm text-primary-foreground/80">
              Embedded Firmware Engineer | Portland, OR
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/brundamarpadaga/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/brundamarpadaga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:brunda@pdx.edu"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Brunda Marpadaga</p>
            <p>Built with passion for embedded systems</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
