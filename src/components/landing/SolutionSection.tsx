import { Sparkles, Target, Zap, RefreshCw } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Driven Paths",
      description: "Tell us your destination—career switch, skill upgrade, or exam prep—and we'll map the fastest route.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Zap,
      title: "Time-Optimized Learning",
      description: "We fit learning into your life, not the other way around. Study 30 mins or 3 hours—we adapt.",
      gradient: "from-success to-primary",
    },
    {
      icon: Sparkles,
      title: "Smart AI Recommendations",
      description: "Our engine analyzes your progress and suggests revisions, pace changes, and next steps in real-time.",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: RefreshCw,
      title: "Automatic Adaptation",
      description: "Struggling? We'll reinforce weak areas. Flying through? We'll accelerate your path to mastery.",
      gradient: "from-warning to-primary",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[600px] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            AI That Learns How You Learn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent adaptive system continuously adjusts your learning path based on performance data 
            and AI-powered recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
