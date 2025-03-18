import { AboutSection } from "@/sections/About";
import  Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Services } from "@/sections/Services";

export default function Home() {
  return (
    <div>

      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <Services />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

    </div>
  );
}
