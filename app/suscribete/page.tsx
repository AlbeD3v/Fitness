import Link from 'next/link';

export default function SuscribetePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Círculos decorativos */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-500">
                  Transforma tu Vida
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-600">
                con Nutrición Inteligente
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Únete a nuestra comunidad y recibe:
              </p>
              <ul className="text-left space-y-4 mb-8">
                {[
                  'Plan nutricional personalizado',
                  'Recetas saludables semanales',
                  'Consejos de expertos en nutrición',
                  'Acceso a webinars exclusivos',
                  'Seguimiento de tu progreso'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulario */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Comienza Tu Transformación
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                    Objetivo Principal
                  </label>
                  <select
                    id="goal"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona tu objetivo</option>
                    <option value="weight-loss">Pérdida de peso</option>
                    <option value="muscle-gain">Ganancia muscular</option>
                    <option value="health">Mejorar salud</option>
                    <option value="energy">Aumentar energía</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02]"
                >
                  ¡Comenzar Ahora!
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500 text-center">
                Al registrarte, aceptas nuestros términos y condiciones.
              </p>
            </div>
          </div>

          {/* Testimonios */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Lo que dicen nuestros miembros</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'María G.',
                  text: 'El programa cambió mi vida. Perdí 15kg y me siento con más energía que nunca.',
                  image: '/testimonials/maria.jpg'
                },
                {
                  name: 'Carlos R.',
                  text: 'Los consejos nutricionales son excelentes. He mejorado mis hábitos alimenticios.',
                  image: '/testimonials/carlos.jpg'
                },
                {
                  name: 'Ana P.',
                  text: 'El seguimiento personalizado hace toda la diferencia. ¡Superé mis metas!',
                  image: '/testimonials/ana.jpg'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-xl">
                          {testimonial.name[0]}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">Miembro verificado</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-8">
              No esperes más para comenzar tu transformación
            </p>
            <a
              href="#top"
              className="inline-block py-4 px-8 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform transition-all hover:scale-[1.02]"
            >
              ¡Únete Ahora!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
