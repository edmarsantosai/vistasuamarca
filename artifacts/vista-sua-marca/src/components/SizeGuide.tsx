import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import milanoPng from "@assets/image_1781184332205.png";
import oversizedPng from "@assets/image_1781184351197.png";
import venezaPng from "@assets/image_1781184370002.png";
import veronaPng from "@assets/image_1781184391592.png";

const models = [
  { id: "milano", label: "Milano", img: milanoPng },
  { id: "oversized", label: "Over Versace", img: oversizedPng },
  { id: "veneza", label: "Feminina Veneza", img: venezaPng },
  { id: "verona", label: "Verona", img: veronaPng },
];

export function SizeGuide() {
  const [active, setActive] = useState("milano");

  const current = models.find((m) => m.id === active)!;

  return (
    <section id="tabela-de-tamanhos" className="py-24 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-4 bg-background">
            Guia de Tamanhos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            Tabela de <span className="italic text-primary">medidas</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-base max-w-xl mx-auto">
            Todas as medidas estão em centímetros. O tamanho pode sofrer alteração de até 2 cm por conta da fabricação.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActive(model.id)}
              data-testid={`size-guide-tab-${model.id}`}
              className={`px-6 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border ${
                active === model.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/60 hover:text-foreground"
              }`}
            >
              {model.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center"
          >
            <img
              src={current.img}
              alt={`Tabela de medidas ${current.label}`}
              className="max-w-full w-full md:max-w-2xl rounded-sm shadow-lg border border-foreground/10"
              data-testid={`size-guide-img-${active}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
