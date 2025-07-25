import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProgramsPreview from "@/components/ProgramsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <ProgramsPreview />
      <TestimonialsSection />
      <ContactForm />
    </main>
  );
};

export default HomePage;