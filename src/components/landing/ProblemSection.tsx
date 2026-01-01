import { AlertTriangle, X, Clock, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: X,
      title: "No Personalization",
      description: "Generic courses ignore your unique background, goals, and learning style.",
      stat: "67%",
      statLabel: "feel courses don't match their level",
    },
    {
      icon: Clock,
      title: "Fixed Learning Paths",
      description: "Rigid curricula can't adapt when you struggle or excel in specific areas.",
      stat: "73%",
      statLabel: "waste time on known topics",
    },
    {
      icon: AlertTriangle,
      title: "Time Blindness",
      description: "Platforms ignore your schedule, leading to burnout or abandoned courses.",
      stat: "45%",
      statLabel: "quit due to time constraints",
    },
    {
      icon: TrendingDown,
      title: "No Adaptation",
      description: "Without feedback loops, skill gaps widen and motivation drops.",
      stat: "82%",
      statLabel: "of online courses go unfinished",
    },
  ];

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-destructive/10 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>The Learning Crisis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Most Online Learners Fail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Random tutorial hopping leads to confusion, skill gaps, low motivation, and high dropout rates. 
            Here's why traditional platforms fall short.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-6 group hover:border-destructive/30 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
              <div className="pt-4 border-t border-border/50">
                <div className="text-2xl font-bold text-destructive">{problem.stat}</div>
                <div className="text-xs text-muted-foreground">{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
