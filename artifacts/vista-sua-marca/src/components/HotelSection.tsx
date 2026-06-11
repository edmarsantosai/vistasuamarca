import { motion } from "framer-motion";
import { Shirt } from "lucide-react";
import herbalImg from "@assets/image_1781196225826.png";

export function HotelSection() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shirt className="text-primary mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Camisetas padronizadas para <span className="text-primary italic">sua empresa</span>
            </h2>
            <p className="text-lg text-background/80 mb-10 leading-relaxed">
              Vista sua equipe com identidade e profissionalismo. Camisetas personalizadas com a sua marca, prontas para fortalecer a imagem do seu negócio.
            </p>
            
            <a
              href="https://wa.me/554732125395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold hover:bg-white hover:text-foreground transition-all duration-300"
              data-testid="hotel-section-cta"
            >
              Solicitar orçamento
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={herbalImg}
              alt="Camisetas personalizadas para empresas"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}