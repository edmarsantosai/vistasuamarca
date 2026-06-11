import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgGelo from "@assets/9d2dd8ed-ad72-4039-bd93-98943d2af7bf_1781197003959.jpeg";
import imgPreto from "@assets/e915660a-845e-4cba-bc08-02648818242e_1781197003959.jpeg";
import imgVermelho from "@assets/104b8a27-407d-4ec4-a634-acc2f19e4826_1781197003959.jpeg";
import imgAlecrim from "@assets/f7a89315-e1bf-4bb0-8d29-395dece4fb10_1781197003959.jpeg";
import imgCapuccino from "@assets/0a95f2c6-34f8-485d-a3b8-5980b9df3515_1781197003959.jpeg";
import imgVerdeMilitar from "@assets/fda6de6d-61da-4053-ab86-8d96cea47d3f_1781197003959.jpeg";
import imgBranco from "@assets/5a1c3d76-508f-4024-b6db-309a5d3f247b_1781197003959.jpeg";
import imgChumbo from "@assets/f6416950-677a-4c67-a9bb-432b5b1e714f_1781197003959.jpeg";
import imgMarinho from "@assets/c2077888-355d-4132-8092-b96def80a85b_1781197003959.jpeg";
import imgCaramelo from "@assets/be8cf1f7-8187-4f0c-b562-1a77fca59c57_1781197003959.jpeg";

const colors = [
  { id: "preto",         name: "Preto",         swatch: "#1a1a1a", img: imgPreto },
  { id: "chumbo",        name: "Chumbo",        swatch: "#4a4a4a", img: imgChumbo },
  { id: "gelo",          name: "Gelo",          swatch: "#dff0ec", img: imgGelo },
  { id: "branco",        name: "Branco",        swatch: "#f2f2f2", img: imgBranco },
  { id: "capuccino",     name: "Capuccino",     swatch: "#b8a88a", img: imgCapuccino },
  { id: "caramelo",      name: "Caramelo",      swatch: "#8b4a1e", img: imgCaramelo },
  { id: "vermelho",      name: "Vermelho",      swatch: "#c0201a", img: imgVermelho },
  { id: "alecrim",       name: "Alecrim",       swatch: "#7a9e7e", img: imgAlecrim },
  { id: "verde-militar", name: "Verde Militar", swatch: "#3a5a30", img: imgVerdeMilitar },
  { id: "marinho",       name: "Azul Marinho",  swatch: "#1a2a5e", img: imgMarinho },
];

export function SienaColors() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <section id="cores-siena" className="py-24 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Camiseta Feminina Siena
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            Cores <span className="italic text-primary">disponíveis</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-base max-w-xl mx-auto">
            Modelagem clean e malha leve. Escolha a cor ideal para uniformizar sua equipe feminina com elegância.
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
                  alt={`Camiseta Feminina Siena ${selected.name}`}
                  className="w-full max-w-sm mx-auto rounded-sm shadow-lg border border-foreground/10 object-cover"
                  data-testid="siena-color-preview"
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
            <div className="grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelected(color)}
                  data-testid={`siena-color-swatch-${color.id}`}
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
                href={`https://wa.me/554732125395?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta Feminina Siena na cor ${selected.name}. Gostaria de solicitar um orçamento.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="siena-colors-cta"
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
