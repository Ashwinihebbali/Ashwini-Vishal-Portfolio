import { Github, Eye, LineChart, BookOpen, Brain, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const projects = [
  {
    title: "AI-Powered Sentiment Analysis Platform",
    description: "Real-time emotion analysis from text and facial expressions for e-consultation comments. Features browser-based NLP processing for privacy, webcam emotion detection with Gemini Vision AI, and interactive dashboards.",
    tags: ["React", "TypeScript", "Supabase", "Gemini AI", "HuggingFace", "WebML"],
    icon: Brain,
    impact: "Real-time multi-modal analysis with privacy-first architecture",
    metrics: [
      { label: "Processing", value: "Real-time" },
      { label: "Modalities", value: "2+" },
    ],
    github: "https://github.com/Ashwinihebbali/insight-whisperer-49",
    demo: "https://nsight-whisperer-49.onrender.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    featured: true,
  },
  {
    title: "House Rent Prediction System",
    description: "ML-powered housing price prediction using ensemble methods. Features comprehensive data preprocessing, model comparison (Random Forest, XGBoost, Linear Regression), and a production Streamlit interface.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Pandas", "XGBoost"],
    icon: LineChart,
    impact: "Accurate predictions helping users make informed decisions",
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Models", value: "3+" },
    ],
    github: "https://github.com/Ashwinihebbali/house-rent-prediction",
    demo: "https://ashwinihebbali-house-rent-prediction-app-train-test-yghgvh.streamlit.app/",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    featured: true,
  },
  {
    title: "ML Complete Learning Repository",
    description: "Comprehensive machine learning curriculum covering data preprocessing, EDA, feature engineering, and 10+ algorithm implementations. From fundamentals to advanced concepts with hands-on code.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
    icon: BookOpen,
    impact: "Open-source educational resource for ML practitioners",
    metrics: [
      { label: "Algorithms", value: "10+" },
      { label: "Topics", value: "Complete" },
    ],
    github: "https://github.com/Ashwinihebbali/Machine-Learning-Complete-Learning-Path",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-6 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI solutions demonstrating technical depth and impact
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

        {/* Projects horizontal scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group glass-card rounded-2xl transition-all duration-500 animate-fade-in-up flex-shrink-0 w-[360px] snap-start hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative h-40 overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Metrics overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg border border-border/50">
                      <span className="text-xs text-foreground/60 font-medium">{metric.label}: </span>
                      <span className="text-xs font-bold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Impact statement */}
                <p className="text-sm text-primary/80 mb-2 font-semibold line-clamp-1">
                  💡 {project.impact}
                </p>
                
                {/* Description */}
                <p className="text-foreground/60 mb-3 text-sm leading-relaxed line-clamp-3 font-medium">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-bold font-mono bg-secondary rounded text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-1 border-border hover:border-primary/50 text-xs h-8" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="gap-1 text-primary hover:bg-primary/10 text-xs h-8" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-3 h-3" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll indicator */}
        <p className="text-center text-muted-foreground text-xs mt-4">
          ← Scroll to see more →
        </p>

        {/* View more link */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/Ashwinihebbali" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;