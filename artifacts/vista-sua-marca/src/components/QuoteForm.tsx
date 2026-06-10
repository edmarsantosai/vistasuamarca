import { useState } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function QuoteForm() {
  const [segment, setSegment] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse em um orçamento.
Segmento: ${segment || "Não informado"}
Quantidade: ${quantity || "Não informado"}`;
    
    window.open(`https://wa.me/554732125395?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-background leading-tight mb-4">
              Solicite seu orçamento em menos de <span className="text-primary italic">30 segundos</span>
            </h2>
            <p className="text-background/70 text-lg">
              Preencha os dados abaixo para direcionarmos o melhor especialista para você.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/5 p-8 md:p-12 border border-background/10 backdrop-blur-sm flex flex-col md:flex-row gap-6 items-end"
          >
            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-background/80">Segmento</label>
              <Select value={segment} onValueChange={setSegment}>
                <SelectTrigger className="w-full bg-background border-background/20 text-foreground h-12">
                  <SelectValue placeholder="Selecione o segmento" />
                </SelectTrigger>
                <SelectContent className="bg-background text-foreground border-border">
                  <SelectItem value="Empresa">Empresa</SelectItem>
                  <SelectItem value="Construtora">Construtora</SelectItem>
                  <SelectItem value="Imobiliária">Imobiliária</SelectItem>
                  <SelectItem value="Hotelaria">Hotelaria</SelectItem>
                  <SelectItem value="Igreja">Igreja</SelectItem>
                  <SelectItem value="Evento">Evento</SelectItem>
                  <SelectItem value="Café Premium">Café Premium</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full space-y-2">
              <label className="text-sm font-medium text-background/80">Quantidade</label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger className="w-full bg-background border-background/20 text-foreground h-12">
                  <SelectValue placeholder="Estimativa de peças" />
                </SelectTrigger>
                <SelectContent className="bg-background text-foreground border-border">
                  <SelectItem value="Até 30 peças">Até 30 peças</SelectItem>
                  <SelectItem value="30 a 100 peças">30 a 100 peças</SelectItem>
                  <SelectItem value="100 a 300 peças">100 a 300 peças</SelectItem>
                  <SelectItem value="Acima de 300 peças">Acima de 300 peças</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-white hover:text-foreground text-primary-foreground font-bold transition-all duration-300 shrink-0"
              data-testid="quote-form-submit"
            >
              Receber orçamento pelo WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}