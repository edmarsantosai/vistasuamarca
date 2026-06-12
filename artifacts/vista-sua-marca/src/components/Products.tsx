import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Card images ──────────────────────────────────────────────────────────────
import imgVeronaCard from "@assets/05d1fc02-9110-47bb-8d5c-c2ad8a54cbec_1781197958967.jpeg";
import imgSienaCard from "@assets/e915660a-845e-4cba-bc08-02648818242e_1781197003959.jpeg";

// ── Milano color images ───────────────────────────────────────────────────────
import mPreto from "@assets/image_1781184936873.png";
import mChumbo from "@assets/image_1781184844442.png";
import mCinzaMescla from "@assets/image_1781184884361.png";
import mBranco from "@assets/image_1781184829387.png";
import mOffWhite from "@assets/image_1781184923981.png";
import mAreia from "@assets/image_1781184801705.png";
import mAvela from "@assets/image_1781184815573.png";
import mMostarda from "@assets/image_1781184911047.png";
import mAlecrim from "@assets/image_1781184789288.png";
import mVerdeMilitar from "@assets/image_1781184896895.png";
import mIndigo from "@assets/image_1781184857262.png";
import mAzulBebe from "@assets/image_1781198729767.jpeg";
import mMarinho from "@assets/image_1781184871143.png";

// ── Verona color images ───────────────────────────────────────────────────────
import vPreto from "@assets/05d1fc02-9110-47bb-8d5c-c2ad8a54cbec_1781197958967.jpeg";
import vOffWhite from "@assets/81e189ff-45c7-4e74-95fc-d5e13f148221_1781197958967.jpeg";
import vRosa from "@assets/dff26c1d-5ad6-4f75-bbf4-caa368963c6e_1781197958967.jpeg";
import vAreia from "@assets/7c30edf1-15a0-491f-8e82-6ba626f94ffe_1781197958967.jpeg";
import vAzulBebe from "@assets/ae7bb7c7-7e87-4da6-8ba7-8b021ce9304a_1781197958967.jpeg";
import vChumbo from "@assets/65068ef1-dc26-4cc2-afb2-74ae2488d154_1781197958967.jpeg";
import vMarinho from "@assets/da584f76-6558-45f6-b793-348806b5b59b_1781197958967.jpeg";
import vCinzaMescla from "@assets/2d9ff115-7a99-4679-bd86-479653f693bf_1781197958967.jpeg";

// ── Siena color images ────────────────────────────────────────────────────────
import sPreto from "@assets/e915660a-845e-4cba-bc08-02648818242e_1781197003959.jpeg";
import sChumbo from "@assets/f6416950-677a-4c67-a9bb-432b5b1e714f_1781197003959.jpeg";
import sOffWhite from "@assets/9d2dd8ed-ad72-4039-bd93-98943d2af7bf_1781197003959.jpeg";
import sBranco from "@assets/5a1c3d76-508f-4024-b6db-309a5d3f247b_1781197003959.jpeg";
import sAreia from "@assets/0a95f2c6-34f8-485d-a3b8-5980b9df3515_1781197003959.jpeg";
import sAvela from "@assets/be8cf1f7-8187-4f0c-b562-1a77fca59c57_1781197003959.jpeg";
import sVermelho from "@assets/104b8a27-407d-4ec4-a634-acc2f19e4826_1781197003959.jpeg";
import sAlecrim from "@assets/f7a89315-e1bf-4bb0-8d29-395dece4fb10_1781197003959.jpeg";
import sVerdeMilitar from "@assets/fda6de6d-61da-4053-ab86-8d96cea47d3f_1781197003959.jpeg";
import sMarinho from "@assets/c2077888-355d-4132-8092-b96def80a85b_1781197003959.jpeg";

// ── Oversized color images ────────────────────────────────────────────────────
import oPreto        from "@assets/452b0eca-fe0b-4d37-9648-60ad70157da9_1781288679680.jpeg";
import oBranco       from "@assets/053f2e29-a77d-4df2-8074-08a153698605_1781288679680.jpeg";
import oOffWhite     from "@assets/7d3990af-f65c-463c-834d-b6618dbe223f_1781288679680.jpeg";
import oAreia        from "@assets/f81ab68b-fd3b-48bd-a4b9-6c6cccfa74fe_1781288679680.jpeg";
import oMarinho      from "@assets/a866f3e2-eb4b-426c-87e1-8951a7f1f57c_1781288679680.jpeg";
import oVermelho     from "@assets/648befd5-2c27-4a81-8fd2-ae10d250d93d_1781288679680.jpeg";
import oMostarda     from "@assets/0db75859-37f3-4d76-89ee-48b7e949edfd_1781288679680.jpeg";
import oVerdeMilitar from "@assets/ffa64f50-7463-41be-b610-a91614d286ea_1781288679680.jpeg";
import oLaranja      from "@assets/46853aca-4c50-4c22-94d8-474598d4e7f4_1781288679680.jpeg";

