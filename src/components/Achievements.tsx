import { ExternalLink, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import patentCeremony from "@/assets/achievements/patent-ceremony.png";
import academicExcellence from "@/assets/achievements/academic-excellence.jpg";
import aiProjects from "@/assets/achievements/ai-projects.jpg";
import opensource from "@/assets/achievements/opensource.jpg";
import magazineArticle from "@/assets/achievements/magazine-article.jpg";

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  image: string;
  imagePosition?: string;
  link?: string;
  type: "achievement" | "certification" | "award";
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Patent Filed - Solar Self-Charging Smart Backpack",
    organization: "Indian Patent Office",
    description: "Indian Patent Application for sustainable energy-harvesting solution with foldable solar panels & MPPT optimization for charging devices on-the-go.",
    tags: ["Innovation", "Hardware", "Sustainability"],
    image: patentCeremony,
    imagePosition: "object-center",
    type: "award",
  },
  {
    id: 2,
    title: "Article Published - Department Magazine",
    organization: "Dept. of CSE (AI)",
    description: "Published technical article 'Vimaash The Bot' in the department magazine, showcasing an AI-powered Telegram bot integrated with Gmail and Google Calendar.",
    tags: ["Technical Writing", "AI", "n8n"],
    image: magazineArticle,
    imagePosition: "object-top",
    type: "achievement",
  },
  {
    id: 3,
    title: "5+ AI/ML Projects Delivered",
    organization: "Personal & Academic Projects",
    description: "Built and deployed production-ready AI systems including sentiment analysis, computer vision applications, and ML prediction models.",
    tags: ["Machine Learning", "Deep Learning", "Production"],
    image: aiProjects,
    imagePosition: "object-center",
    type: "achievement",
  },
  {
    id: 4,
    title: "Academic Excellence - Top 10%",
    organization: "University (VTU)",
    description: "Top performer in Machine Learning, Data Structures, and Algorithms coursework with consistent high performance throughout the program.",
    tags: ["DSA", "Algorithms", "Machine Learning"],
    image: academicExcellence,
    imagePosition: "object-top",
    type: "achievement",
  },
  {
    id: 5,
    title: "Open Source Contributor",
    organization: "GitHub",
    description: "Active contributor and maintainer of ML learning resources with comprehensive guides and implementations of 10+ algorithms.",
    tags: ["Open Source", "Python", "ML Algorithms"],
    image: opensource,
    imagePosition: "object-center",
    type: "achievement",
  },
];

const Achievements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="achievements" className="py-6 px-4 relative bg-card/30">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">TRACK RECORD</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstrating impact through innovation, delivery, and continuous learning
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

        {/* Achievements horizontal scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="glass-card rounded-xl group transition-all duration-300 animate-fade-in-up flex flex-col flex-shrink-0 w-[320px] snap-start hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setExpandedId(expandedId === achievement.id ? null : achievement.id)}
            >
              {/* Image */}
              <div className="h-44 relative overflow-hidden rounded-t-lg">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className={`w-full h-full object-cover ${achievement.imagePosition || 'object-center'} transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-primary/80 font-semibold mb-2">{achievement.organization}</p>
                <p className={`text-sm text-foreground/60 leading-relaxed mb-3 flex-1 font-medium transition-all duration-300 ${expandedId === achievement.id ? '' : 'line-clamp-3'}`}>
                  {achievement.description}
                </p>

                {/* Expand indicator */}
                <button className="flex items-center gap-1 text-xs text-primary/70 font-bold mb-2 hover:text-primary transition-colors">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedId === achievement.id ? 'rotate-180' : ''}`} />
                  {expandedId === achievement.id ? 'Show less' : 'Read more'}
                </button>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {achievement.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-bold bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details <ExternalLink className="w-3 h-3" />
                  </a>
                )}
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

export default Achievements;
