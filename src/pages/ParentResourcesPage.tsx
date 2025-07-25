import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, BookOpen, Calendar, Users, FileText, ExternalLink, ChevronRight } from "lucide-react";

const ParentResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("faq");

  const faqData = [
    {
      category: "Enrollment",
      questions: [
        {
          question: "What ages do you accept?",
          answer: "We accept children from 6 months to 5 years old. Our programs are divided into Infants (6m-1y), Toddlers (1-3y), and Preschool (3-5y)."
        },
        {
          question: "What documents do I need for enrollment?",
          answer: "You'll need your child's birth certificate, immunization records, emergency contact information, and completed enrollment forms. We'll provide a checklist during your tour."
        },
        {
          question: "Do you have a waiting list?",
          answer: "Yes, we maintain waiting lists for all age groups. We recommend applying early and scheduling a tour to secure your spot."
        },
        {
          question: "What are your tuition rates?",
          answer: "Tuition varies by age group and schedule. Please contact us directly for current rates and available financial assistance programs."
        }
      ]
    },
    {
      category: "Daily Operations",
      questions: [
        {
          question: "What are your operating hours?",
          answer: "We're open Monday through Friday, 6:30 AM to 6:30 PM. We're closed on weekends and major holidays."
        },
        {
          question: "What should my child bring daily?",
          answer: "Please bring a change of clothes, comfort items, any medications, and lunch/snacks if not purchasing our meal plan. We provide bedding for nap time."
        },
        {
          question: "How do you handle sick children?",
          answer: "Children with fever, vomiting, diarrhea, or contagious conditions must stay home. We follow state health guidelines and will contact you for pickup if your child becomes ill."
        },
        {
          question: "Do you provide meals and snacks?",
          answer: "Yes, we offer nutritious breakfast, lunch, and two snacks daily. Our menu follows USDA guidelines and accommodates most dietary restrictions."
        }
      ]
    },
    {
      category: "Safety & Health",
      questions: [
        {
          question: "What safety measures do you have in place?",
          answer: "We have secure entry systems, background-checked staff, emergency protocols, first aid supplies, and conduct regular safety drills."
        },
        {
          question: "How do you handle emergencies?",
          answer: "We have detailed emergency plans for various situations, maintain emergency supplies, and staff are trained in CPR and first aid. Parents are notified immediately of any incidents."
        },
        {
          question: "What are your hygiene protocols?",
          answer: "We follow rigorous cleaning schedules, hand washing protocols, toy sanitization procedures, and maintain detailed health logs for all children."
        }
      ]
    },
    {
      category: "Communication",
      questions: [
        {
          question: "How will I receive updates about my child?",
          answer: "We provide daily written reports, photo updates through our parent app, and schedule regular parent-teacher conferences."
        },
        {
          question: "Can I visit during the day?",
          answer: "Parents are always welcome! We encourage visits and have an open-door policy. Please check in at the front desk when arriving."
        },
        {
          question: "How do you handle parent concerns?",
          answer: "We take all concerns seriously. Please speak with your child's teacher first, then our director if needed. We're committed to resolving issues promptly."
        }
      ]
    }
  ];

  const downloadableForms = [
    {
      title: "Enrollment Application",
      description: "Complete application for new families",
      icon: FileText,
      type: "PDF"
    },
    {
      title: "Health Information Form", 
      description: "Medical history and emergency contacts",
      icon: FileText,
      type: "PDF"
    },
    {
      title: "Photo Permission Form",
      description: "Authorization for photos and activities",
      icon: FileText,
      type: "PDF"
    },
    {
      title: "Daily Schedule Template",
      description: "Track your child's routine at home",
      icon: Calendar,
      type: "PDF"
    },
    {
      title: "Parent Handbook",
      description: "Complete guide to our policies and procedures",
      icon: BookOpen,
      type: "PDF"
    },
    {
      title: "Holiday Calendar 2024",
      description: "Important dates and closures",
      icon: Calendar,
      type: "PDF"
    }
  ];

  const blogPosts = [
    {
      title: "Supporting Your Child's Transition to Daycare",
      excerpt: "Tips and strategies to help your little one adjust to their new learning environment with confidence.",
      date: "March 15, 2024",
      category: "Parenting Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop"
    },
    {
      title: "The Importance of Play in Early Learning", 
      excerpt: "How structured and free play contribute to cognitive, social, and emotional development in young children.",
      date: "March 10, 2024",
      category: "Child Development",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      title: "Healthy Eating Habits for Toddlers",
      excerpt: "Creating positive mealtime experiences and introducing variety in your toddler's diet.",
      date: "March 5, 2024", 
      category: "Nutrition",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=300&h=200&fit=crop"
    },
    {
      title: "Preparing for Kindergarten: Skills Checklist",
      excerpt: "Essential skills and readiness indicators to help your preschooler succeed in kindergarten.",
      date: "February 28, 2024",
      category: "School Readiness", 
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop"
    },
    {
      title: "Managing Separation Anxiety",
      excerpt: "Understanding and supporting children through separation anxiety with gentle, effective strategies.",
      date: "February 20, 2024",
      category: "Parenting Tips",
      readTime: "5 min read", 
      image: "https://images.unsplash.com/photo-1517166357932-b08de3ac8cb4?w=300&h=200&fit=crop"
    },
    {
      title: "Building Independence in Young Children",
      excerpt: "Age-appropriate ways to encourage self-reliance and confidence in toddlers and preschoolers.",
      date: "February 15, 2024",
      category: "Child Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1504726175602-58942e588c00?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
            Parent Resources
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Everything you need to support your child's learning journey, 
            from enrollment forms to parenting tips and developmental guidance.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "faq", label: "FAQ", icon: Users },
              { id: "forms", label: "Forms & Documents", icon: FileText },
              { id: "blog", label: "Parenting Blog", icon: BookOpen }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeCategory === tab.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(tab.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {activeCategory === "faq" && (
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body">
                Find answers to common questions about enrollment, daily operations, and our programs.
              </p>
            </div>

            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 pb-2 border-b-2 border-primary/20">
                  {category.category}
                </h3>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left font-subheading font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground font-body leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="text-center mt-16 p-8 bg-gradient-soft rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Can't find what you're looking for? We're here to help with any questions or concerns.
              </p>
              <Button variant="cta" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Forms Section */}
      {activeCategory === "forms" && (
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Forms & <span className="text-primary">Documents</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Download enrollment forms, health documents, and helpful resources 
                to support your child's experience at Little Stars.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {downloadableForms.map((form, index) => {
                const Icon = form.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-subheading font-medium">
                        {form.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {form.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
                      {form.description}
                    </p>
                    
                    <Button variant="outline" className="w-full group">
                      <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                      Download
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-16 p-8 bg-gradient-soft rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Need Help with Forms?
              </h3>
              <p className="text-muted-foreground font-body mb-6">
                Our staff is happy to help you complete any required documentation 
                or answer questions about the enrollment process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta">
                  Schedule Enrollment Meeting
                </Button>
                <Button variant="outline">
                  Call for Assistance
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {activeCategory === "blog" && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Parenting <span className="text-primary">Blog</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Expert tips, developmental insights, and practical advice 
                to support your parenting journey and your child's growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-subheading font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground font-body mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 font-subheading font-medium group">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Blog Posts
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ParentResourcesPage;