import { motion } from "framer-motion";
import { 
  Building2, 
  Home, 
  Hotel, 
  Coffee, 
  Scissors, 
  Church, 
  CalendarDays, 
  Users, 
  Briefcase, 
  TrendingUp 
} from "lucide-react";

export function Segments() {
  const segments = [
    { icon: Building2, name: "Construtoras", desc: "Durabilidade e padronização para obras e engenharia." },
    { icon: Home, name: "Imobiliárias", desc: "Presença profissional para corretores e corretores de luxo." },
    { icon: Hotel, name: "Hotelaria", desc: "Elegância e conforto para recepção e governança." },
    { icon: Coffee, name: "Cafés Premium", desc: "Estilo sofisticado e minimalista para baristas." },
    { icon: Scissors, name: "Salões de Beleza", desc: "Conforto e identidade visual forte para profissionais." },
    { icon: Church, name: "Igrejas", desc: "Camisetas exclusivas para ministérios e congressos." },
    { icon: CalendarDays, name: "Eventos", desc: "Identificação clara e premium para staff e produção." },
    { icon: Users, name: "Staff", desc: "Uniformização de alto padrão para equipes de serviço." },
    { icon: Briefcase, name: "Empresas", desc: "Fortalecimento do employer branding interno." },
    { icon: TrendingUp, name: "Equipes Comerciais", desc: "Apresentação impecável para times de vendas." },
  ];

  return (
    <section id="segmentos" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Quem vestimos</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Feito para o seu segmento</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-6 border border-border bg-card hover:border-primary transition-colors duration-300"
              >
                <Icon className="text-foreground/40 group-hover:text-primary transition-colors duration-300 mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">{segment.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{segment.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
