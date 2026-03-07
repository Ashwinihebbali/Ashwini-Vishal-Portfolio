import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">AVH</span>
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:ashwinihebbali068@gmail.com"
              className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashwini-vishal-hebbali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Ashwinihebbali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashwini Vishal Hebbali
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
