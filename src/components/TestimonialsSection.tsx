import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (3)",
      content: "Little Stars Daycare has been a blessing for our family. Emma loves going there every day, and we've seen incredible growth in her social skills and creativity. The teachers truly care about each child's individual needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Parent of Lucas (4) & Mia (2)",
      content: "Having two children at Little Stars has been wonderful. The staff maintains excellent communication, and both kids are thriving in their age-appropriate programs. The facility is always clean and well-organized.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Williams",
      role: "Parent of Sophia (5)",
      content: "Sophia started here as a shy toddler and has blossomed into a confident, curious learner ready for kindergarten. The Montessori approach and loving environment have made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      role: "Parent of Alex (1)",
      content: "As first-time parents, we were nervous about daycare. The infant program at Little Stars exceeded our expectations. Daily reports, photos, and the genuine care from the staff give us complete peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What <span className="text-primary">Parents Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Don't just take our word for it. Hear from the families who trust us with their most precious treasures.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover-lift transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-primary/30" />
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-6">
            Ready to join our Little Stars family?
          </p>
          <Button variant="cta" size="lg">
            Schedule Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;