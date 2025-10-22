import { CheckCircle } from "lucide-react";
import provaSocial1 from "@/assets/prova-social-1.jpeg";
import provaSocial2 from "@/assets/prova-social-2.jpeg";
import afiliado1 from "@/assets/afiliado-1.jpeg";
import afiliado2 from "@/assets/afiliado-2.jpeg";
import afiliado3 from "@/assets/afiliado-3.jpeg";
import afiliado4 from "@/assets/afiliado-4.jpeg";
import afiliado5 from "@/assets/afiliado-5.jpeg";
import afiliado6 from "@/assets/afiliado-6.png";
const SocialProofSection = () => {
  const proofItems = ["Cassinos ativos", "Jogo do bicho online", "Rifas digitais", "Afiliados e experts"];
  const results = [{
    value: "R$ 246.488",
    label: "Revenue pago",
    subtitle: "Afiliado premium - Rev Share"
  }, {
    value: "R$ 56.998",
    label: "Saldo acumulado",
    subtitle: "Comissões de afiliado - 25% rev share"
  }, {
    value: "39.690",
    label: "Depósitos gerados",
    subtitle: "Performance de tráfego qualificado"
  }, {
    value: "R$ 23.432",
    label: "Revenue share pago",
    subtitle: "Comissão mensal - Afiliado top"
  }, {
    value: "6.612",
    label: "Cliques convertidos",
    subtitle: "Alta taxa de conversão"
  }, {
    value: "1.875",
    label: "Registros gerados",
    subtitle: "Novos usuários cadastrados"
  }];
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 px-2">
            Mais de <span className="text-gradient-midas">1.000 operações</span><br />
            de apostas já escaladas
          </h2>
          
          <div className="max-w-2xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 md:mb-16">
              {proofItems.map((item, index) => <div key={index} className="flex items-center justify-center space-x-2 sm:space-x-3 bg-card/50 rounded-xl p-3 sm:p-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success flex-shrink-0" />
                  <span className="text-sm sm:text-lg font-medium text-center">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        
        
        {/* Dashboard Screenshots */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground px-4">
            Dashboards reais - Cassinos e Afiliados
          </h3>
          
          {/* Cassino Results */}
          <div className="mb-8 sm:mb-12">
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 text-primary px-4">
              Resultados de Cassino
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-glow transition-all duration-300">
                <img src={provaSocial1} alt="Dashboard mostrando R$12.292 em depósitos em 7 dias" className="w-full rounded-lg" />
                <p className="text-center text-xs sm:text-sm text-primary mt-3 sm:mt-4">
                  Primeiros 7 dias - R$12.292 em depósitos
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-glow transition-all duration-300">
                <img src={provaSocial2} alt="Dashboard mostrando R$245.376 em depósitos em 30 dias" className="w-full rounded-lg" />
                <p className="text-center text-xs sm:text-sm text-primary mt-3 sm:mt-4">
                  30 dias depois - R$245.376 em depósitos
                </p>
              </div>
            </div>
          </div>

          {/* Affiliate Results */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 text-primary px-4">
              Resultados de Afiliados
            </h4>
            
            {/* Grid responsivo para mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
              
              <div className="bg-card border border-border rounded-xl p-3 hover:shadow-glow transition-all duration-300">
                <img src={afiliado3} alt="Painel afiliado - R$56.998 saldo" className="w-full h-auto rounded-lg object-contain" />
                <p className="text-center text-xs sm:text-sm text-primary mt-2">
                  R$57K em saldo
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 hover:shadow-glow transition-all duration-300">
                <img src={afiliado4} alt="Revenue Share - R$23.432 pago" className="w-full h-auto rounded-lg object-contain" />
                <p className="text-center text-xs sm:text-sm text-primary mt-2 font-medium">
                  R$23K mensal
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 hover:shadow-glow transition-all duration-300">
                <img src={afiliado5} alt="CPA Pendente - R$18.972" className="w-full h-auto rounded-lg object-contain" />
                <p className="text-center text-xs sm:text-sm text-primary mt-2">
                  R$19K pendente
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 hover:shadow-glow transition-all duration-300">
                <img src={afiliado2} alt="Resumo financeiro - R$24.797 em apostas" className="w-full h-auto rounded-lg object-contain" />
                <p className="text-center text-xs sm:text-sm text-primary mt-2">
                  R$24K apostas
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 hover:shadow-glow transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <img src={afiliado6} alt="Revenue pendente R$1.502 e R$246.488 pago, CPAs R$350 e R$30.900" className="w-full h-auto rounded-lg object-contain" />
                <p className="text-center text-xs sm:text-sm text-primary mt-2">
                  R$246K + CPAs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProofSection;