import { Award, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const certifications = [
  {
    title: "AI For Everyone",
    issuer: "Coursera (DeepLearning.AI)",
    link: "https://www.coursera.org/account/accomplishments/verify/AI-FOR-EVERYONE",
    skills: ["AI Strategy", "Machine Learning Basics", "AI Workflow"],
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Coursera (IBM)",
    link: "https://www.coursera.org/account/accomplishments/verify/CLOUD-COMPUTING",
    skills: ["Cloud Architecture", "AWS/GCP/Azure", "Deployment"],
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    link: "https://www.credly.com/badges/ai-fundamentals",
    skills: ["Neural Networks", "Deep Learning", "AI Applications"],
  },
  {
    title: "Statistics For Data Science",
    issuer: "Coursera (IBM)",
    link: "https://www.coursera.org/account/accomplishments/verify/STATISTICS-DS",
    skills: ["Statistical Analysis", "Hypothesis Testing", "Data Interpretation"],
  },
];

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-6 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">CREDENTIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized credentials in AI, cloud, and data science
          </p>
        </div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full glass-card hover:border-primary/50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full glass-card hover:border-primary/50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Certifications horizontal scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-xl glass-card transition-all duration-300 animate-fade-in-up flex-shrink-0 w-[300px] snap-start hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-base">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-primary/80 mb-3 font-semibold">
                    {cert.issuer}
                  </p>
                  
                  {/* Skills covered */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 bg-secondary rounded-md text-foreground/70"
                      >
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <p className="text-center text-muted-foreground text-xs mt-4">
          ← Scroll to see more →
        </p>
      </div>
    </section>
  );
};

export default Certifications;