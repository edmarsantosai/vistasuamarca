import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Você chama no WhatsApp", desc: "Atendimento humano e direto." },
    { num: "02", title: "Envia sua logo ou ideia", desc: "Analisamos sua necessidade visual." },
    { num: "03", title: "Definimos modelo e cor", desc: "Opções alinhadas à sua marca." },
    { num: "04", title: "Preparamos o orçamento", desc: "Proposta clara e transparente." },
    { num: "05", title: "Produzimos e entregamos", desc: "Qualidade premium na sua porta." },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Processo</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Como Funciona</h2>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-border" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-[1px] bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex md:block items-start gap-6 md:gap-0"
              >
                <div className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 md:mb-8 rounded-full bg-background border border-primary text-primary font-serif text-lg md:text-xl font-bold bg-background">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 mt-2 md:mt-0">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
