import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-children-playing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy children playing at Little Stars Daycare"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/40"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-secondary rounded-full animate-bounce-subtle opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-coral rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 left-20 w-10 h-10 bg-accent rounded-full animate-bounce-subtle opacity-60"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          A Safe, Fun & 
          <span className="text-secondary block animate-pulse-glow">
            Nurturing Space
          </span>
          for Your Child
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
          Where learning meets play in a loving environment designed to help your little star shine bright
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="group"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Tour
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Today
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">5★</div>
            <div className="text-sm">Parent Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">200+</div>
            <div className="text-sm">Happy Families</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;