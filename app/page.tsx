import { type Metadata } from "next";
import { MainNavigation } from "@/components/main-navigation";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { SeoJsonLd } from "@/components/seo-json-ld";

const title =
  "Aaron Fabricio Santa Cruz | Full Stack Developer & Founder EntityX";
const description =
  "Portafolio de Aaron Fabricio Santa Cruz, Software Engineer, Full Stack Developer y Founder de EntityX, especializado en plataformas SaaS, ERP, Angular, NestJS, Next.js y soluciones digitales para negocios.";
const previewImage = "/img/projects/entityx-cover.jpeg";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Aaron Fabricio Santa Cruz",
    "Aaron Code Next",
    "Full Stack Developer",
    "Software Engineer",
    "Systems Engineer",
    "Founder EntityX",
    "CEO EntityX",
    "EntityX",
    "portafolio desarrollador",
    "portafolio full stack",
    "desarrollador full stack Bolivia",
    "software engineer Bolivia",
    "desarrollador web Bolivia",
    "desarrollo web",
    "desarrollo frontend",
    "desarrollo backend",
    "aplicaciones web",
    "plataformas SaaS",
    "ERP",
    "software de gestion",
    "soluciones digitales",
    "arquitectura de software",
    "Clean Code",
    "Next.js",
    "React",
    "Angular",
    "NestJS",
    "Node.js",
    "Yii2",
    "PHP",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "Google Maps API",
    "Flutter",
    "PWA",
    "REST API",
    "cloud software",
    "automatizacion de procesos",
    "gestion empresarial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Aaron Code Next",
    images: [
      {
        url: previewImage,
        width: 1376,
        height: 768,
        alt: "EntityX, plataforma SaaS y ERP desarrollada por Aaron Fabricio Santa Cruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [previewImage],
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <SeoJsonLd />
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
