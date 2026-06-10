import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Authority() {
  const highlights = [
    "Padronização Profissional",
    "Qualidade Premium",
    "Atendimento Consultivo"
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Muito além de uma <span className="text-primary italic">camiseta.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              A camiseta da sua equipe comunica organização, cuidado e profissionalismo antes mesmo da primeira palavra. Elevamos o padrão da sua uniformização com malhas selecionadas e acabamento impecável.
            </p>
            
            <div className="flex flex-col gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
