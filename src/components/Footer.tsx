import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">★</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Little Stars</h3>
                <p className="text-sm text-white/80 font-subheading">Daycare</p>
              </div>
            </div>
            <p className="text-white/80 font-body leading-relaxed mb-6">
              Nurturing young minds with love, creativity, and care since 2008. 
              Where every child shines bright like a little star.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors font-body">About Us</Link></li>
              <li><Link to="/programs" className="text-white/80 hover:text-primary transition-colors font-body">Our Programs</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-primary transition-colors font-body">Photo Gallery</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-primary transition-colors font-body">Parent Resources</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors font-body">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/programs#infants" className="text-white/80 hover:text-primary transition-colors font-body">Infant Care (6m-1y)</Link></li>
              <li><Link to="/programs#toddlers" className="text-white/80 hover:text-primary transition-colors font-body">Toddler Program (1-3y)</Link></li>
              <li><Link to="/programs#preschool" className="text-white/80 hover:text-primary transition-colors font-body">Preschool (3-5y)</Link></li>
              <li><Link to="/programs#summer" className="text-white/80 hover:text-primary transition-colors font-body">Summer Camp</Link></li>
              <li><Link to="/programs#after-school" className="text-white/80 hover:text-primary transition-colors font-body">After School Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/80 font-body text-sm">
                  123 Sunshine Street<br />
                  Happy Valley, CA 90210
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80 font-body">(555) 123-KIDS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80 font-body">hello@littlestarsdaycare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/80 font-body text-sm">
                  Mon-Fri: 6:30 AM - 6:30 PM<br />
                  Closed Weekends
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h4 className="font-heading font-semibold text-xl mb-4">Stay Connected</h4>
            <p className="text-white/80 font-body mb-6 max-w-2xl mx-auto">
              Get parenting tips, daycare updates, and special event notifications delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-primary"
              />
              <Button variant="cta" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-white/60 font-body text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-coral fill-current" />
              <span>© 2024 Little Stars Daycare. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-white/60 font-body text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;