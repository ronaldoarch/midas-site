import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLeadClick } from "@/lib/track";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-lg"
        onClick={() => {
          trackLeadClick({ source: 'whatsapp_float', whatsappNumber: '5575988863498' })
          window.open('https://wa.me/5575988863498', '_blank')
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;