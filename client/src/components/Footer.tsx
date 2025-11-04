import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-border py-12 px-6"
      data-testid="footer-main"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" />
            <span className="font-heading font-semibold text-lg">
              Terra Primitiva
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Feira de Ciências 2024
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-semibold mb-3">Equipe</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Desenvolvido por estudantes do 1º INFO para a feira de ciências
                2025. <br />
                Jaykson, Leticia, Eduarda, Maysa e Guilherme.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-3">
                Recursos Adicionais
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Experimento de Miller-Urey explicado</li>
                <li>• História da Terra primitiva</li>
                <li>• Artigos científicos sobre origem da vida</li>
                <li>• Cronologia geológica da Terra</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Terra Primitiva. Desenvolvido para fins educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}
