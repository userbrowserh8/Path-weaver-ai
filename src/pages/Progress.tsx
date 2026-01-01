import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, Clock, Target, TrendingUp, TrendingDown,
  BookOpen, CheckCircle2, XCircle, BarChart3
} from "lucide-react";

const ProgressPage = () => {
  const stats = {
    totalHours: 24.5,
    completionRate: 78,
    quizAccuracy: 85,
    modulesCompleted: 3,
    currentStreak: 12,
  };

  const weeklyProgress = [
    { day: "Mon", hours: 1.5, target: 2 },
    { day: "Tue", hours: 2, target: 2 },
    { day: "Wed", hours: 0.5, target: 2 },
    { day: "Thu", hours: 2.5, target: 2 },
    { day: "Fri", hours: 1, target: 2 },
    { day: "Sat", hours: 0, target: 1 },
    { day: "Sun", hours: 1.5, target: 1 },
  ];

  const skillMastery = [
    { skill: "JavaScript", level: 85, trend: "up" },
    { skill: "React", level: 72, trend: "up" },
    { skill: "CSS/Styling", level: 90, trend: "stable" },
    { skill: "TypeScript", level: 45, trend: "up" },
    { skill: "Testing", level: 30, trend: "new" },
  ];

  const strengths = ["DOM Manipulation", "Component Architecture", "Hooks"];
  const weaknesses = ["Closures", "Async Patterns", "Testing"];

  const maxHours = Math.max(...weeklyProgress.map(d => Math.max(d.hours, d.target)));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Progress & Analytics</h1>
              <p className="text-sm text-muted-foreground">Track your learning journey</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="glass-card p-6 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">{stats.totalHours}</div>
            <div className="text-sm text-muted-foreground">Hours Learned</div>
          </div>
          <div className="glass-card p-6 text-center">
            <Target className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">{stats.completionRate}%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
          <div className="glass-card p-6 text-center">
            <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">{stats.quizAccuracy}%</div>
            <div className="text-sm text-muted-foreground">Quiz Accuracy</div>
          </div>
          <div className="glass-card p-6 text-center">
            <BookOpen className="w-8 h-8 text-warning mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">{stats.modulesCompleted}</div>
            <div className="text-sm text-muted-foreground">Modules Done</div>
          </div>
          <div className="glass-card p-6 text-center col-span-2 lg:col-span-1">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">{stats.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Activity */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Weekly Activity</h2>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyProgress.map((day) => (
                <div key={day.day} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
                    {/* Target line */}
                    <div 
                      className="w-full bg-muted/50 rounded-t relative"
                      style={{ height: `${(day.target / maxHours) * 100}%` }}
                    >
                      {/* Actual bar */}
                      <div 
                        className={`absolute bottom-0 w-full rounded-t transition-all ${
                          day.hours >= day.target ? "bg-success" : "bg-primary"
                        }`}
                        style={{ height: `${(day.hours / day.target) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{day.day}</div>
                  <div className="text-xs font-medium text-foreground">{day.hours}h</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary" />
                <span className="text-muted-foreground">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-muted/50" />
                <span className="text-muted-foreground">Target</span>
              </div>
            </div>
          </div>

          {/* Skill Mastery */}
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6">Skill Mastery</h2>
            <div className="space-y-4">
              {skillMastery.map((skill) => (
                <div key={skill.skill}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      {skill.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
                      {skill.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
                      {skill.trend === "new" && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-accent/20 text-accent">NEW</span>
                      )}
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <h2 className="text-lg font-semibold text-foreground">Strengths</h2>
            </div>
            <div className="space-y-3">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20"
                >
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-warning" />
              <h2 className="text-lg font-semibold text-foreground">Areas to Improve</h2>
            </div>
            <div className="space-y-3">
              {weaknesses.map((weakness) => (
                <div
                  key={weakness}
                  className="flex items-center gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20"
                >
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-foreground">{weakness}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
