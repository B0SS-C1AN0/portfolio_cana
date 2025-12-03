import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "PuzzleRush",
    description:
      "A high-performance, browser-based puzzle game built with TypeScript and modern web tooling; features responsive UI and optimized gameplay.",
    tech: ["TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/PUZZLERUSH",
    demo: "#",
  },
  {
    title: "RAIDER",
    description:
      "A fast-paced multiplayer shooter built with real-time networking, weapon mechanics, and performance-optimized client logic.",
    tech: ["TypeScript", "Node.js", "WebSocket", "Three.js", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/RAIDER",
    demo: "#",
  },
  {
    title: "JWL",
    description:
      "A sleek web app showcasing modern UI/UX design and efficient front-end architecture, built with a focus on responsiveness and interactivity.",
    tech: ["JavaScript", "React", "CSS3", "HTML5", "Vite"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/JWL",
    demo: "#",
  },
  {
    title: "BL_AST",
    description:
      "An innovative visualization project exploring blast-wave simulations using WebGL and GPU acceleration.",
    tech: ["TypeScript", "WebGL", "Three.js", "GPU-compute", "Vite"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/BL_AST",
    demo: "#",
  },
];

const Projects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      <section id="projects" className="py-20 px-4 relative mt-16">
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 animate-slide-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">FEATURED</span>
              <br />
              <span className="text-foreground">PROJECTS</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Exploring the intersection of creativity and technology through innovative web applications
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="sci-fi-card group overflow-hidden animate-slide-in-up hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Floating Tech Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20">
                    <Code2 className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground">{project.tech.length} Technologies</span>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Source Code</span>
                      </Button>
                    </a>
                    
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-primary/20 hover:shadow-primary/40"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground mb-4">Interested in collaborating?</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
