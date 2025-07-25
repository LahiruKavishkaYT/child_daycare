import { Shield, Palette, Heart } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      description: "24/7 monitoring, certified staff, and secure facilities ensure your child's safety is our top priority.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Palette,
      title: "Creative Learning",
      description: "Montessori-inspired curriculum that encourages creativity, critical thinking, and natural curiosity.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Heart,
      title: "Loving Care",
      description: "Low child-to-teacher ratio ensures personalized attention and nurturing relationships.",
      color: "text-coral",
      bgColor: "bg-coral/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose 
            <span className="text-primary"> Little Stars</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            We combine the best of early childhood education with a nurturing environment 
            where every child can thrive and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-white hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-accent rounded-full animate-bounce-subtle opacity-40"></div>
          <div className="absolute -top-4 right-1/3 w-3 h-3 bg-coral rounded-full animate-float opacity-40"></div>
          <div className="absolute top-8 right-1/4 w-5 h-5 bg-secondary rounded-full animate-bounce-subtle opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;