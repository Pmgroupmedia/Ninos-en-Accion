import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      setFormData({
        parentName: "",
        phone: "",
        email: "",
        childName: "",
        childAge: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-[#5DAA2B] mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-[#F9D94A] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a comenzar el proceso de matrícula
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#9ED96C]/20 to-[#7AC142]/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#7AC142] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5DAA2B] mb-1">Teléfonos</h4>
                    <p className="text-gray-700">(787) 647-8147</p>
                    <p className="text-gray-700">(787) 292-0642</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#7AC142] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5DAA2B] mb-1">Correo Electrónico</h4>
                    <p className="text-gray-700">centroninosenaccion@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#7AC142] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5DAA2B] mb-1">Dirección</h4>
                    <p className="text-gray-700">Ave. Marginal Aniceto Díaz, B-10<br />Golden Hills, Trujillo Alto, PR 00976</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#7AC142] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#5DAA2B] mb-1">Horario</h4>
                    <p className="text-gray-700">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h4 className="font-semibold text-[#5DAA2B] mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://instagram.com/ecoescuelaninosenaccion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7AC142] hover:bg-[#5DAA2B] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                >
                  <SiInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com/ecoescuelaninosenaccion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7AC142] hover:bg-[#5DAA2B] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                >
                  <SiFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Map */}
        <div className="mt-12">
          <h3 className="font-semibold text-2xl mb-6 text-[#5DAA2B] text-center">Ubicación</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4!2d-66.0!3d18.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDIyJzQ4LjAiTiA2NsKwMDAnMDAuMCJX!5e0!3m2!1sen!2spr!4v1642000000000!5m2!1sen!2spr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de EcoEscuela Niños en Acción"
            ></iframe>
          </div>
          <div className="mt-6 text-center bg-gradient-to-r from-[#9ED96C]/20 to-[#7AC142]/20 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-[#7AC142] text-2xl mr-2" />
              <h4 className="font-semibold text-lg text-[#5DAA2B]">Dirección</h4>
            </div>
            <p className="text-gray-700 font-medium">Ave. Marginal Aniceto Díaz, B-10</p>
            <p className="text-gray-700 font-medium">Golden Hills, Trujillo Alto, PR 00976</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.google.com/maps/dir//Ave.+Marginal+Aniceto+Díaz,+B-10,+Golden+Hills,+Trujillo+Alto,+PR+00976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#7AC142] text-white rounded-lg hover:bg-[#5DAA2B] transition-colors"
              >
                <MapPin className="mr-2" size={16} />
                Cómo llegar
              </a>
              <a 
                href="https://www.google.com/maps/place/Ave.+Marginal+Aniceto+Díaz,+B-10,+Golden+Hills,+Trujillo+Alto,+PR+00976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border-2 border-[#7AC142] text-[#7AC142] rounded-lg hover:bg-[#7AC142] hover:text-white transition-colors"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
