import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
import AchievementsSection from "./components/AchievementsSection";
import { MenuMobile } from "./components/MenuMobile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] z-[10]">
      <Navbar />
      <MenuMobile />
      <div class="container mx-auto py-4 px-12 relative">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
