import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 border border-primary/40 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Conheça a Vista Sua Marca
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-background leading-tight">
            Veja nossa <span className="italic text-primary">qualidade</span> em ação
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-sm overflow-hidden shadow-2xl border border-background/10"
               style={{ aspectRatio: "16/9" }}>
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              data-testid="apresentacao-video"
            >
              <source src="/video-apresentacao.mov" type="video/quicktime" />
              <source src="/video-apresentacao.mov" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/554732125395"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="video-section-cta"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
