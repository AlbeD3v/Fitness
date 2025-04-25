import Image from 'next/image';

interface Certification {
  title: string;
  organization: string;
  year: string;
  icon: string;
}

interface Experience {
  title: string;
  description: string;
  years: string;
}

const certifications: Certification[] = [
  {
    title: "Nutrición Deportiva",
    organization: "International Sports Sciences Association",
    year: "2023",
    icon: "🏆"
  },
  {
    title: "Especialista en Pérdida de Peso",
    organization: "Academy of Nutrition and Dietetics",
    year: "2022",
    icon: "⚖️"
  },
  {
    title: "Nutrición Clínica",
    organization: "American Nutrition Association",
    year: "2021",
    icon: "🏥"
  }
];

const experiences: Experience[] = [
  {
    title: "Consulta Privada",
    description: "Asesoramiento nutricional personalizado para más de 1,000 clientes satisfechos.",
    years: "2020 - Presente"
  },
  {
    title: "Centro Deportivo Elite",
    description: "Nutrióloga principal para atletas de alto rendimiento.",
    years: "2018 - 2020"
  },
  {
    title: "Hospital Central",
    description: "Nutrición clínica y desarrollo de planes alimenticios para pacientes.",
    years: "2016 - 2018"
  }
];

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con foto de perfil */}
      <div className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
              <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                <span className="text-6xl">👩‍⚕️</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Dra. María González
            </h1>
            <p className="text-xl text-white mb-6 text-center max-w-2xl">
              Nutrióloga Certificada & Especialista en Nutrición Deportiva
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Agenda una Consulta
              </button>
              <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Ver Certificaciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        {/* Sobre mí */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mi Historia</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Con más de 8 años de experiencia en el campo de la nutrición, me he dedicado a ayudar a las personas a alcanzar sus objetivos de salud y bienestar a través de una alimentación consciente y equilibrada.
            </p>
            <p className="mb-4">
              Mi pasión por la nutrición comenzó durante mis años universitarios, cuando descubrí el impacto transformador que una alimentación adecuada puede tener en la salud física y mental.
            </p>
            <p>
              Hoy, mi misión es proporcionar asesoramiento nutricional personalizado basado en evidencia científica, adaptado a las necesidades y objetivos únicos de cada persona.
            </p>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Certificaciones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.organization}</p>
                <p className="text-sm text-primary-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {exp.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo puedo ayudarte a alcanzar tus objetivos de salud y nutrición.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
            Contactar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
