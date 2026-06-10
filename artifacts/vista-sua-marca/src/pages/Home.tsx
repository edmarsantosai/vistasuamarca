import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FirstImpression } from "@/components/FirstImpression";
import { Authority } from "@/components/Authority";
import { Segments } from "@/components/Segments";
import { QuoteForm } from "@/components/QuoteForm";
import { Products } from "@/components/Products";
import { CustomProduction } from "@/components/CustomProduction";
import { ExperienceAuthority } from "@/components/ExperienceAuthority";
import { TrustedBy } from "@/components/TrustedBy";
import { HotelSection } from "@/components/HotelSection";
import { EventsSection } from "@/components/EventsSection";
import { Differentials } from "@/components/Differentials";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  useEffect(() => {
    document.title = "Vista Sua Marca | Camisetas Personalizadas Premium";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Camisetas personalizadas premium para empresas, hotelaria, eventos, igrejas, construtoras e imobiliárias. Solicite seu orçamento.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Camisetas personalizadas premium para empresas, hotelaria, eventos, igrejas, construtoras e imobiliárias. Solicite seu orçamento.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background selection:bg-primary/20">
      <Header />
      <main className="flex-1">
        <Hero />
        <FirstImpression />
        <Authority />
        <Segments />
        <QuoteForm />
        <Products />
        <CustomProduction />
        <ExperienceAuthority />
        <TrustedBy />
        <HotelSection />
        <EventsSection />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
