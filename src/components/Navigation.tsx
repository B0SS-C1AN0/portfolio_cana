import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 🔹 Detect scroll to apply blur background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 🔹 Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Pricing", path: "/pricing" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="text-2xl font-bold gradient-text font-mono hover:opacity-80 transition"
          >
            &lt;CIANO/&gt;
          </Link>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-muted-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.path
                    ? "text-primary underline underline-offset-4"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🔹 Desktop Resume Button */}
          <div className="hidden md:block">
            <Link to="/resume">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow transition-all"
              >
                Resume
              </Button>
            </Link>
          </div>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* 🔹 Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-in-down">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2 ${
                    location.pathname === item.path ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/resume" className="block mt-4">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow"
                >
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
