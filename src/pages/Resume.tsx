import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import MatrixRain from "@/components/matrixRain";

const Resume = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <MatrixRain />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Web Developer | PHP | JavaScript | React | Tailwind CSS | Blockchain
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground hover-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>

          {/* Experience Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div className="sci-fi-card p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">Full Stack Web Developer</h3>
                  <span className="text-primary font-mono">2021 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Freelance / Personal Projects</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed responsive web apps using React, Tailwind CSS, PHP, and MySQL</li>
                  <li>Built a car buying and selling platform with advanced filtering and admin tools</li>
                  <li>Created a weather app using OpenWeather API with a clean Tailwind UI</li>
                  <li>Developed browser-based games like an AI Tic Tac Toe and Word Cookie-style game</li>
                </ul>
              </div>

              <div className="sci-fi-card p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">Tech Instructor & Community Lead</h3>
                  <span className="text-primary font-mono">2020 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Tech Learning Network</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Teach students about cryptocurrency, blockchain, and web development</li>
                  <li>Conduct workshops on DeFi, AI applications, and emerging technologies</li>
                  <li>Lead a tech community focused on digital innovation and real-world projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="sci-fi-card p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                <span className="text-primary font-mono">2016 - 2020</span>
              </div>
              <p className="text-muted-foreground">University of Technology</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">Artificial Intelligence</h3>
                <p className="text-sm text-muted-foreground">Certified — 2024</p>
              </div>
              <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">DeFi & Blockchain Development</h3>
                <p className="text-sm text-muted-foreground">Certified — 2025</p>
              </div>
              <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">Responsive Web Design</h3>
                <p className="text-sm text-muted-foreground">freeCodeCamp - 2023</p>
              </div>
              <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">JavaScript Algorithms and Data Structures</h3>
                <p className="text-sm text-muted-foreground">freeCodeCamp - 2022</p>
              </div>
                 <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">JavaScript </h3>
                <p className="text-sm text-muted-foreground">Complete Computer Institute
                   - 2024</p>
              </div>
                 <div className="sci-fi-card p-4 rounded-lg">
                <h3 className="font-bold text-foreground mb-1">PHP </h3>
                <p className="text-sm text-muted-foreground">Complete Computer Institute
                   - 2023</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Resume;
