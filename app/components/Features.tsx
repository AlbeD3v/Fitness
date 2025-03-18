const features = [
  {
    title: "Nutrición Basada en Ciencia",
    description: "Planes respaldados por investigación científica actualizada",
    icon: "🧬",
    gradient: "from-primary-400 to-primary-600"
  },
  {
    title: "Entrenamiento Personalizado",
    description: "Rutinas adaptadas a tus objetivos y condición física",
    icon: "💪",
    gradient: "from-secondary-400 to-secondary-600"
  },
  {
    title: "Seguimiento Continuo",
    description: "Monitoreo constante de tu progreso y ajustes necesarios",
    icon: "📊",
    gradient: "from-primary-400 to-secondary-400"
  },
  {
    title: "Comunidad de Apoyo",
    description: "Conecta con personas que comparten tus objetivos",
    icon: "🤝",
    gradient: "from-secondary-400 to-primary-400"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Por qué elegir{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Fitness Cubano
            </span>
            ?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Transformamos vidas a través de un enfoque integral y científico
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white p-8 rounded-2xl shadow-custom hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.gradient} opacity-10 blur-lg group-hover:opacity-20 transition-opacity`}></div>
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-3xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    Saber más
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
