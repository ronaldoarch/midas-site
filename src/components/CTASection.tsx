import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { trackLeadClick } from "@/lib/track";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-premium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight px-2">
            Sua banca pode ser a próxima<br />
            <span className="text-gradient-midas">história de sucesso</span><br />
            da Midas.
          </h2>
          
          <Button 
            variant="whatsapp" 
            size="hero"
            className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
            onClick={() => { 
              trackLeadClick({ source: 'cta_button', whatsappNumber: '5575988863498' })
              window.open('https://wa.me/5575988863498', '_blank')
            }}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="hidden sm:inline">Quero falar com a Midas agora no WhatsApp</span>
            <span className="sm:hidden">Falar com a Midas</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;