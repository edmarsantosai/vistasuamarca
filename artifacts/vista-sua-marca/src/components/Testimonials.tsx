import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Gerente de RH, Construtora Horizonte",
      quote: "A qualidade das camisetas superou nossas expectativas. A equipe de engenharia e obras agora tem uma apresentação impecável que reflete a seriedade da nossa construtora. O caimento é perfeito e a durabilidade é excelente."
    },
    {
      name: "Rafael Nogueira",
      role: "Sócio-Fundador, Aurora Cafés Especiais",
      quote: "Estávamos cansados de uniformes genéricos que perdiam a cor rápido. A Vista Sua Marca entendeu exatamente o tom minimalista e sofisticado que queríamos para nossos baristas. É nítido o cuidado em cada costura."
    },
    {
      name: "Camila Becker",
      role: "Diretora de Eventos, Connecta Summit",
      quote: "Vestir um staff de 50 pessoas com padrão premium sempre foi um desafio. A entrega foi pontual, as malhas são macias e o visual final no evento passou muita autoridade para os participantes."
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Experiência</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Quem veste nossa marca</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 border border-border relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <div className="mb-8 relative z-10">
                <p className="text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-auto border-t border-border pt-6">
                <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-primary text-sm font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
