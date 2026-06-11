import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgOffWhite from "@assets/81e189ff-45c7-4e74-95fc-d5e13f148221_1781197958967.jpeg";
import imgPreto from "@assets/05d1fc02-9110-47bb-8d5c-c2ad8a54cbec_1781197958967.jpeg";
import imgRosa from "@assets/dff26c1d-5ad6-4f75-bbf4-caa368963c6e_1781197958967.jpeg";
import imgAreia from "@assets/7c30edf1-15a0-491f-8e82-6ba626f94ffe_1781197958967.jpeg";
import imgAzulBebe from "@assets/ae7bb7c7-7e87-4da6-8ba7-8b021ce9304a_1781197958967.jpeg";
import imgChumbo from "@assets/65068ef1-dc26-4cc2-afb2-74ae2488d154_1781197958967.jpeg";
import imgMarinho from "@assets/da584f76-6558-45f6-b793-348806b5b59b_1781197958967.jpeg";
import imgCinzaMescla from "@assets/2d9ff115-7a99-4679-bd86-479653f693bf_1781197958967.jpeg";

const colors = [
  { id: "preto",       name: "Preto",        swatch: "#1a1a1a", img: imgPreto },
  { id: "chumbo",      name: "Chumbo",       swatch: "#3a4a5a", img: imgChumbo },
  { id: "cinza-mescla",name: "Cinza Mescla", swatch: "#9aa3a8", img: imgCinzaMescla },
  { id: "off-white",   name: "Off White",    swatch: "#f5f0e8", img: imgOffWhite },
  { id: "areia",       name: "Areia",        swatch: "#b8a878", img: imgAreia },
  { id: "rosa",        name: "Rosa",         swatch: "#f0a0b8", img: imgRosa },
  { id: "azul-bebe",   name: "Azul Bebê",   swatch: "#c8d8f0", img: imgAzulBebe },
  { id: "marinho",     name: "Azul Marinho", swatch: "#1a2a5e", img: imgMarinho },
];

export function VeronaColors() {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <section id="cores-verona" className="py-24 bg-foreground/[0.03] border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-3 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Camiseta Masculina Verona
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            Cores <span className="italic text-primary">disponíveis</span>
          </h2>
          <p className="mt-4 text-foreground/60 text-base max-w-xl mx-auto">
            Malha encorpada, acabamento superior. Escolha a cor perfeita para uniformizar sua equipe com estilo.
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
                  alt={`Camiseta Verona ${selected.name}`}
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
                href={`https://wa.me/554732125395?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta Masculina Verona na cor ${selected.name}. Gostaria de solicitar um orçamento.`)}`}
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
