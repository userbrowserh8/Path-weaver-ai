import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, ArrowLeft, Lock, CheckCircle2, Play, 
  Clock, Star, ChevronRight, RotateCcw, SkipForward
} from "lucide-react";

const LearningPath = () => {
  const modules = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Master the core concepts of JavaScript",
      duration: "8 hours",
      difficulty: "Beginner",
      status: "completed",
      progress: 100,
      topics: ["Variables & Types", "Functions", "Objects", "Arrays", "DOM"],
    },
    {
      id: 2,
      title: "React Basics",
      description: "Build interactive UIs with React",
      duration: "10 hours",
      difficulty: "Beginner",
      status: "active",
      progress: 75,
      topics: ["Components", "Props", "State", "Hooks", "Events"],
    },
    {
      id: 3,
      title: "State Management",
      description: "Handle complex state with Context and Redux",
      duration: "6 hours",
      difficulty: "Intermediate",
      status: "upcoming",
      progress: 0,
      topics: ["Context API", "useReducer", "Redux Toolkit", "RTK Query"],
    },
    {
      id: 4,
      title: "API Integration",
      description: "Connect your apps to backend services",
      duration: "5 hours",
      difficulty: "Intermediate",
      status: "locked",
      progress: 0,
      topics: ["Fetch API", "Axios", "REST", "Error Handling", "Caching"],
    },
    {
      id: 5,
      title: "TypeScript Essentials",
      description: "Add type safety to your JavaScript",
      duration: "7 hours",
      difficulty: "Intermediate",
      status: "locked",
      progress: 0,
      topics: ["Types", "Interfaces", "Generics", "Type Guards", "Utility Types"],
    },
    {
      id: 6,
      title: "Testing & Quality",
      description: "Write reliable, maintainable code",
      duration: "6 hours",
      difficulty: "Advanced",
      status: "locked",
      progress: 0,
      topics: ["Jest", "React Testing Library", "E2E Testing", "CI/CD"],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-success" />;
      case "active":
        return <Play className="w-6 h-6 text-primary" />;
      case "upcoming":
        return <Star className="w-6 h-6 text-warning" />;
      default:
        return <Lock className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-success/30 bg-success/5";
      case "active":
        return "border-primary/30 bg-primary/5";
      case "upcoming":
        return "border-warning/30 bg-warning/5";
      default:
        return "border-border bg-muted/30 opacity-60";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Your Learning Path</h1>
                <p className="text-sm text-muted-foreground">Full-Stack Developer Roadmap</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium text-foreground">34% Complete</div>
                <div className="text-xs text-muted-foreground">Est. 8 weeks remaining</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">34</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success via-primary to-muted" />

          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`relative pl-16 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline node */}
                <div className={`absolute left-3 w-7 h-7 rounded-full flex items-center justify-center bg-background border-2 ${
                  module.status === "completed"
                    ? "border-success"
                    : module.status === "active"
                    ? "border-primary"
                    : module.status === "upcoming"
                    ? "border-warning"
                    : "border-muted"
                }`}>
                  {getStatusIcon(module.status)}
                </div>

                {/* Module Card */}
                <div className={`glass-card p-6 ${getStatusColor(module.status)} transition-all hover:shadow-lg`}>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          module.status === "completed"
                            ? "bg-success/20 text-success"
                            : module.status === "active"
                            ? "bg-primary/20 text-primary"
                            : module.status === "upcoming"
                            ? "bg-warning/20 text-warning"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {module.status === "locked" ? "Locked" : module.status}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {module.duration}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {module.difficulty}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {module.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress & Actions */}
                    <div className="lg:w-48 space-y-3">
                      {module.status !== "locked" && (
                        <>
                          <Progress value={module.progress} className="h-2" />
                          <div className="text-xs text-muted-foreground text-center">
                            {module.progress}% complete
                          </div>
                        </>
                      )}

                      <div className="flex gap-2">
                        {module.status === "completed" && (
                          <Button variant="outline" size="sm" className="flex-1">
                            <RotateCcw className="w-4 h-4 mr-1" />
                            Revise
                          </Button>
                        )}
                        {module.status === "active" && (
                          <Button variant="hero" size="sm" className="flex-1">
                            Continue
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        )}
                        {module.status === "upcoming" && (
                          <>
                            <Button variant="hero" size="sm" className="flex-1">
                              Start
                            </Button>
                            <Button variant="outline" size="sm">
                              <SkipForward className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        {module.status === "locked" && (
                          <Button variant="muted" size="sm" className="flex-1" disabled>
                            <Lock className="w-4 h-4 mr-1" />
                            Complete previous
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningPath;
