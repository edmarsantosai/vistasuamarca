import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Segments } from "@/components/Segments";
import { Products } from "@/components/Products";
import { Differentials } from "@/components/Differentials";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  useEffect(() => {
    document.title = "Vista Sua Marca | Camisetas Personalizadas de Alto Padrão";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Sua marca vestida com padrão, qualidade e presença. Camisetas personalizadas premium para empresas, eventos, igrejas e muito mais.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Sua marca vestida com padrão, qualidade e presença. Camisetas personalizadas premium para empresas, eventos, igrejas e muito mais.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background selection:bg-primary/20">
      <Header />
      <main className="flex-1">
        <Hero />
        <Authority />
        <Segments />
        <Products />
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
