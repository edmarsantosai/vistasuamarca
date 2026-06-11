import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgPreto from "@assets/image_1781184936873.png";
import imgBranco from "@assets/image_1781184829387.png";
import imgOffWhite from "@assets/image_1781184923981.png";
import imgAreia from "@assets/image_1781184801705.png";
import imgMarinho from "@assets/image_1781184871143.png";
import imgMostarda from "@assets/image_1781184911047.png";
import imgVerdeMilitar from "@assets/image_1781184896895.png";
import imgVermelho from "@assets/104b8a27-407d-4ec4-a634-acc2f19e4826_1781197003959.jpeg";

const colors = [
  { id: "preto",         name: "Preto",        swatch: "#1a1a1a", img: imgPreto },
  { id: "branco",        name: "Branco",        swatch: "#f2f2f2", img: imgBranco },
  { id: "off-white",     name: "Off White",     swatch: "#f5f0e8", img: imgOffWhite },
  { id: "areia",         name: "Areia",         swatch: "#c8b89a", img: imgAreia },
  { id: "marinho",       name: "Azul Marinho",  swatch: "#1a2a5e", img: imgMarinho },
  { id: "vermelho",      name: "Vermelho",      swatch: "#c0201a", img: imgVermelho },
  { id: "mostarda",      name: "Mostarda",      swatch: "#c98010", img: imgMostarda },
  { id: "verde-militar", name: "Verde Militar", swatch: "#3a5a30", img: imgVerdeMilitar },
];

export function OversizedColors() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <section id="cores-oversized" className="py-24 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Camiseta Over Versace
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            Cores <span className="italic text-primary">disponíveis</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-base max-w-xl mx-auto">
            Modelagem oversized premium. Escolha a cor ideal para destacar sua marca com atitude.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={selected.img}
                  alt={`Over Versace ${selected.name}`}
                  className="w-full max-w-sm mx-auto rounded-sm shadow-lg border border-foreground/10 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-foreground/10 px-4 py-2 text-sm font-semibold tracking-widest uppercase text-foreground whitespace-nowrap">
                  {selected.name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-5">
              Selecione uma cor
            </p>
            <div className="grid grid-cols-4 gap-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelected(color)}
                  title={color.name}
                  className={`group flex flex-col items-center gap-2 transition-all duration-200 ${
                    selected.id === color.id ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-full block border-2 transition-all duration-200 ${
                      selected.id === color.id
                        ? "border-primary scale-110 shadow-md"
                        : "border-foreground/20 group-hover:border-foreground/50"
                    }`}
                    style={{ backgroundColor: color.swatch }}
                  />
                  <span className="text-[10px] text-center leading-tight text-foreground/70 font-medium">
                    {color.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-foreground/10">
              <a
                href={`https://wa.me/554732125395?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta Over Versace na cor ${selected.name}. Gostaria de solicitar um orçamento.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Solicitar orçamento — {selected.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
