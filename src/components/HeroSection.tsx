import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { trackLeadClick } from "@/lib/track";
import heroImage from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-premium overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
          Quer <span className="text-gradient-midas">depositantes</span><br />
          entrando <span className="text-gradient-midas">TODO DIA</span><br />
          na sua casa de apostas?
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Em até 5 minutos, um dos nossos especialistas entra em contato para mostrar 
          como escalar sua banca, cassino ou rifa online.
        </p>
        
        <Button 
          variant="whatsapp" 
          size="hero" 
          className="mb-12 sm:mb-16 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6" 
          onClick={() => { 
            trackLeadClick({ source: 'hero_button', whatsappNumber: '5575988863498' })
            window.open('https://wa.me/5575988863498', '_blank')
          }}
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">Falar agora com a Midas no WhatsApp</span>
          <span className="sm:hidden">Falar com a Midas</span>
        </Button>
        
        {/* Results Preview */}
        
      </div>
    </section>;
};
export default HeroSection;