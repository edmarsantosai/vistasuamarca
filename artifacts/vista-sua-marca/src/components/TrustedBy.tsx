import { motion } from "framer-motion";

export function TrustedBy() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif text-foreground mb-4"
          >
            Empresas que confiam em nós
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {placeholders.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="aspect-[3/2] border border-foreground/20 rounded flex items-center justify-center bg-muted/30"
            >
              <span className="text-foreground/40 text-sm font-medium">Logo Cliente</span>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-foreground/50 text-sm mt-8"
        >
          Logos em breve — estrutura pronta para atualização
        </motion.p>
      </div>
    </section>
  );
}