// ── Size chart images ─────────────────────────────────────────────────────────
import sizeMilano from "@assets/image_1781184332205.png";
import sizeOversized from "@assets/image_1781184351197.png";
import sizeVeneza from "@assets/image_1781184370002.png";
import sizeVerona from "@assets/image_1781184391592.png";
import sizeSiena from "@assets/9529b87a-1de3-442a-9b18-2831dd2a10f3_1781197003959.jpeg";

const WA = "https://wa.me/554732125395";

type Color = { id: string; name: string; swatch: string; img: string };

interface Product {
  id: string;
  name: string;
  badge: string | null;
  desc: string;
  img: string;
  colors: Color[];
  sizeImg: string;
  linha: "masculina" | "feminina";
  swatchesOnly?: boolean;
}

const products: Product[] = [
  {
    id: "milano",
    name: "Milano",
    badge: "Mais vendida",
    desc: "Malha premium de alta gramatura com caimento estruturado. Ideal para uniformes corporativos, hotelaria e eventos que exigem presença e acabamento impecável.",
    img: mPreto,
    sizeImg: sizeMilano,
    linha: "masculina",
    colors: [
      { id: "preto",        name: "Preto",        swatch: "#1a1a1a", img: mPreto },
      { id: "chumbo",       name: "Chumbo",        swatch: "#4a4a4a", img: mChumbo },
      { id: "cinza-mescla", name: "Cinza Mescla",  swatch: "#9e9e9e", img: mCinzaMescla },
      { id: "branco",       name: "Branco",        swatch: "#e8e8f0", img: mBranco },
      { id: "off-white",    name: "Off White",     swatch: "#f5f0e8", img: mOffWhite },
      { id: "areia",        name: "Areia",         swatch: "#c8b89a", img: mAreia },
      { id: "avela",        name: "Avelã",         swatch: "#8b3a1e", img: mAvela },
      { id: "mostarda",     name: "Mostarda",      swatch: "#c98010", img: mMostarda },
      { id: "alecrim",      name: "Alecrim",       swatch: "#7a9e7e", img: mAlecrim },
      { id: "verde-militar",name: "Verde Militar", swatch: "#3a5a30", img: mVerdeMilitar },
      { id: "indigo",       name: "Índigo",        swatch: "#4a7aaa", img: mIndigo },
      { id: "azul-bebe",    name: "Azul Bebê",    swatch: "#a8cce8", img: mAzulBebe },
      { id: "marinho",      name: "Azul Marinho",  swatch: "#1a2a5e", img: mMarinho },
    ],
  },
  {
    id: "verona",
    name: "Verona",
    badge: null,
    desc: "Modelagem slim com malha penteada com elastano e toque suave. Perfeita para equipes comerciais, recepção e ambientes que pedem elegância no dia a dia.",
    img: imgVeronaCard,
    sizeImg: sizeVerona,
    linha: "masculina",
    colors: [
      { id: "preto",        name: "Preto",        swatch: "#1a1a1a", img: vPreto },
      { id: "chumbo",       name: "Chumbo",       swatch: "#3a4a5a", img: vChumbo },
      { id: "cinza-mescla", name: "Cinza Mescla", swatch: "#9aa3a8", img: vCinzaMescla },
      { id: "off-white",    name: "Off White",    swatch: "#f5f0e8", img: vOffWhite },
      { id: "areia",        name: "Areia",        swatch: "#b8a878", img: vAreia },
      { id: "rosa",         name: "Rosa",         swatch: "#f0a0b8", img: vRosa },
      { id: "azul-bebe",    name: "Azul Bebê",   swatch: "#c8d8f0", img: vAzulBebe },
      { id: "marinho",      name: "Azul Marinho", swatch: "#1a2a5e", img: vMarinho },
    ],
  },
  {
    id: "over-versace",
    name: "Oversized",
    badge: null,
    desc: "Corte amplo e moderno, com ombro caído e malha encorpada. A escolha para marcas criativas, cafés premium, eventos e equipes com identidade autoral.",
    img: oPreto,
    sizeImg: sizeOversized,
    linha: "masculina",
    colors: [
      { id: "preto",         name: "Preto",        swatch: "#1a1a1a", img: oPreto },
      { id: "branco",        name: "Branco",       swatch: "#f2f2f2", img: oBranco },
      { id: "off-white",     name: "Off White",    swatch: "#f5f0e8", img: oOffWhite },
      { id: "areia",         name: "Areia",        swatch: "#c8b89a", img: oAreia },
      { id: "marinho",       name: "Azul Marinho", swatch: "#1a2a5e", img: oMarinho },
      { id: "vermelho",      name: "Vermelho",     swatch: "#c0201a", img: oVermelho },
      { id: "mostarda",      name: "Mostarda",     swatch: "#c98010", img: oMostarda },
      { id: "verde-militar", name: "Verde Militar",swatch: "#3a5a30", img: oVerdeMilitar },
      { id: "mandarim",      name: "Mandarim",     swatch: "#f07030", img: oLaranja },
    ],
  },
  {
    id: "veneza",
    name: "Veneza",
    badge: null,
    desc: "Modelagem feminina com caimento delicado e corte valorizado. Confortável e sofisticada para recepção, hotelaria, salões de beleza e equipes mistas.",
    img: sOffWhite,
    sizeImg: sizeVeneza,
    linha: "feminina",
    colors: [],
  },
  {
    id: "siena",
    name: "Siena",
    badge: null,
    desc: "Linha feminina com modelagem clean e malha leve. Elegante para uniformes de atendimento, eventos corporativos e equipes que prezam por leveza e presença.",
    img: imgSienaCard,
    sizeImg: sizeSiena,
    linha: "feminina",
    colors: [
      { id: "preto",         name: "Preto",        swatch: "#1a1a1a", img: sPreto },
      { id: "chumbo",        name: "Chumbo",       swatch: "#4a4a4a", img: sChumbo },
      { id: "off-white",     name: "Off White",    swatch: "#dff0ec", img: sOffWhite },
      { id: "branco",        name: "Branco",       swatch: "#f2f2f2", img: sBranco },
      { id: "areia",         name: "Areia",        swatch: "#b8a88a", img: sAreia },
      { id: "avela",         name: "Avelã",        swatch: "#8b4a1e", img: sAvela },
      { id: "vermelho",      name: "Vermelho",     swatch: "#c0201a", img: sVermelho },
      { id: "alecrim",       name: "Alecrim",      swatch: "#7a9e7e", img: sAlecrim },
      { id: "verde-militar", name: "Verde Militar",swatch: "#3a5a30", img: sVerdeMilitar },
      { id: "marinho",       name: "Azul Marinho", swatch: "#1a2a5e", img: sMarinho },
    ],
  },
];

