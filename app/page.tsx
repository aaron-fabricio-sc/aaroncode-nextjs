import { MainNavigation } from "@/components/main-navigation";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";

export default function Home() {
  return (
    <div className="page-shell">
      <MainNavigation />
      <HeroSection />

      <main className="page-content">
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <StackSection />
      </main>

      <SiteFooter />
    </div>
  );
}
