import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-32 bg-foreground text-background text-center px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Pronto para vestir sua marca com mais <span className="text-primary italic">presença?</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforme sua equipe em uma extensão da sua identidade visual com camisetas personalizadas de alto padrão.
          </p>
          <a
            href="https://wa.me/5547999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground text-lg font-bold hover:bg-white hover:text-foreground transition-all duration-300"
            data-testid="final-cta-btn"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
