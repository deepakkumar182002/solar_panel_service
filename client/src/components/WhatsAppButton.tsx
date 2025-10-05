import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your solar energy solutions. Can you provide more information?");
    window.open(`https://wa.me/918218011747?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
        data-testid="whatsapp-float-button"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}