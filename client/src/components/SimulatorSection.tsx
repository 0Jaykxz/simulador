import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Play, Settings, Zap } from 'lucide-react';
import simulatorImage from '@assets/generated_images/Primitive_Earth_simulator_interface_1e9961cb.png';

export default function SimulatorSection() {
  const handleOpenSimulator = () => {
    window.open("https://lifeoriginsim.onrender.com/", "_blank");
;
  };

  const features = [
    {
      icon: Settings,
      title: 'Exploração',
      description: 'Explore o ambiente onde a vida começou, com uma atmosfera rica em gases como metano, amônia e dióxido de carbono'
    },
    {
      icon: Zap,
      title: 'Simule etapas',
      description: 'Observe as etapas da formação de compostos orgânicos a partir de reações químicas provocadas por relâmpagos'
    },
    {
      icon: Play,
      title: 'Compatibilidade',
      description: 'Rode o simulador em qualquer dispositivo com suporte a navegadores modernos'
    }
  ];

  return (
    <section 
      id="simulador" 
      className="py-16 md:py-20 lg:py-24 px-6"
      data-testid="section-simulator"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Simulador Online
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Nosso simulador interativo permite que você explore a atmosfera da Terra primitiva e observe as reações químicas que levaram à formação de compostos orgânicos. Atualmente, estamos completando o projeto para que sua experiência se torne ainda mais imersiva.</p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <Monitor className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold mb-2">Como usar o simulador</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>1. Pressione o botão de redirecionamento</li>
                    <li>2. Aguarde o carregamento da página</li>
                    <li>3. Observe as informações exibidas</li>
                    <li>4. Avance através das eras.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="overflow-hidden">
              <img 
                src={simulatorImage} 
                alt="Interface do simulador" 
                className="w-full h-auto"
                data-testid="img-simulator-preview"
              />
            </Card>
            
            <div className="mt-6 text-center">
              <Button 
                size="lg"
                onClick={handleOpenSimulator}
                className="text-lg px-8"
                data-testid="button-open-simulator"
              >
                <Play className="w-5 h-5 mr-2" />
                Abrir Simulador
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                O simulador abrirá em uma nova janela
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
