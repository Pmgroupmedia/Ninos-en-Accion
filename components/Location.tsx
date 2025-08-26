import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Nos encontramos en el corazón de Trujillo Alto, Puerto Rico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Dirección</h3>
                <p className="text-green-600">
                  Trujillo Alto, Puerto Rico 00976
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Horarios</h3>
                <p className="text-green-600">
                  Lunes a Viernes: 7:00 A.M. - 5:00 P.M.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Teléfono</h3>
                <p className="text-green-600">
                  (787) 555-0123
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Email</h3>
                <p className="text-green-600">
                  centroninosenaccion@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              ¿Cómo llegar?
            </h3>
            <p className="text-green-600 mb-4">
              Estamos ubicados en una zona segura y accesible de Trujillo Alto, 
              con fácil acceso desde las principales vías de la zona metropolitana.
            </p>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Transporte público:</strong> Accesible mediante varias rutas de autobús.
              </p>
              <p className="text-sm text-green-700 mt-2">
                <strong>Estacionamiento:</strong> Disponible para padres y visitantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}