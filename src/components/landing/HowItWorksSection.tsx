import { ClipboardCheck, Route, LineChart, RefreshCcw, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Initial Assessment",
      description: "Complete a quick questionnaire about your goals, current skills, available time, and preferred learning style.",
    },
    {
      number: "02",
      icon: Route,
      title: "Path Generation",
      description: "Our AI engine creates a personalized roadmap with curated modules, estimated timelines, and skill milestones.",
    },
    {
      number: "03",
      icon: LineChart,
      title: "Progress Tracking",
      description: "Track your advancement with detailed analytics, quiz scores, and skill mastery indicators in real-time.",
    },
    {
      number: "04",
      icon: RefreshCcw,
      title: "Continuous Adaptation",
      description: "The system learns from your performance and adjusts difficulty, pacing, and content recommendations.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From assessment to mastery in four intelligent steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Card */}
                  <div className="glass-card p-6 h-full group hover:border-primary/30 transition-colors">
                    {/* Number Badge */}
                    <div className="relative mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10 relative">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 w-12 h-12 rounded-full bg-primary/30 blur-lg animate-glow-pulse" />
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-24 z-20">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
