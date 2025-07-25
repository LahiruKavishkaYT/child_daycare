import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Heart, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  const timelineEvents = [
    {
      year: "2008",
      title: "Little Stars Opens",
      description: "Founded by educators Sarah & Michael Johnson with a vision to create a nurturing learning environment."
    },
    {
      year: "2012", 
      title: "Expansion & Growth",
      description: "Added toddler program and expanded to serve 50 families with dedicated outdoor playground."
    },
    {
      year: "2016",
      title: "Excellence Recognition",
      description: "Received state excellence award for innovative early childhood education programs."
    },
    {
      year: "2020",
      title: "Enhanced Safety Protocols",
      description: "Implemented comprehensive health and safety measures while maintaining quality care."
    },
    {
      year: "2024",
      title: "15+ Years Strong",
      description: "Celebrating over 15 years of nurturing young minds with 200+ happy families served."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Director & Co-Founder",
      credentials: "M.Ed. Early Childhood, CPR Certified",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about creating environments where children feel safe, loved, and excited to learn every day."
    },
    {
      name: "Michael Johnson", 
      role: "Co-Founder & Education Coordinator",
      credentials: "B.A. Child Development, Montessori Certified",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Believes in nurturing each child's natural curiosity and helping them discover their unique talents."
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Preschool Teacher",
      credentials: "B.A. Education, First Aid Certified",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616c15c2e6a?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in preparing children for kindergarten while maintaining the joy and wonder of learning."
    },
    {
      name: "Jessica Chen",
      role: "Infant & Toddler Specialist", 
      credentials: "Child Development Associate, CPR/First Aid",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Dedicated to providing tender, individualized care for our youngest learners and their families."
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "State Licensed",
      description: "Fully licensed by California Department of Social Services"
    },
    {
      icon: Award,
      title: "NAEYC Accredited",
      description: "National Association for the Education of Young Children"
    },
    {
      icon: Heart,
      title: "CPR Certified Staff",
      description: "All teachers certified in CPR and First Aid"
    },
    {
      icon: Users,
      title: "Background Checked",
      description: "Comprehensive background screening for all staff"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            About Little Stars
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A family-owned daycare dedicated to nurturing young minds, 
            fostering creativity, and building the foundation for lifelong learning.
          </p>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              From humble beginnings to a thriving learning community - here's how Little Stars has grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary/20"></div>
            
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                    <div className="text-2xl font-heading font-bold text-primary mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Our dedicated educators and caregivers are the heart of Little Stars, 
              bringing passion, expertise, and love to everything they do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm px-3 py-1 rounded-full font-subheading font-medium">
                    {member.experience}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-subheading font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4 font-body">
                  {member.credentials}
                </p>
                <p className="text-sm text-muted-foreground font-body italic">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Safety & <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Your child's safety and well-being are our top priorities. 
              We maintain the highest standards of care and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-warm rounded-3xl p-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Ready to Join Our Family?
            </h3>
            <p className="text-xl text-white/90 mb-8 font-body">
              Schedule a tour to see our caring environment in action and meet our wonderful team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-coral hover:bg-white/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coral">
                  View Our Programs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;