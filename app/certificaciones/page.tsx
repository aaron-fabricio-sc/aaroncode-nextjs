import { CertificationsPageContent } from "@/components/certifications-page-content";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Certificaciones | Aarón Fabricio - Software Engineer & Full Stack Developer",
  description:
    "Explora mis certificaciones e historial de formación continua en desarrollo web, frontend, bases de datos, arquitectura de software y herramientas del ecosistema.",
};

export default function CertificacionesPage() {
  return <CertificationsPageContent />;
}
