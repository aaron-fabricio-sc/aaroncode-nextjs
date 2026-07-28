import { CertificationsPageContent } from "@/components/certifications-page-content";
import { SITE_TITLE } from "@/lib/site";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description:
    "Explora mis certificaciones e historial de formación continua en desarrollo web, frontend, bases de datos, arquitectura de software y herramientas del ecosistema.",
  alternates: {
    canonical: "/certificaciones",
  },
};

export default function CertificacionesPage() {
  return <CertificationsPageContent />;
}
