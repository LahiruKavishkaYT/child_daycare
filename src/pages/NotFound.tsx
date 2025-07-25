import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! This page seems to have wandered off to playtime</p>
        <a 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 underline font-subheading font-medium text-lg"
        >
          Return to Little Stars Daycare
        </a>
      </div>
    </div>
  );
};

export default NotFound;
