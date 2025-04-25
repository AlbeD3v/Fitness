interface ExerciseProgram {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  benefits: string[];
}

const exercisePrograms: ExerciseProgram[] = [
  {
    title: "Entrenamiento HIIT",
    description: "Programa de alta intensidad para maximizar la quema de calorías y mejorar la resistencia cardiovascular.",
    duration: "30 minutos",
    level: "Intermedio",
    image: "/ejercicios/hiit.jpg",
    benefits: [
      "Quema máxima de calorías",
      "Mejora el metabolismo",
      "Aumenta la resistencia",
      "Resultados rápidos"
    ]
  },
  {
    title: "Yoga Funcional",
    description: "Combina los beneficios del yoga tradicional con ejercicios funcionales para mejorar la flexibilidad y fuerza.",
    duration: "45 minutos",
    level: "Todos los niveles",
    image: "/ejercicios/yoga.jpg",
    benefits: [
      "Mayor flexibilidad",
      "Reduce el estrés",
      "Mejora la postura",
      "Fortalece el core"
    ]
  },
  {
    title: "Fuerza y Tonificación",
    description: "Programa diseñado para desarrollar masa muscular y tonificar el cuerpo de manera equilibrada.",
    duration: "60 minutos",
    level: "Principiante a Avanzado",
    image: "/ejercicios/fuerza.jpg",
    benefits: [
      "Aumento de masa muscular",
      "Mejora la fuerza",
      "Define los músculos",
      "Previene lesiones"
    ]
  }
];

export default function EjercicioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con imagen de fondo */}
      <div className="relative h-[400px] bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Programas de Ejercicio
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Descubre nuestros programas de ejercicio diseñados para ayudarte a alcanzar tus objetivos de forma efectiva y segura.
            </p>
          </div>
        </div>
      </div>

      {/* Programas de ejercicio */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {exercisePrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-primary-600/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {program.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all">
                  Comenzar Programa
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de entrenador */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Entrenamiento Personalizado
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestros entrenadores certificados te ayudarán a crear un programa personalizado que se adapte a tus necesidades y objetivos específicos.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Evaluación física completa",
                  "Plan de ejercicios personalizado",
                  "Seguimiento de progreso",
                  "Ajustes continuos del programa",
                  "Soporte motivacional"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="py-3 px-8 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all">
                Agenda una Consulta
              </button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-primary-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
