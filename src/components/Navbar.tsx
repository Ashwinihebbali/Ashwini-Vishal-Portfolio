import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id).filter(id => id !== "home");
      const scrollPosition = window.scrollY + 100;

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find current section
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, id: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); scrollToSection("#", "home"); }}>
            <span className="font-bold text-xl">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">AVH</span>
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href, link.id)}
                className={`px-4 py-2 text-sm transition-colors font-medium ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="glow"
              size="sm"
              onClick={() => scrollToSection("#contact", "contact")}
              className="ml-4"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href, link.id)}
                  className={`transition-colors py-3 text-left px-2 hover:bg-secondary/50 rounded-lg ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="glow"
                size="sm"
                onClick={() => scrollToSection("#contact", "contact")}
                className="mt-4"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
