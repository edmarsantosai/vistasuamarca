import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Differentials() {
  const items = [
    "Camisetas de alto padrão",
    "Malhas selecionadas",
    "Estampas duráveis",
    "Visual profissional",
    "Produção para pequenas e grandes equipes",
    "Personalização conforme sua identidade visual",
    "Entrega para todo o Brasil",
    "Atendimento direto pelo WhatsApp"
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif">Por que escolher a <span className="text-primary italic">Vista Sua Marca?</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 border border-background/10 hover:border-primary/50 transition-colors"
            >
              <Star className="text-primary shrink-0 mt-1" size={20} />
              <p className="text-background/90 font-medium leading-tight">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
