import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, Users, GraduationCap, Sun, Clock, Calendar, ArrowRight, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import teacherReadingImage from "@/assets/teacher-reading-story.jpg";
import artActivitiesImage from "@/assets/children-art-activities.jpg";
import playgroundImage from "@/assets/outdoor-playground.jpg";

const ProgramsPage = () => {
  const [activeSchedule, setActiveSchedule] = useState("infants");

  const programs = [
    {
      id: "infants",
      icon: Baby,
      title: "Infant Care",
      ageRange: "6 months - 1 year",
      capacity: "8 children",
      ratio: "1:4 teacher ratio",
      description: "Tender, individualized care in a safe, loving environment designed specifically for your baby's developmental needs.",
      image: teacherReadingImage,
      features: [
        "Individual care plans tailored to each baby",
        "Safe sleep practices following AAP guidelines", 
        "Sensory play and tummy time activities",
        "Daily reports with photos and updates",
        "Bottle feeding and introduction to solids",
        "Diaper changing with health monitoring",
        "Quiet, nurturing environment",
        "Flexible scheduling for naps and feeding"
      ],
      curriculum: [
        "Sensory exploration through touch, sight, and sound",
        "Language development through songs and reading",
        "Motor skill development with age-appropriate toys",
        "Social interaction with caregivers and peers",
        "Routine establishment for security and comfort"
      ],
      schedule: {
        "7:00 AM": "Arrival & Morning Greetings",
        "8:00 AM": "Bottle/Feeding Time",
        "9:00 AM": "Tummy Time & Sensory Play",
        "10:00 AM": "Morning Nap",
        "11:30 AM": "Feeding & Diaper Changes",
        "12:00 PM": "Quiet Play & Individual Attention",
        "1:00 PM": "Afternoon Nap",
        "3:00 PM": "Snack Time & Social Interaction",
        "4:00 PM": "Outdoor Time (weather permitting)",
        "5:00 PM": "Evening Routine & Parent Updates"
      }
    },
    {
      id: "toddlers",
      icon: Users,
      title: "Toddler Program",
      ageRange: "1 - 3 years",
      capacity: "16 children",
      ratio: "1:6 teacher ratio",
      description: "Play-based learning that encourages exploration, builds social skills, and fosters independence in a structured yet flexible environment.",
      image: artActivitiesImage,
      features: [
        "Social skill development through group activities",
        "Creative arts and crafts projects",
        "Gross and fine motor skill activities",
        "Potty training support and guidance",
        "Introduction to letters, numbers, and colors",
        "Outdoor exploration and nature walks",
        "Music and movement activities",
        "Healthy meal and snack preparation"
      ],
      curriculum: [
        "Language development through stories and songs",
        "Pre-math concepts with sorting and counting",
        "Science exploration with simple experiments",
        "Art expression through various mediums",
        "Physical development with playground time",
        "Social skills through sharing and cooperation"
      ],
      schedule: {
        "7:00 AM": "Arrival & Free Play",
        "8:30 AM": "Breakfast & Morning Circle",
        "9:30 AM": "Learning Centers & Activities",
        "10:30 AM": "Outdoor Play & Exploration",
        "11:30 AM": "Snack Time & Story Reading",
        "12:00 PM": "Lunch & Social Time",
        "1:00 PM": "Rest Time & Quiet Activities",
        "2:30 PM": "Art & Creative Expression",
        "3:30 PM": "Afternoon Snack",
        "4:00 PM": "Music & Movement",
        "5:00 PM": "Free Play & Parent Pickup"
      }
    },
    {
      id: "preschool",
      icon: GraduationCap,
      title: "Preschool Program",
      ageRange: "3 - 5 years",
      capacity: "20 children",
      ratio: "1:8 teacher ratio",
      description: "Comprehensive kindergarten preparation with structured learning activities while maintaining the joy and creativity of childhood.",
      image: playgroundImage,
      features: [
        "Pre-reading and phonics instruction",
        "Mathematical concepts and problem solving",
        "Science experiments and discovery",
        "School readiness skill development",
        "Character building and social responsibility",
        "Technology integration with educational apps",
        "Field trips and community connections",
        "Portfolio development to track progress"
      ],
      curriculum: [
        "Literacy development with reading and writing",
        "STEM activities and hands-on experiments",
        "Social studies and community helpers",
        "Creative arts and dramatic play",
        "Physical education and healthy habits",
        "Critical thinking and problem-solving skills"
      ],
      schedule: {
        "7:00 AM": "Arrival & Journal Writing",
        "8:00 AM": "Breakfast & Morning Meeting",
        "9:00 AM": "Learning Centers Rotation",
        "10:00 AM": "Outdoor Learning & Play",
        "11:00 AM": "Academic Instruction Time",
        "12:00 PM": "Lunch & Community Building",
        "1:00 PM": "Quiet Rest & Reading Time",
        "2:00 PM": "STEM Projects & Experiments",
        "3:00 PM": "Snack & Show and Tell",
        "4:00 PM": "Creative Arts & Music",
        "5:00 PM": "Reflection Time & Pickup"
      }
    }
  ];

  const additionalPrograms = [
    {
      icon: Sun,
      title: "Summer Camp",
      ageRange: "3 - 8 years",
      description: "Fun-filled summer program with outdoor adventures, water play, field trips, and special themed weeks.",
      features: ["Weekly themed activities", "Swimming lessons", "Nature exploration", "Arts & crafts", "Field trips"]
    },
    {
      icon: Clock,
      title: "Before & After School Care",
      ageRange: "5 - 12 years",
      description: "Safe, supervised care before and after school with homework help, snacks, and enrichment activities.",
      features: ["Homework assistance", "Healthy snacks", "Outdoor play", "Educational games", "Transportation available"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Age-appropriate programs designed to nurture your child's development 
            at every stage of their early learning journey.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs defaultValue="infants" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <TabsTrigger 
                    key={program.id} 
                    value={program.id}
                    className="flex items-center gap-2 p-4"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{program.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <TabsContent key={program.id} value={program.id} className="mt-0">
                  <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Program Overview */}
                    <div className="animate-fade-in-up">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-heading font-bold text-foreground">
                            {program.title}
                          </h2>
                          <p className="text-lg text-muted-foreground font-subheading">
                            {program.ageRange}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 mb-6">
                        <div className="bg-accent/20 rounded-lg p-3 text-center">
                          <div className="font-heading font-semibold text-foreground">{program.capacity}</div>
                          <div className="text-sm text-muted-foreground">Capacity</div>
                        </div>
                        <div className="bg-coral/20 rounded-lg p-3 text-center">
                          <div className="font-heading font-semibold text-foreground">{program.ratio}</div>
                          <div className="text-sm text-muted-foreground">Ratio</div>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                        {program.description}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          Program Features
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground font-body text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Program Image */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="relative rounded-3xl overflow-hidden hover-lift">
                        <img 
                          src={program.image}
                          alt={`${program.title} at Little Stars Daycare`}
                          className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Daily Schedule & Curriculum */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Daily Schedule */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Daily Schedule
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(program.schedule).map(([time, activity], index) => (
                          <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="bg-primary/10 rounded-lg px-3 py-1 text-sm font-subheading font-medium text-primary flex-shrink-0">
                              {time}
                            </div>
                            <div className="text-muted-foreground font-body">
                              {activity}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Curriculum Highlights */}
                    <div className="bg-gradient-soft rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                        Curriculum Highlights
                      </h3>
                      <div className="space-y-4">
                        {program.curriculum.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                            <p className="text-muted-foreground font-body">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Link to="/contact">
                          <Button variant="cta" className="w-full">
                            <Calendar className="w-5 h-5 mr-2" />
                            Schedule a Tour
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Additional <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Extended care options to support your family's needs throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground font-subheading">
                        {program.ageRange}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-body text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-warm rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Find the Perfect Program for Your Child
            </h3>
            <p className="text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto">
              Not sure which program is right for your little one? 
              Schedule a tour and let us help you find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-coral hover:bg-white/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Tour
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coral">
                  View Our Gallery
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

export default ProgramsPage;