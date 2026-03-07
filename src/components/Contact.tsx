import { Mail, Linkedin, Github, Send, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-6 px-4 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Open to full-time opportunities, internships, and collaborations in AI/ML.
            Let's build something impactful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Reach Out</h3>
              <p className="text-foreground/70 leading-relaxed text-base font-medium">
                I'm actively seeking roles at innovative companies working on challenging 
                AI/ML problems. Whether you're from a FAANG company or a promising startup, 
                I'd love to hear about your team.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:ashwinihebbali068@gmail.com"
                className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 group hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-base">Email</p>
                  <p className="text-sm text-foreground/60 font-medium">ashwinihebbali068@gmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/ashwini-vishal-hebbali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 group hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-base">LinkedIn</p>
                  <p className="text-sm text-foreground/60 font-medium">/in/ashwini-vishal-hebbali</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/Ashwinihebbali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 group hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-base">GitHub</p>
                  <p className="text-sm text-foreground/60 font-medium">@Ashwinihebbali</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/60 font-medium">
                <span className="text-foreground font-bold">Response time:</span> Usually within 24 hours
              </span>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5 glass-card rounded-2xl p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground text-foreground"
                placeholder="recruiter@company.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground text-foreground"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <Button type="submit" variant="glow" size="lg" className="w-full gap-2" disabled={isSubmitting}>
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
