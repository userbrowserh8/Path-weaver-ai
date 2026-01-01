import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/20 via-accent/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="gradient-border p-[1px] rounded-3xl">
            <div className="bg-card rounded-3xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Start Your Journey Today</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of learners who've replaced chaos with clarity. 
                Generate your personalized roadmap in minutes—no credit card required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/signup">
                  <Button variant="gradient" size="xl" className="group">
                    <Zap className="w-5 h-5" />
                    Join Beta Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="heroOutline" size="xl">
                  <Mail className="w-5 h-5" />
                  Contact Team
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Explore API</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Integrate our adaptive learning engine into your own platform.
                </p>
                <a href="/api" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                  View Documentation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Request Demo</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  See how LearnPath can work for your team or institution.
                </p>
                <a href="/contact" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                  Schedule a Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
