import { motion } from "framer-motion";

export function ExperienceAuthority() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif leading-tight mb-6"
          >
            Experiência que gera <span className="text-primary italic">confiança</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-background/80 leading-relaxed"
          >
            Mais de 30 anos de experiência no setor têxtil ajudando empresas a apresentar sua marca com mais profissionalismo.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full aspect-video md:aspect-[21/9] bg-background/5 border border-background/20 flex items-center justify-center"
        >
          <span className="text-background/40 font-medium tracking-wide uppercase text-sm">Foto da equipe em breve</span>
        </motion.div>
      </div>
    </section>
  );
}