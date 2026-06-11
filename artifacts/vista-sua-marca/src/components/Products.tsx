import { motion } from "framer-motion";
import imgMilano from "@assets/image_1781196225826.png";
import imgVerona from "@assets/05d1fc02-9110-47bb-8d5c-c2ad8a54cbec_1781197958967.jpeg";
import imgOversized from "@assets/image_1781184351197.png";
import imgVeneza from "@assets/image_1781184370002.png";
import productSiena from "@assets/e915660a-845e-4cba-bc08-02648818242e_1781197003959.jpeg";

const WA = "https://wa.me/554732125395";

const masculinas = [
  {
    id: "milano",
    name: "Milano",
    badge: "Mais vendida",
    desc: "Malha premium de alta gramatura com caimento estruturado. Ideal para uniformes corporativos, hotelaria e eventos que exigem presença e acabamento impecável.",
    img: imgMilano,
  },
  {
    id: "verona",
    name: "Verona",
    badge: null,
    desc: "Modelagem slim com malha penteada com elastano e toque suave. Perfeita para equipes comerciais, recepção e ambientes que pedem elegância no dia a dia.",
    img: imgVerona,
  },
  {
    id: "over-versace",
    name: "Over Versace",
    badge: "Oversized",
    desc: "Corte amplo e moderno, com ombro caído e malha encorpada. A escolha para marcas criativas, cafés premium, eventos e equipes com identidade autoral.",
    img: imgOversized,
  },
];

const femininas = [
  {
    id: "veneza",
    name: "Veneza",
    badge: null,
    desc: "Modelagem feminina com caimento delicado e corte valorizado. Confortável e sofisticada para recepção, hotelaria, salões de beleza e equipes mistas.",
    img: imgVeneza,
  },
  {
    id: "siena",
    name: "Siena",
    badge: null,
    desc: "Linha feminina com modelagem clean e malha leve. Elegante para uniformes de atendimento, eventos corporativos e equipes que prezam por leveza e presença.",
    img: productSiena,
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof masculinas)[0];
  index: number;
}) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-muted">
        <img
          src={product.img}
          alt={`Camiseta ${product.name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
      </div>
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
        {product.name}
      </h3>
      <p className="text-foreground/65 text-sm leading-relaxed mb-5">
        {product.desc}
      </p>
      <a
        href={`${WA}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a Camiseta ${product.name}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block py-2 px-0 border-b border-foreground text-foreground text-sm font-semibold group-hover:text-primary group-hover:border-primary transition-all duration-300"
        data-testid={`product-cta-${product.id}`}
      >
        Pedir orçamento
      </a>
    </motion.div>
  );
}

export function Products() {
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
            <span className="text-xs text-foreground/30">
              {masculinas.length} modelos
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masculinas.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/40">
              Linha Feminina
            </span>
            <div className="flex-1 h-px bg-foreground/10" />
            <span className="text-xs text-foreground/30">
              {femininas.length} modelos
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {femininas.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
