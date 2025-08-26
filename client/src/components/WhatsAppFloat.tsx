import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phone = "17876478147";
    const message = "Hola, estoy interesado en conocer más sobre EcoEscuela Niños en Acción.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 floating-animation"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
