import { Card } from '@/components/ui/card';
import { Target, FlaskConical, ClipboardList, Lightbulb } from 'lucide-react';
import materialsImage from '@assets/generated_images/Experiment_materials_and_supplies_f083994c.png';

export default function ExperimentSection() {
  const steps = [
    {
      number: 1,
      title: 'Prepare os líquidos',
      description: 'Separe mel, detergente líquido, água, óleo vegetal e álcool. Adicione corante alimentício em cada um.'
    },
    {
      number: 2,
      title: 'Despeje cuidadosamente',
      description: 'Comece com o líquido mais denso (mel) e adicione os outros em ordem decrescente de densidade.'
    },
    {
      number: 3,
      title: 'Observe as camadas',
      description: 'Note como cada líquido permanece em sua própria camada, criando uma torre colorida.'
    },
    {
      number: 4,
      title: 'Teste com objetos',
      description: 'Coloque pequenos objetos e veja em qual camada eles param, baseado em sua densidade.'
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
          Como Funciona o Experimento
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
          A densidade é a relação entre massa e volume. Líquidos com diferentes densidades não se misturam e formam camadas distintas.
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
                  Demonstrar visualmente o conceito de densidade através da separação de líquidos com diferentes massas específicas.
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
                  Cilindro de vidro transparente, mel, detergente, água, óleo vegetal, álcool e corantes alimentícios.
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
                Cada líquido tem uma densidade diferente. O mel é mais denso (cerca de 1,4 g/cm³), então afunda. 
                O álcool é menos denso (0,8 g/cm³), então fica no topo. A gravidade puxa os líquidos mais densos 
                para baixo, enquanto os menos densos flutuam acima, criando camadas coloridas bem definidas.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
