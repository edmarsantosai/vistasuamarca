import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function CustomProduction() {
  const highlights = [
    "Pequenas equipes",
    "Grandes empresas",
    "Eventos corporativos",
    "Produção recorrente"
  ];

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Produção <span className="text-primary italic">sob medida</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Atendemos desde pequenas equipes até grandes operações, sempre com o mesmo padrão de qualidade e acabamento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square bg-muted border border-border flex items-center justify-center p-8"
          >
            <div className="text-center">
              <span className="text-5xl font-serif text-primary block mb-2">+1M</span>
              <p className="text-foreground/70 uppercase tracking-widest text-sm font-semibold">Peças entregues</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}