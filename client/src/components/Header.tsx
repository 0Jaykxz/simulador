import { useState, useEffect } from 'react';
import { Beaker } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Beaker className="w-7 h-7 text-primary" />
          <h1 className="font-heading font-bold text-xl md:text-2xl">
            Experimento de Densidade
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection('experimento')}
            className="px-4 py-2 rounded-md font-medium hover-elevate active-elevate-2"
            data-testid="button-nav-experiment"
          >
            O Experimento
          </button>
          <button
            onClick={() => scrollToSection('quiz')}
            className="px-4 py-2 rounded-md font-medium hover-elevate active-elevate-2"
            data-testid="button-nav-quiz"
          >
            Quiz
          </button>
          <button
            onClick={() => scrollToSection('simulador')}
            className="px-4 py-2 rounded-md font-medium hover-elevate active-elevate-2"
            data-testid="button-nav-simulator"
          >
            Simulador
          </button>
        </nav>
      </div>
    </header>
  );
}
