import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function EventsSection() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/5] bg-muted border border-border relative order-2 md:order-1"
          >
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-foreground/40 font-medium tracking-wide uppercase text-sm">Imagem Eventos</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <CalendarDays className="text-primary mb-6" size={48} />
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Eventos que fortalecem sua <span className="text-primary italic">marca</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
              Camisetas personalizadas para staff, feiras, congressos, lançamentos e eventos corporativos.
            </p>
            
            <a
              href="https://wa.me/554732125395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="events-section-cta"
            >
              Solicitar orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}