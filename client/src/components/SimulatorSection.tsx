import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Play, Settings, BarChart3 } from 'lucide-react';
import simulatorImage from '@assets/generated_images/Online_simulator_interface_preview_49b2a99b.png';

export default function SimulatorSection() {
  const handleOpenSimulator = () => {
    console.log('Abrindo simulador...');
  };

  const features = [
    {
      icon: Settings,
      title: 'Ajuste as propriedades',
      description: 'Modifique a densidade de cada líquido e veja como as camadas mudam'
    },
    {
      icon: Play,
      title: 'Simule em tempo real',
      description: 'Adicione líquidos na ordem que desejar e observe o resultado instantaneamente'
    },
    {
      icon: BarChart3,
      title: 'Visualize os dados',
      description: 'Acompanhe gráficos com valores de densidade e massa de cada camada'
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
          Explore o experimento virtualmente! Teste diferentes combinações de líquidos e entenda melhor os conceitos de densidade.
        </p>

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
                    <li>1. Selecione os líquidos que deseja adicionar</li>
                    <li>2. Ajuste a densidade de cada um usando os controles</li>
                    <li>3. Clique em "Adicionar" para ver a camada se formar</li>
                    <li>4. Experimente diferentes combinações e ordens</li>
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
