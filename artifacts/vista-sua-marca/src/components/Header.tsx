import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Segmentos", href: "#segmentos" },
    { name: "Produtos", href: "#produtos" },
    { name: "Como Funciona", href: "#como-funciona" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#inicio" className="flex items-center" aria-label="Vista Sua Marca">
          <img src={logo} alt="Vista Sua Marca" className="h-9 md:h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/554732125395"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="header-btn-orcamento"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="header-btn-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/554732125395"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center px-6 py-3 bg-foreground text-background text-base font-medium hover:bg-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
