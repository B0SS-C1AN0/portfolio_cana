import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import MatrixRain from "@/components/matrixRain";
import { Link } from "react-router-dom";
import me from "@/assets/me.png";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Matrix Effect Background */}
      <MatrixRain />

      {/* Transparent overlay to slightly fade content into Matrix background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-12 px-8 max-w-7xl mx-auto w-full">
        
        {/* Text Content */}
        <div className="flex-1 text-left space-y-6 animate-slide-in-up">
          {/* Glowing accent line */}
          <div className="h-px w-24 bg-gradient-primary mb-8 glow-primary" />

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-foreground">LOUIS</span>
            <span className="gradient-text"> CIANO</span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-primary font-mono tracking-wider">
              &gt; FULL STACK DEVELOPER
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Crafting digital experiences with cutting-edge technology.<br />
              Specializing in React, Node.js, and cloud architecture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground hover-glow px-8 py-3 text-lg font-semibold"
              >
                View My Work
              </Button>
            </Link>

            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <a 
              href="https://github.com/B0SS-C1AN0?tab=repositories" 
              className="p-3 rounded-full border border-border hover:border-primary hover-glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/iyoha-louis-945875101" 
              className="p-3 rounded-full border border-border hover:border-primary hover-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:louiscolix@gmail.com" 
              className="p-3 rounded-full border border-border hover:border-primary hover-glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Profile Image (Right Side) */}
        <div className="flex-1 flex justify-center md:justify-end relative animate-fade-in">
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <div className="absolute inset-0 border-4 border-primary glow-primary rounded-2xl"></div>
            <img
              src={me}
              alt="Louis Ciano"
              className="rounded-2xl w-full h-full object-cover border-4 border-black/50 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-10">
        <ArrowDown className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>
    </section>
  );
};

export default Hero;
