import { GraduationCap, Briefcase, Trophy, Users, Target, Code2, Zap, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.E. in CSE-AI",
    detail: "B.E. in CSE-AI",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "5+ ML Projects",
    detail: "Production-Ready Apps",
  },
  {
    icon: Trophy,
    title: "Innovation",
    description: "Patent Holder",
    detail: "Solar Smart Backpack",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Tech Mentor",
    detail: "Workshop Conductor",
  },
];

const techStack = [
  { name: "Python", category: "lang" },
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "React", category: "web" },
  { name: "TypeScript", category: "lang" },
  { name: "FastAPI", category: "web" },
  { name: "Docker", category: "devops" },
  { name: "PostgreSQL", category: "db" },
];

const expertise = [
  {
    icon: Brain,
    title: "ML/AI Development",
    items: ["Deep Learning", "NLP & Transformers", "Computer Vision", "LLM Fine-tuning"]
  },
  {
    icon: Rocket,
    title: "Full-Stack & Deployment",
    items: ["React/TypeScript", "FastAPI/Flask", "Cloud Platforms", "MLOps Practices"]
  },
  {
    icon: Zap,
    title: "Specialized Skills",
    items: ["Model Optimization", "Explainable AI", "Prompt Engineering", "System Design"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-6 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-sm tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            WHO I AM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* About text - takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main intro */}
            <div className="premium-card p-6 rounded-2xl">
              <p className="text-xl text-foreground/80 leading-relaxed mb-4 font-medium">
              I'm a <span className="text-primary font-bold">Final Year B.E. Student</span> in 
                Computer Science & Artificial Intelligence, 
                graduating in <span className="text-foreground font-bold">April 2027</span>.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                My expertise spans <span className="text-foreground font-bold">machine learning model development</span>,{" "}
                <span className="text-foreground font-bold">LLM fine-tuning</span>, and{" "}
                <span className="text-foreground font-bold">full-stack web development</span>. I've built 5+ production-ready 
                ML/AI applications with a focus on NLP, computer vision, and generative AI—optimizing model inference 
                latency by <span className="text-primary font-bold">40%</span> through efficient architecture design.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {expertise.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="premium-card p-4 rounded-xl hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <exp.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="font-bold text-base text-foreground">{exp.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.items.map((item) => (
                      <li key={item} className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* What I bring section */}
            <div className="pt-4 border-t border-border/30">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                What I Bring to the Table
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground/70">
                  <Code2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium">
                    <span className="text-foreground font-bold">Strong CS Fundamentals:</span>{" "}
                    DSA, System Design, Database Systems, Cloud Computing
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/70">
                  <Code2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium">
                    <span className="text-foreground font-bold">End-to-End ML Expertise:</span>{" "}
                    From research & experimentation to production deployment with CI/CD
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/70">
                  <Code2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium">
                    <span className="text-foreground font-bold">Knowledge Sharing:</span>{" "}
                    Conducted workshops on Python, AI Agents, RAG & LLMs for peers
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech) => (
                <span 
                  key={tech.name}
                  className="px-3 py-1.5 text-sm font-bold font-mono bg-primary/5 text-primary border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Info cards grid - takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((card, index) => (
                <div
                  key={card.title}
                  className="premium-card p-5 rounded-xl hover-lift group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-3">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{card.title}</h3>
                  <p className="text-primary font-bold text-base">{card.description}</p>
                  <p className="text-sm text-foreground/60 mt-1 font-medium">{card.detail}</p>
                </div>
              ))}
            </div>

            {/* Academic highlights */}
            <div className="premium-card p-5 rounded-xl">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                Academic Highlights
              </h4>
               <div className="space-y-3">
                <div className="flex justify-between items-center text-base">
                  <span className="text-foreground/70 font-medium">SSLC (10th)</span>
                  <span className="text-primary font-bold text-lg">96%</span>
                </div>
                <div className="flex justify-between items-center text-base">
                  <span className="text-foreground/70 font-medium">PUC (12th)</span>
                  <span className="text-primary font-bold text-lg">89%</span>
                </div>
              </div>
            </div>

            {/* Relevant coursework */}
            <div className="premium-card p-5 rounded-xl">
              <h4 className="font-bold text-foreground mb-3 text-base">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "DSA", "Cloud Computing"].map((course) => (
                  <span 
                    key={course}
                    className="px-2.5 py-1 text-sm font-medium bg-secondary/50 text-foreground/70 rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
