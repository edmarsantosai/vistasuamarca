import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function FirstImpression() {
  const cards = [
    "Mais credibilidade",
    "Mais profissionalismo",
    "Mais valorização da marca"
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-6"
          >
            Sua equipe é a primeira impressão da sua <span className="text-primary italic">marca.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 leading-relaxed"
          >
            Uma equipe bem apresentada transmite organização, confiança e profissionalismo. Criamos camisetas personalizadas que fortalecem a imagem da sua empresa em cada atendimento.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="p-8 border border-border bg-card flex flex-col items-center text-center group hover:border-primary transition-all duration-300"
            >
              <CheckCircle2 className="text-primary mb-4" size={36} />
              <span className="text-xl font-medium">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}