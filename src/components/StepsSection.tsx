import { Target, UserPlus, Zap, DollarSign, RotateCcw, Users } from "lucide-react";
const StepsSection = () => {
  const steps = [{
    icon: Target,
    title: "Aquisição",
    description: "atrair novos depositantes"
  }, {
    icon: UserPlus,
    title: "Ativação",
    description: "cadastro e primeiro depósito"
  }, {
    icon: Zap,
    title: "Engajamento",
    description: "manter o jogador ativo"
  }, {
    icon: DollarSign,
    title: "Monetização",
    description: "transformar engajamento em receita"
  }, {
    icon: RotateCcw,
    title: "Retenção",
    description: "criar hábito recorrente de depósitos"
  }, {
    icon: Users,
    title: "Indicação/Satisfação",
    description: "jogadores trazendo novos jogadores"
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            As <span className="text-gradient-midas">6 Etapas</span> do Crescimento
          </h2>
        </div>
        
        
        
        {/* Cases placeholder */}
        
      </div>
    </section>;
};
export default StepsSection;