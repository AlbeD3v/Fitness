const tips = [
  {
    title: "Alimentación Consciente",
    description: "Aprende a escuchar tu cuerpo y a comer de manera mindful.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Nutrición"
  },
  {
    title: "Rutinas de Ejercicio",
    description: "Incorpora el movimiento a tu vida diaria de forma sostenible.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Ejercicio"
  },
  {
    title: "Descanso y Recuperación",
    description: "La importancia del sueño y el descanso en tu salud.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Bienestar"
  },
  {
    title: "Gestión del Estrés",
    description: "Técnicas para manejar el estrés y mejorar tu calidad de vida.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Mental"
  }
];

const HealthyLifeTips = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Consejos para una Vida Saludable
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Pequeños cambios que transformarán tu salud y bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                  {tip.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-200">{tip.description}</p>
                <button className="mt-4 text-primary-300 hover:text-primary-200 flex items-center text-sm font-medium">
                  Leer más
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyLifeTips;
