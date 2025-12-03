import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Server, Cloud, Cpu, Code2, Layers,
  Zap, Database, GitBranch, Rocket, Brain, Link
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <Code2 className="w-4 h-4 inline mr-1" /> },
      { name: "TypeScript", icon: <Code2 className="w-4 h-4 inline mr-1" /> },
      { name: "Tailwind CSS", icon: <Layers className="w-4 h-4 inline mr-1" /> },
      { name: "Three.js", icon: <Zap className="w-4 h-4 inline mr-1" /> },
      { name: "WebGL", icon: <Zap className="w-4 h-4 inline mr-1" /> }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <Server className="w-4 h-4 inline mr-1" /> },
      { name: "Express", icon: <Server className="w-4 h-4 inline mr-1" /> },
      { name: "PHP", icon: <Code2 className="w-4 h-4 inline mr-1" /> },
      { name: "Laravel", icon: <Code2 className="w-4 h-4 inline mr-1" /> },
      { name: "WebSocket", icon: <Database className="w-4 h-4 inline mr-1" /> }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (Basic)", icon: <Cloud className="w-4 h-4 inline mr-1" /> },
      { name: "Vercel", icon: <Rocket className="w-4 h-4 inline mr-1" /> },
      { name: "Netlify", icon: <Rocket className="w-4 h-4 inline mr-1" /> },
      { name: "CI/CD Pipelines", icon: <GitBranch className="w-4 h-4 inline mr-1" /> }
    ]
  },
  {
    category: "Emerging Tech",
    skills: [
      { name: "Machine Learning (Beginner)", icon: <Brain className="w-4 h-4 inline mr-1" /> },
      { name: "Blockchain (Interest)", icon: <Link className="w-4 h-4 inline mr-1" /> }
    ]
  }
];

const Skills = () => {
  // Starry canvas background effect
  useEffect(() => {
    const canvas = document.getElementById('star-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw twinkling stars
    let animationFrame: number;
    const starCount = 150;
    const stars: { x: number; y: number; r: number; o: number; delta: number }[] = [];
    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 0.7 + 0.5,
        o: Math.random() * 0.6 + 0.3,
        delta: (Math.random() - 0.5) * 0.02,
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        // Twinkling
        star.o += star.delta;
        if (star.o > 1) {
          star.o = 1; star.delta *= -1;
        }
        if (star.o < 0.25) {
          star.o = 0.25; star.delta *= -1;
        }

        ctx.save();
        ctx.globalAlpha = star.o;
        ctx.beginPath();
        ctx.arc(
          star.x * canvas.width,
          star.y * canvas.height,
          star.r,
          0,
          2 * Math.PI,
          false
        );
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 4 + Math.random() * 5;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      drawStars();
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="skills-heading"
      style={{
        background:
          "linear-gradient(to bottom, #020617 0%, #0c1222 50%, #020617 100%)"
      }}
    >
      {/* Starfield background - covers entire section */}
      <canvas
        id="star-canvas"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle gradient overlays */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, hsl(var(--primary)/0.08) 0%, transparent 15%)," +
            "radial-gradient(circle at 85% 15%, hsl(var(--secondary)/0.06) 0%, transparent 10%)"
        }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="mx-auto mb-6 h-px w-20 glow-primary"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))"
            }}
          />
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            style={{
              backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 20%, hsl(var(--secondary)) 100%)"
            }}
          >
            TECHNICAL EXPERTISE
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg md:text-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Mastering the technologies that define the future of software development
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="fade-up-card bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl shadow-lg p-7 relative overflow-hidden group transition-transform duration-300"
              style={{
                transitionDelay: `${idx * 0.12 + 0.1}s`
              }}
            >
              <span
                className="absolute left-0 top-6 h-8 w-1.5 rounded-r-full"
                style={{
                  background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))"
                }}
                aria-hidden="true"
              />
              <h3
                className="mb-4 text-lg md:text-xl font-bold font-mono pl-5"
                style={{ color: "hsl(var(--primary))" }}
              >
                &gt; {category.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    className="hover-glow px-3 py-1 text-sm font-medium flex items-center bg-[hsl(var(--muted))] border border-[hsl(var(--border))] shadow-inner
                               transition-all duration-200 cursor-default hover:scale-105 hover:shadow-[0_0_12px_2px_var(--primary)]"
                    style={{
                      color: "hsl(var(--foreground))"
                    }}
                    aria-label={skill.name}
                  >
                    {skill.icon}
                    <span className="align-middle">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom Styles */}
      <style>{`
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }
        .fade-up-card {
          opacity: 0;
          transform: translateY(25px);
          animation: fadeUp 0.6s forwards;
        }
        .fade-up-card:nth-child(1) { animation-delay: 0.1s; }
        .fade-up-card:nth-child(2) { animation-delay: 0.22s; }
        .fade-up-card:nth-child(3) { animation-delay: 0.34s; }
        .fade-up-card:nth-child(4) { animation-delay: 0.46s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .hover-glow:hover {
          box-shadow: 0 0 18px 2px hsl(var(--primary) / 0.4), 0 0 0 2px hsl(var(--primary) / 0.23);
        }
      `}</style>
    </section>
  );
};

export default Skills;