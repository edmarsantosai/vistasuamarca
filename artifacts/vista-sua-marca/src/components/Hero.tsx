import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero.png";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-0 md:pb-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10 md:w-2/3"></div>
        <div className="absolute inset-0 bg-background/40 z-10 md:hidden"></div>
        <img 
          src={heroImg} 
          alt="Equipe corporativa com camisetas premium Vista Sua Marca" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-6 bg-background/50 backdrop-blur-sm">
              Identidade Visual Corporativa
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Sua marca vestida com <span className="italic text-primary">padrão, qualidade e presença.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed">
              Camisetas personalizadas de alto padrão para empresas, eventos, igrejas, hotelaria, construtoras, imobiliárias, cafés premium e equipes que valorizam sua identidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/554732125395"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                data-testid="hero-btn-orcamento"
              >
                Solicitar orçamento
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://wa.me/554732125395"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-base font-medium hover:bg-[#20bd5a] transition-all duration-300"
                data-testid="hero-btn-whatsapp"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
