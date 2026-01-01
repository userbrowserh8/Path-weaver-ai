import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Sparkles, BookOpen, Clock, Target, TrendingUp, 
  Play, ChevronRight, Brain, Zap, BarChart3, 
  Settings, LogOut, Home, Route, LineChart, User
} from "lucide-react";

const Dashboard = () => {
  const user = {
    name: "Alex",
    goal: "Full-Stack Developer",
    progress: 34,
    streak: 12,
    estimatedCompletion: "8 weeks",
  };

  const todaysTasks = [
    { id: 1, title: "React Hooks Deep Dive", duration: "45 min", type: "video", status: "in-progress" },
    { id: 2, title: "Build a Todo App", duration: "1 hr", type: "project", status: "pending" },
    { id: 3, title: "State Management Quiz", duration: "15 min", type: "quiz", status: "pending" },
  ];

  const aiSuggestions = [
    { id: 1, title: "Revise JavaScript Closures", reason: "Quiz score was 60% - reinforce this concept", priority: "high" },
    { id: 2, title: "Slow down pace this week", reason: "Detected fatigue from shorter sessions", priority: "medium" },
    { id: 3, title: "Try the TypeScript module", reason: "Based on your React progress", priority: "low" },
  ];

  const recentModules = [
    { id: 1, title: "JavaScript Fundamentals", progress: 100, status: "completed" },
    { id: 2, title: "React Basics", progress: 75, status: "active" },
    { id: 3, title: "State Management", progress: 0, status: "locked" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-sidebar">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-sidebar-foreground">LearnPath</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/learning-path" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Route className="w-5 h-5" />
            Learning Path
          </Link>
          <Link to="/progress" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <LineChart className="w-5 h-5" />
            Progress
          </Link>
          <Link to="/recommendations" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Brain className="w-5 h-5" />
            AI Recommendations
          </Link>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, {user.name}! 👋</h1>
              <p className="text-muted-foreground">Continue your journey to becoming a {user.goal}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-warning/10 border border-warning/20">
                <Zap className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-warning">{user.streak} day streak!</span>
              </div>
              <Link to="/settings">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{user.progress}%</div>
              <Progress value={user.progress} className="h-2" />
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div className="text-sm text-muted-foreground">Est. Completion</div>
              </div>
              <div className="text-3xl font-bold text-foreground">{user.estimatedCompletion}</div>
              <div className="text-sm text-muted-foreground">at current pace</div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div className="text-sm text-muted-foreground">Modules Completed</div>
              </div>
              <div className="text-3xl font-bold text-foreground">3/12</div>
              <div className="text-sm text-muted-foreground">9 remaining</div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-warning" />
                </div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
              <div className="text-3xl font-bold text-foreground">4.5 hrs</div>
              <div className="text-sm text-success">+20% from last week</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Today's Tasks */}
            <div className="lg:col-span-2 glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground">Today's Learning</h2>
                <Link to="/learning-path" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {todaysTasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                      task.status === "in-progress"
                        ? "bg-primary/5 border-primary/30"
                        : "bg-secondary/50 border-border hover:border-primary/30"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      task.status === "in-progress" ? "bg-primary" : "bg-muted"
                    }`}>
                      {task.status === "in-progress" ? (
                        <Play className="w-5 h-5 text-primary-foreground" />
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{task.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {task.duration}
                        <span className="capitalize">• {task.type}</span>
                      </div>
                    </div>
                    <Button
                      variant={task.status === "in-progress" ? "hero" : "outline"}
                      size="sm"
                    >
                      {task.status === "in-progress" ? "Continue" : "Start"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">AI Suggestions</h2>
              </div>

              <div className="space-y-4">
                {aiSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-foreground text-sm">{suggestion.title}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        suggestion.priority === "high"
                          ? "bg-destructive/20 text-destructive"
                          : suggestion.priority === "medium"
                          ? "bg-warning/20 text-warning"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {suggestion.priority}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
                  </div>
                ))}
              </div>

              <Link to="/recommendations">
                <Button variant="ghost" className="w-full mt-4">
                  View All Recommendations
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Modules */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Your Learning Path</h2>
              <Link to="/learning-path">
                <Button variant="outline" size="sm">
                  <Route className="w-4 h-4 mr-2" />
                  Full Roadmap
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {recentModules.map((module) => (
                <div
                  key={module.id}
                  className={`p-4 rounded-xl border transition-colors ${
                    module.status === "active"
                      ? "bg-primary/5 border-primary/30"
                      : module.status === "completed"
                      ? "bg-success/5 border-success/30"
                      : "bg-muted/30 border-border opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      module.status === "active"
                        ? "bg-primary/20 text-primary"
                        : module.status === "completed"
                        ? "bg-success/20 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {module.status}
                    </span>
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{module.title}</h3>
                  <Progress value={module.progress} className="h-1.5" />
                  <div className="text-xs text-muted-foreground mt-1">{module.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
