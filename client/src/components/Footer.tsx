import { Sprout } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#5DAA2B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="text-[#F9D94A] text-2xl mr-2" />
              <span className="font-bold text-lg">EcoEscuela Niños en Acción</span>
            </div>
            <p className="text-gray-300 mb-4">
              Educando a los niños a amar el planeta Tierra con más de 20 años de experiencia en educación ecológica.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/ecoescuelaninosenaccion"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7AC142] hover:bg-[#9ED96C] text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="#"
                className="bg-[#7AC142] hover:bg-[#9ED96C] text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <SiFacebook size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-[#F9D94A] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("quienes-somos")}
                  className="hover:text-[#F9D94A] transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => scrollToSection("enfoque")}
                  className="hover:text-[#F9D94A] transition-colors"
                >
                  Nuestro Enfoque
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="hover:text-[#F9D94A] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Programas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Programa Maternal (2-3 años)</li>
              <li>Programa Preescolar (3-4 años)</li>
              <li>Programa Federal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-[#F9D94A] mr-2">📞</span>
                (787) 647-8147
              </li>
              <li className="flex items-center">
                <span className="text-[#F9D94A] mr-2">📞</span>
                (787) 292-0642
              </li>
              <li className="flex items-center">
                <span className="text-[#F9D94A] mr-2">✉️</span>
                centroninosenaccion@gmail.com
              </li>
              <li className="flex items-center">
                <span className="text-[#F9D94A] mr-2">📍</span>
                Trujillo Alto, PR
              </li>
              <li className="flex items-center">
                <span className="text-[#F9D94A] mr-2">🌐</span>
                ecoescuelaninosenaccion.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcoEscuela Niños en Acción. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
