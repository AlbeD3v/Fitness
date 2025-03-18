const programs = [
  {
    title: "Plan de Alimentación Saludable",
    description: "Aprende a comer de manera balanceada y nutritiva con planes personalizados.",
    icon: "🥗",
    features: ["Menús semanales", "Lista de compras", "Recetas saludables"]
  },
  {
    title: "Pérdida de Peso Sostenible",
    description: "Alcanza tu peso ideal de forma saludable y mantén los resultados.",
    icon: "⚖️",
    features: ["Control de calorías", "Ejercicios específicos", "Seguimiento personalizado"]
  },
  {
    title: "Nutrición Deportiva",
    description: "Optimiza tu rendimiento deportivo con una alimentación adecuada.",
    icon: "🏃‍♂️",
    features: ["Suplementación deportiva", "Timing de comidas", "Hidratación"]
  }
];

const NutritionPrograms = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Programas de Nutrición
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre nuestros programas diseñados para ayudarte a alcanzar tus objetivos
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionPrograms;
