import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MatrixRain from "@/components/matrixRain";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      <MatrixRain />
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-primary">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-primary-glow hover-glow transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
