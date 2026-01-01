import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Target, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/20 via-accent/10 to-transparent blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Learning Paths</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform Random Learning Into{" "}
            <span className="gradient-text">Structured Success</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Generate personalized, adaptive learning roadmaps based on your goals, skills, and schedule. 
            Let AI guide your journey from beginner to expert.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/signup">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Learning Paths</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">94%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -top-8 left-0 md:left-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="glass-card p-4 flex items-center gap-3 float">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">AI Analysis</div>
                <div className="text-xs text-muted-foreground">Adapts to your pace</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 right-0 md:right-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card p-4 flex items-center gap-3 float" style={{ animationDelay: "2s" }}>
              <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Goal Tracking</div>
                <div className="text-xs text-muted-foreground">Stay on target</div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 right-0 md:right-20 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="glass-card p-4 flex items-center gap-3 float" style={{ animationDelay: "4s" }}>
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Time Optimized</div>
                <div className="text-xs text-muted-foreground">Fits your schedule</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="glass-card p-2 rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted/60 rounded w-1/2" />
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mt-4" />
                </div>
                <div className="space-y-3">
                  <div className="h-24 bg-muted/40 rounded-lg" />
                  <div className="h-16 bg-primary/10 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
