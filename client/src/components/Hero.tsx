import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Colorful_density_experiment_hero_image_5b291779.png';

export default function Hero() {
  const scrollToExperiment = () => {
    const element = document.getElementById('experimento');
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
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Torre de Densidade
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Descubra como líquidos de diferentes densidades se comportam e criam camadas coloridas fascinantes
        </p>
        <Button 
          size="lg"
          onClick={scrollToExperiment}
          className="text-lg px-8 bg-primary/90 backdrop-blur-sm hover:bg-primary border border-primary-border"
          data-testid="button-explore-experiment"
        >
          Explorar o Experimento
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
