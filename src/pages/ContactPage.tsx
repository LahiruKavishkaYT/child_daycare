import ContactForm from "@/components/ContactForm";
import { Clock, MapPin, Phone, Mail, Calendar, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const operatingHours = [
    { day: "Monday - Friday", hours: "6:30 AM - 6:30 PM", status: "Open" },
    { day: "Saturday", hours: "Closed", status: "Closed" },
    { day: "Sunday", hours: "Closed", status: "Closed" },
    { day: "Holidays", hours: "Closed", status: "Closed" }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) 123-KIDS",
      secondary: "Available during business hours",
      action: "Call Now",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "hello@littlestarsdaycare.com",
      secondary: "We respond within 24 hours",
      action: "Send Email",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Sunshine Street",
      secondary: "Happy Valley, CA 90210",
      action: "Get Directions",
      color: "text-accent",
      bgColor: "bg-accent/10" 
    },
    {
      icon: Calendar,
      title: "Schedule Tour",
      primary: "Book Online",
      secondary: "Available Monday - Friday",
      action: "Schedule Now",
      color: "text-coral",
      bgColor: "bg-coral/10"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to give your child the best start? We'd love to hear from you 
            and answer any questions about our programs and enrollment.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Choose the way that works best for you to connect with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.bgColor} mb-6`}>
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {method.title}
                  </h3>
                  
                  <p className="font-subheading font-medium text-foreground mb-2">
                    {method.primary}
                  </p>
                  
                  <p className="text-sm text-muted-foreground font-body mb-6">
                    {method.secondary}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Hours & Map */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Operating Hours */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    Operating Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-soft border border-border">
                      <div>
                        <p className="font-subheading font-medium text-foreground">
                          {schedule.day}
                        </p>
                        <p className="text-sm text-muted-foreground font-body">
                          {schedule.hours}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-subheading font-medium ${
                        schedule.status === 'Open' 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {schedule.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-body">
                    <strong>Note:</strong> We're closed on major holidays including New Year's Day, 
                    Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas Day.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Location
                    </h3>
                  </div>
                  <Button variant="outline" size="sm">
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-64 bg-gradient-soft rounded-lg border-2 border-dashed border-border flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-body">
                      Interactive Map Coming Soon
                    </p>
                    <p className="text-sm text-muted-foreground font-body mt-2">
                      123 Sunshine Street, Happy Valley, CA 90210
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground font-body">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    5 minutes from Happy Valley Elementary
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground font-body">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Ample parking available
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground font-body">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Public transportation accessible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Emergency Contact */}
      <section className="py-12 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Emergency Contact Information
          </h3>
          <p className="text-white/80 font-body mb-6">
            For urgent matters during business hours, please call our main number. 
            For after-hours emergencies involving enrolled children, contact:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/10 rounded-lg px-6 py-3">
              <Phone className="w-5 h-5 mr-3" />
              <span className="font-subheading font-medium">(555) 123-EMRG</span>
            </div>
            <div className="text-white/60 font-body text-sm">
              Available 24/7 for enrolled families
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;