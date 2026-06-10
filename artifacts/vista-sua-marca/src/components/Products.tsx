import { motion } from "framer-motion";

import productCorporativa from "@/assets/images/product-corporativa.png";
import productEventos from "@/assets/images/product-eventos.png";
import productStaff from "@/assets/images/product-staff.png";
import productEstonada from "@/assets/images/product-estonada.png";
import productMarmorizada from "@/assets/images/product-marmorizada.png";
import productUniforme from "@/assets/images/product-uniforme.png";

export function Products() {
  const products = [
    {
      title: "Camisetas Corporativas",
      desc: "Modelagem clássica, malha penteada premium e caimento impecável para o dia a dia da sua empresa.",
      image: productCorporativa
    },
    {
      title: "Camisetas para Eventos",
      desc: "Destaque sua marca com estilo. Perfeitas para congressos, feiras e lançamentos.",
      image: productEventos
    },
    {
      title: "Camisetas para Staff",
      desc: "Identificação e conforto para quem faz acontecer nos bastidores com qualidade superior.",
      image: productStaff
    },
    {
      title: "Camisetas Estonadas",
      desc: "Toque macio, aspecto vintage e lavagem especial para marcas mais descoladas e casuais.",
      image: productEstonada
    },
    {
      title: "Camisetas Marmorizadas",
      desc: "Visual único e artesanal. A escolha certa para cafés premium e marcas de design.",
      image: productMarmorizada
    },
    {
      title: "Uniformização Premium",
      desc: "Linha completa incluindo polos de alto padrão para equipes comerciais e executivas.",
      image: productUniforme
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Nossa Linha</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">Soluções para vestir sua marca</h2>
          </div>
          <a
            href="https://wa.me/554732125395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors"
          >
            Ver catálogo completo →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-muted">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{product.desc}</p>
              <a
                href={`https://wa.me/554732125395?text=Olá, gostaria de um orçamento para: ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-0 border-b border-foreground text-foreground font-medium group-hover:text-primary group-hover:border-primary transition-all duration-300"
                data-testid={`product-btn-orcamento-${index}`}
              >
                Pedir orçamento
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
