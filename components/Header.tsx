import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/WhatsApp Image 2025-07-06 at 20.41.29_02867a8b_1751849970064.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={logoImage} 
                alt="EcoEscuela Niños en Acción Logo"
                className="h-12 w-12 mr-3 rounded-full"
              />
              <span className="font-bold text-xl text-[#5DAA2B]">
                EcoEscuela Niños en Acción
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-[#5DAA2B] hover:text-[#7AC142] font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="text-gray-600 hover:text-[#7AC142] font-medium transition-colors"
              >
                Quiénes Somos
              </button>
              
              <button
                onClick={() => scrollToSection("enfoque")}
                className="text-gray-600 hover:text-[#7AC142] font-medium transition-colors"
              >
                Nuestro Enfoque
              </button>
              
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-600 hover:text-[#7AC142] font-medium transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#5DAA2B] hover:text-[#7AC142]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block px-3 py-2 text-[#5DAA2B] font-medium w-full text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="block px-3 py-2 text-gray-600 hover:text-[#7AC142] w-full text-left"
            >
              Quiénes Somos
            </button>
            
            <button
              onClick={() => scrollToSection("enfoque")}
              className="block px-3 py-2 text-gray-600 hover:text-[#7AC142] w-full text-left"
            >
              Nuestro Enfoque
            </button>
            
            <button
              onClick={() => scrollToSection("contacto")}
              className="block px-3 py-2 text-gray-600 hover:text-[#7AC142] w-full text-left"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
