const testimonials = [
  {
    name: "María González",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Gracias a los programas de nutrición, perdí 15 kg de forma saludable y sostenible. ¡Me siento mejor que nunca!",
    achievement: "Pérdida de peso saludable",
    duration: "6 meses"
  },
  {
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "El programa de nutrición deportiva mejoró significativamente mi rendimiento en el gimnasio. ¡Mis marcas personales no paran de mejorar!",
    achievement: "Ganancia muscular",
    duration: "8 meses"
  },
  {
    name: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Aprendí a comer de manera consciente y equilibrada. Ya no sigo dietas restrictivas y me siento llena de energía.",
    achievement: "Hábitos saludables",
    duration: "4 meses"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Historias de Éxito
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre cómo nuestros programas han transformado vidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <span className="text-primary-600 text-sm font-medium">
                    {testimonial.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {testimonial.achievement}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Ver historia completa →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
            Comienza Tu Transformación
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
