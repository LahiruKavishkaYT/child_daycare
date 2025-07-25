import { Button } from "@/components/ui/button";
import { Baby, Users, GraduationCap, ArrowRight } from "lucide-react";
import artActivitiesImage from "@/assets/children-art-activities.jpg";
import teacherReadingImage from "@/assets/teacher-reading-story.jpg";
import playgroundImage from "@/assets/outdoor-playground.jpg";

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Baby,
      title: "Infants",
      ageRange: "6 months - 1 year",
      description: "Nurturing care focused on safety, comfort, and early sensory development in a loving environment.",
      image: teacherReadingImage,
      features: ["Individual care plans", "Safe sleep practices", "Sensory play", "Daily reports"],
      color: "border-primary hover:border-primary/70",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "Toddlers", 
      ageRange: "1 - 3 years",
      description: "Play-based learning that encourages exploration, social skills, and early independence.",
      image: artActivitiesImage,
      features: ["Social interaction", "Creative arts", "Motor skills", "Potty training"],
      color: "border-secondary hover:border-secondary/70",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Preschool",
      ageRange: "3 - 5 years", 
      description: "Comprehensive kindergarten preparation with structured learning and continued creative play.",
      image: playgroundImage,
      features: ["Pre-reading skills", "Math concepts", "Science exploration", "School readiness"],
      color: "border-accent hover:border-accent/70",
      iconBg: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Age-appropriate programs designed to nurture your child's development at every stage of their early years.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-2xl border-2 ${program.color} overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={`${program.title} program at Little Stars Daycare`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${program.iconBg} mr-4`}>
                      <Icon className={`w-6 h-6 ${program.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-sm font-subheading text-muted-foreground">
                        {program.ageRange}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;