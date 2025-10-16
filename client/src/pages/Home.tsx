import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { VideoSection } from "@/components/VideoSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import SolarSuccessStories from "@/components/SolarSuccessStories";
import { SolarCalculator } from "@/components/SolarCalculator";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <AboutSection />
      <ProjectsGallery />
      <SolarSuccessStories />
      <SolarCalculator />
      <ContactSection />
    </div>
  );
}
