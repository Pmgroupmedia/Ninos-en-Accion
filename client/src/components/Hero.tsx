import { Button } from "@/components/ui/button";

import WhatsApp_Image_2025_05_27_at_20_02_19_1b70e85a from "@assets/WhatsApp Image 2025-05-27 at 20.02.19_1b70e85a.jpg";

import WhatsApp_Image_2025_07_17_at_16_31_56_9b88d951 from "@assets/WhatsApp Image 2025-07-17 at 16.31.56_9b88d951.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="wave-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Educando a los niños a amar el planeta Tierra
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Más de 20 años formando pequeños guardianes del medio ambiente en Trujillo Alto, Puerto Rico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-[#F9D94A] hover:bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Matrícula Abierta
              </Button>
              <Button
                onClick={() => scrollToSection("oferta-educativa")}
                variant="outline"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 transition-all duration-300"
              >
                Conoce Nuestros Programas
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img
              src={WhatsApp_Image_2025_07_17_at_16_31_56_9b88d951}
              alt="Niños jugando y aprendiendo en la naturaleza"
              className="rounded-3xl shadow-2xl floating-animation max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
