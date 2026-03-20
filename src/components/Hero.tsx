import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Content - Left side */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-primary font-medium">Open to Opportunities</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
                <span className="block text-foreground mb-2">Hi, I'm</span>
                <span className="gradient-text">Ashwini Vishal</span>
              </h1>

              {/* Location badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-in-up delay-100">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-base">India</span>
                </div>
              </div>

              {/* Value proposition */}
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed animate-fade-in-up delay-200">
                Building production-ready AI systems with expertise in <span className="text-foreground font-medium">deep learning</span>, 
                <span className="text-foreground font-medium"> computer vision</span>, and <span className="text-foreground font-medium">NLP</span>. 
                Passionate about solving complex problems at scale.
              </p>

              {/* Key metrics */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 animate-fade-in-up delay-300 glass-card rounded-2xl p-4 w-fit">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Patent Filed</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">AI Projects</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
                <a
                  href={`${import.meta.env.BASE_URL}Ashwini Vishal Hebbali.pdf`}
                  download="Ashwini Vishal Hebbali.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:bg-primary/90 h-11 px-8"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <Button variant="outline" size="lg" onClick={scrollToContact} className="border-primary/50 hover:bg-primary/10">
                  Let's Talk
                </Button>
              </div>
            </div>

            {/* Profile Photo - Right side */}
            <div className="flex-shrink-0 animate-fade-in-up order-1 lg:order-2">
              <div className="relative">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/30 rounded-full blur-3xl animate-glow-pulse" />
                
                {/* Photo container with neon border */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden neon-border">
                  <img 
                    src={profilePhoto} 
                    alt="Ashwini Vishal Hebbali" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 px-4 py-2 bg-card border border-primary/50 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">AI/ML Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="p-3 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
