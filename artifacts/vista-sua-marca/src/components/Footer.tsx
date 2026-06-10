import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Vista Sua Marca<span className="text-primary">.</span>
            </h3>
            <p className="text-foreground/70 max-w-sm mb-6 text-lg italic font-serif">
              "Vista sua marca. Valorize sua equipe. Impressione seu cliente."
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/5547999990000" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                  <Phone size={18} />
                  (47) 99999-0000
                </a>
              </li>
              <li>
                <a href="mailto:contato@vistasuamarca.com.br" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                  <Mail size={18} />
                  contato@vistasuamarca.com.br
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Social & Local</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors">
                  <Instagram size={18} />
                  @vistasuamarca
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <MapPin size={18} className="shrink-0" />
                Brusque - SC
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Vista Sua Marca. Todos os direitos reservados.</p>
          <p>Feito para marcas com propósito.</p>
        </div>
      </div>
    </footer>
  );
}
