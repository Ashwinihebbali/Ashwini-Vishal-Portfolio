import { Brain, Cloud, Code, Database, Layers, Terminal, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Core expertise",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision (YOLOv8, CNNs)", "Grad-CAM & Explainability"],
  },
  {
    icon: Layers,
    title: "LLM & Generative AI",
    description: "Cutting-edge",
    skills: ["Fine-tuning with QLoRA", "Prompt Engineering", "Chain-of-Thought", "RAG Systems"],
  },
  {
    icon: Code,
    title: "Development",
    description: "Full-stack capable",
    skills: ["Python", "React & TypeScript", "Flask/FastAPI", "Git & Version Control"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data pipelines",
    skills: ["Pandas & NumPy", "SQL & MongoDB", "EDA & Preprocessing", "Feature Engineering"],
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud",
    description: "Production systems",
    skills: ["AWS (SageMaker, S3, EC2)", "Docker", "MLflow", "Vertex AI"],
  },
  {
    icon: Terminal,
    title: "Languages",
    description: "Programming",
    skills: ["Python", "JavaScript/TypeScript", "SQL", "C/C++"],
  },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="py-6 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Skills for building scalable AI systems
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

        {/* Skills horizontal scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 transition-all duration-300 animate-fade-in-up group flex-shrink-0 w-[280px] snap-start hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground/60 font-medium">{category.description}</p>
                </div>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-bold bg-primary/10 text-primary border border-primary/20 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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

export default Skills;