function ProductPanel({ product }: { product: Product }) {
  const hasColors = product.colors.length > 0;
  const [tab, setTab] = useState<"cores" | "medidas">(hasColors ? "cores" : "medidas");
  const [colorIdx, setColorIdx] = useState(0);
  const selectedColor = product.colors[colorIdx];

  if (product.swatchesOnly && hasColors) {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="border-t border-foreground/10 pt-10 pb-12 mt-2">
          <h3 className="text-lg font-serif font-bold text-foreground mb-8">
            Camiseta {product.name}
          </h3>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src={product.sizeImg}
                alt={`Tabela de medidas ${product.name}`}
                className="w-full rounded-sm shadow border border-foreground/10"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground/40 mb-5">
                Cores disponíveis
              </p>
              <div className="grid grid-cols-4 gap-4 mb-8">
                {product.colors.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setColorIdx(i)}
                    title={c.name}
                    className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${
                      colorIdx === i ? "opacity-100" : "opacity-55 hover:opacity-85"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-full block border-2 transition-all duration-200 ${
                        colorIdx === i
                          ? "border-primary scale-110 shadow"
                          : "border-foreground/20 hover:border-foreground/40"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                    <span className="text-[9px] text-center leading-tight text-foreground/60 font-medium">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
              <a
                href={`${WA}?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta ${product.name} na cor ${selectedColor.name}. Gostaria de solicitar um orçamento.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-foreground text-background text-xs font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                translate="no"
              >
                Pedir orçamento — {selectedColor.name}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="border-t border-foreground/10 pt-10 pb-12 mt-2">
        <div className="flex items-center gap-2 mb-8">
          <h3 className="text-lg font-serif font-bold text-foreground">
            Camiseta {product.name}
          </h3>
          {hasColors && (
            <div className="flex gap-1 ml-auto">
              <button
                onClick={() => setTab("cores")}
                className={`px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-200 ${
                  tab === "cores"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/50 border-foreground/20 hover:border-foreground/50"
                }`}
              >
                Paleta
              </button>
              <button
                onClick={() => setTab("medidas")}
                className={`px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-200 ${
                  tab === "medidas"
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground/50 border-foreground/20 hover:border-foreground/50"
                }`}
              >
                Medidas
              </button>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {tab === "cores" && hasColors ? (
            <motion.div
              key="cores"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-10 items-start"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedColor.id}
                    src={selectedColor.img}
                    alt={`${product.name} ${selectedColor.name}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-w-xs mx-auto rounded-sm shadow object-cover border border-foreground/10"
                  />
                </AnimatePresence>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-foreground/10 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-foreground whitespace-nowrap">
                  {selectedColor.name}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground/40 mb-4">
                  Selecione uma cor
                </p>
                <div className="grid grid-cols-5 gap-3 mb-8">
                  {product.colors.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setColorIdx(i)}
                      title={c.name}
                      className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${
                        colorIdx === i ? "opacity-100" : "opacity-55 hover:opacity-85"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-full block border-2 transition-all duration-200 ${
                          colorIdx === i
                            ? "border-primary scale-110 shadow"
                            : "border-foreground/20 hover:border-foreground/40"
                        }`}
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span className="text-[9px] text-center leading-tight text-foreground/60 font-medium">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta ${product.name} na cor ${selectedColor.name}. Gostaria de solicitar um orçamento.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-foreground text-background text-xs font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  translate="no"
                >
                  Pedir orçamento — {selectedColor.name}
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="medidas"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <img
                src={product.sizeImg}
                alt={`Tabela de medidas ${product.name}`}
                className="w-full max-w-2xl rounded-sm shadow border border-foreground/10"
              />
              <a
                href={`${WA}?text=${encodeURIComponent(`Olá! Tenho interesse na Camiseta ${product.name}. Gostaria de solicitar um orçamento.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-background text-xs font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                translate="no"
              >
                Pedir orçamento — {product.name}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ProductCard({
  product,
  index,
  isActive,
  onToggle,
}: {
  product: Product;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className="group w-full text-left"
        data-testid={`product-card-${product.id}`}
      >
        <div className={`relative aspect-[3/4] overflow-hidden mb-4 bg-muted transition-all duration-300 ${isActive ? "ring-2 ring-primary" : ""}`}>
          <img
            src={product.img}
            alt={`Camiseta ${product.name}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-primary/10" : "bg-black/10 group-hover:bg-transparent"}`} />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {product.badge}
            </span>
          )}
          <span className={`absolute bottom-4 right-4 text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 border transition-all duration-300 ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-background/80 text-foreground border-foreground/20 group-hover:border-foreground/60"}`}>
            {isActive ? "Fechar ↑" : "Ver cores & medidas ↓"}
          </span>
        </div>
        <h3 className="text-lg font-serif font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-foreground/60 text-sm leading-relaxed">{product.desc}</p>
      </button>
    </motion.div>
  );
}

export function Products() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  const masculinas = products.filter((p) => p.linha === "masculina");
  const femininas = products.filter((p) => p.linha === "feminina");

  return (
    <section id="produtos" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Nossa Linha
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">
              Camisetas base para <span className="italic text-primary">personalização</span>
            </h2>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary text-sm font-semibold transition-colors shrink-0"
            >
              Falar com um especialista →
            </a>
          </div>
        </motion.div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/40">
              Linha Masculina
            </span>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masculinas.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                isActive={activeId === p.id}
                onToggle={() => toggle(p.id)}
              />
            ))}
          </div>
          <AnimatePresence>
            {activeId && masculinas.find((p) => p.id === activeId) && (
              <ProductPanel
                key={activeId}
                product={products.find((p) => p.id === activeId)!}
              />
            )}
          </AnimatePresence>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/40">
              Linha Feminina
            </span>
            <div className="flex-1 h-px bg-foreground/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {femininas.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                isActive={activeId === p.id}
                onToggle={() => toggle(p.id)}
              />
            ))}
          </div>
          <AnimatePresence>
            {activeId && femininas.find((p) => p.id === activeId) && (
              <ProductPanel
                key={activeId}
                product={products.find((p) => p.id === activeId)!}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
