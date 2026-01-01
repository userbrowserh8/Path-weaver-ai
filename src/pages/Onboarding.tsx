import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, ArrowRight, ArrowLeft, Target, Briefcase, 
  GraduationCap, Code, LineChart, BookOpen, Video, 
  FileText, Puzzle, HelpCircle, Clock, Zap, Flame
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Step = "goals" | "skills" | "time" | "preferences";

interface Option {
  id: string;
  label: string;
  description?: string;
  icon: React.ElementType;
}

const Onboarding = () => {
  const [step, setStep] = useState<Step>("goals");
  const [selections, setSelections] = useState<Record<Step, string[]>>({
    goals: [],
    skills: [],
    time: [],
    preferences: [],
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const steps: Step[] = ["goals", "skills", "time", "preferences"];
  const currentIndex = steps.indexOf(step);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  const toggleSelection = (stepKey: Step, id: string, multiSelect: boolean = true) => {
    setSelections((prev) => {
      const current = prev[stepKey];
      if (multiSelect) {
        return {
          ...prev,
          [stepKey]: current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id],
        };
      }
      return {
        ...prev,
        [stepKey]: [id],
      };
    });
  };

  const goNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex]);
    } else {
      toast({
        title: "Learning path generated!",
        description: "Your personalized roadmap is ready.",
      });
      navigate("/dashboard");
    }
  };

  const goBack = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    }
  };

  const goalOptions: Option[] = [
    { id: "job", label: "Land a Job", description: "Get hired in tech", icon: Briefcase },
    { id: "career", label: "Career Switch", description: "Transition to a new field", icon: Target },
    { id: "skill", label: "Skill Improvement", description: "Level up existing skills", icon: LineChart },
    { id: "exam", label: "Exam Prep", description: "Pass certifications", icon: GraduationCap },
    { id: "freelance", label: "Freelancing", description: "Start earning as a freelancer", icon: Code },
  ];

  const skillOptions: Option[] = [
    { id: "beginner", label: "Beginner", description: "Just starting out", icon: BookOpen },
    { id: "intermediate", label: "Intermediate", description: "Some experience", icon: Puzzle },
    { id: "advanced", label: "Advanced", description: "Looking to master", icon: Zap },
  ];

  const timeOptions: Option[] = [
    { id: "casual", label: "Casual", description: "30 min/day, 2-3 days/week", icon: Clock },
    { id: "moderate", label: "Moderate", description: "1-2 hrs/day, 4-5 days/week", icon: Flame },
    { id: "intensive", label: "Intensive", description: "3+ hrs/day, 6-7 days/week", icon: Zap },
  ];

  const preferenceOptions: Option[] = [
    { id: "video", label: "Video Courses", description: "Watch and learn", icon: Video },
    { id: "text", label: "Reading", description: "Articles and docs", icon: FileText },
    { id: "projects", label: "Projects", description: "Learn by building", icon: Code },
    { id: "quizzes", label: "Quizzes", description: "Test your knowledge", icon: HelpCircle },
  ];

  const renderStep = () => {
    switch (step) {
      case "goals":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">What's your learning goal?</h2>
              <p className="text-muted-foreground">Select one or more goals that describe your objective</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goalOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection("goals", option.id)}
                  className={`glass-card p-6 text-left transition-all duration-200 hover:border-primary/50 ${
                    selections.goals.includes(option.id)
                      ? "border-primary bg-primary/10"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selections.goals.includes(option.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      <option.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">What's your current level?</h2>
              <p className="text-muted-foreground">This helps us tailor content to your experience</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skillOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection("skills", option.id, false)}
                  className={`glass-card p-6 text-center transition-all duration-200 hover:border-primary/50 ${
                    selections.skills.includes(option.id)
                      ? "border-primary bg-primary/10"
                      : ""
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    selections.skills.includes(option.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    <option.icon className="w-7 h-7" />
                  </div>
                  <div className="font-semibold text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case "time":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">How much time can you commit?</h2>
              <p className="text-muted-foreground">We'll optimize your path to fit your schedule</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {timeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection("time", option.id, false)}
                  className={`glass-card p-6 text-center transition-all duration-200 hover:border-primary/50 ${
                    selections.time.includes(option.id)
                      ? "border-primary bg-primary/10"
                      : ""
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                    selections.time.includes(option.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    <option.icon className="w-7 h-7" />
                  </div>
                  <div className="font-semibold text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case "preferences":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">How do you prefer to learn?</h2>
              <p className="text-muted-foreground">Select all formats you enjoy</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {preferenceOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleSelection("preferences", option.id)}
                  className={`glass-card p-6 text-center transition-all duration-200 hover:border-primary/50 ${
                    selections.preferences.includes(option.id)
                      ? "border-primary bg-primary/10"
                      : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                    selections.preferences.includes(option.id)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    <option.icon className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-foreground">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  const canProceed = selections[step].length > 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">LearnPath</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Step {currentIndex + 1} of {steps.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-card/50">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl animate-fade-in">
          {renderStep()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              variant="hero"
              onClick={goNext}
              disabled={!canProceed}
            >
              {currentIndex === steps.length - 1 ? (
                <>
                  Generate My Learning Path
                  <Sparkles className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Onboarding;
