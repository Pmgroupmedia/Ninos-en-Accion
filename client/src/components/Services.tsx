import { CheckCircle } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Programa Maternal (2-3 años)",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Actividades de educación ambiental con niños",
      features: [
        "Introducción a conceptos ecológicos básicos",
        "Desarrollo sensorial con elementos naturales",
        "Actividades de motricidad en jardines",
        "Rutinas de cuidado ambiental"
      ]
    },
    {
      title: "Programa Preescolar (3-4 años)",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Educación ambiental para niños en edad preescolar",
      features: [
        "Proyectos de reciclaje y reutilización",
        "Huerto escolar y agricultura orgánica",
        "Exploración científica de la naturaleza",
        "Preparación para kindergarten"
      ]
    },
    {
      title: "Servicios Adicionales",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Salón ecológico con materiales sostenibles",
      features: [
        "Programa de verano ecológico",
        "Talleres para padres",
        "Excursiones a reservas naturales",
        "Programa federal disponible"
      ]
    }
  ];

  return (
    <section id="oferta-educativa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-[#5DAA2B] mb-4">
            Oferta Educativa
          </h2>
          <div className="w-24 h-1 bg-[#F9D94A] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas educativos especializados en desarrollo integral con enfoque ecológico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-[#9ED96C]/10 to-[#7AC142]/10 p-8 rounded-2xl">
              
              <h3 className="font-semibold text-xl mb-4 text-[#5DAA2B] text-center">{program.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="text-[#7AC142] mr-3 mt-1 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
