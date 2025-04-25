
interface NutritionPlan {
  title: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const nutritionPlans: NutritionPlan[] = [
  {
    title: "Plan Básico",
    description: "Ideal para comenzar tu viaje hacia una alimentación saludable",
    price: "$299/mes",
    features: [
      "Plan alimenticio personalizado",
      "Recetas saludables",
      "Lista de compras semanal",
      "Guía de porciones",
      "Soporte por email"
    ]
  },
  {
    title: "Plan Premium",
    description: "El plan más popular para transformar tu estilo de vida",
    price: "$499/mes",
    recommended: true,
    features: [
      "Todo lo del Plan Básico",
      "Consultas nutricionales semanales",
      "Ajustes de plan según progreso",
      "Análisis de composición corporal",
      "Guía de restaurantes saludables",
      "Soporte prioritario 24/7"
    ]
  },
  {
    title: "Plan Elite",
    description: "Máxima atención y seguimiento para resultados óptimos",
    price: "$799/mes",
    features: [
      "Todo lo del Plan Premium",
      "Consultas ilimitadas",
      "Plan de suplementación",
      "Menús para ocasiones especiales",
      "Acceso a workshops exclusivos",
      "Seguimiento con nutriólogo personal"
    ]
  }
];

const nutritionTips = [
  {
    title: "Alimentación Balanceada",
    description: "Aprende a combinar los nutrientes esenciales para una dieta equilibrada.",
    icon: "🥗"
  },
  {
    title: "Hidratación",
    description: "Mantén tu cuerpo hidratado para un óptimo funcionamiento.",
    icon: "💧"
  },
  {
    title: "Porciones Adecuadas",
    description: "Controla las porciones para mantener un peso saludable.",
    icon: "⚖️"
  },
  {
    title: "Snacks Saludables",
    description: "Opciones nutritivas para mantener la energía durante el día.",
    icon: "🍎"
  }
];

export default function NutricionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planes de Nutrición Personalizados
            </h1>
            <p className="text-xl text-white mb-8">
              Transforma tu salud con planes nutricionales diseñados por expertos para alcanzar tus objetivos.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>

      {/* Planes de nutrición */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {nutritionPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.recommended ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-3xl font-bold text-primary-600 mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg transition-colors ${
                plan.recommended
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600'
                  : 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
              }`}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>

        {/* Consejos nutricionales */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Consejos para una Nutrición Saludable
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {nutritionTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para transformar tu alimentación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita con nuestros expertos en nutrición y comienza tu camino hacia una vida más saludable.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
            Agenda tu Consulta
          </button>
        </div>
      </div>
    </div>
  );
}
