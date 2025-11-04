import { Card } from '@/components/ui/card';
import { Target, FlaskConical, ClipboardList, Lightbulb } from 'lucide-react';
import materialsImage from '@assets/generated_images/Primitive_Earth_experiment_materials_9b288385.png';

export default function ExperimentSection() {
  const steps = [
    {
      number: 1,
      title: 'Prepare o recipiente',
      description: 'Use um frasco de vidro transparente para simular a atmosfera primitiva. Adicione água para representar o oceano primordial.'
    },
    {
      number: 2,
      title: 'Adicione os gases',
      description: 'Introduza gases como metano (CH₄), amônia (NH₃) e vapor d\'água, simulando a atmosfera sem oxigênio.'
    },
    {
      number: 3,
      title: 'Simule relâmpagos',
      description: 'Use eletrodos para criar descargas elétricas, imitando os relâmpagos que forneciam energia na Terra primitiva.'
    },
    {
      number: 4,
      title: 'Observe as reações',
      description: 'Após algumas horas, observe a formação de compostos orgânicos simples, os blocos fundamentais da vida.'
    }
  ];

  return (
    <section 
      id="experimento" 
      className="py-16 md:py-20 lg:py-24 px-6"
      data-testid="section-experiment"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Como recriar condições da Terra Primitiva
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          Recriando as condições da Terra há 4 bilhões de anos, quando a atmosfera era tóxica e não havia oxigênio livre.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Objetivo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simular a atmosfera redutora da Terra primitiva e demonstrar como moléculas orgânicas simples podem se formar a partir de gases inorgânicos.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-md">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Materiais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Frasco de vidro, água, metano (CH₄), amônia (NH₃), hidrogênio (H₂), eletrodos, fonte de alta voltagem e pedras vulcânicas.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <img 
            src={materialsImage} 
            alt="Materiais do experimento" 
            className="w-full h-auto rounded-md"
            data-testid="img-materials"
          />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="w-7 h-7 text-primary" />
            <h3 className="font-heading font-semibold text-2xl">Procedimento</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2">Por que isso acontece?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Na Terra primitiva, não havia oxigênio livre (O₂) na atmosfera. A energia dos relâmpagos e da radiação ultravioleta 
                quebrava as moléculas simples de metano, amônia e água, permitindo que elas se recombinassem em moléculas orgânicas 
                mais complexas como aminoácidos. Este experimento, baseado no experimento de Miller-Urey (1953), demonstra como 
                os blocos fundamentais da vida podem surgir de processos químicos simples.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
