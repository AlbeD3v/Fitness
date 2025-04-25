import Image from 'next/image';
import { BlogPost } from '../types/blog';

// Datos de ejemplo - En un caso real, estos vendrían de una API o CMS
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Alimentación Saludable para un Estilo de Vida Activo',
    excerpt: 'Descubre los mejores consejos para mantener una alimentación equilibrada mientras llevas un estilo de vida activo.',
    content: '',
    category: 'nutricion',
    image: '/blog/healthy-food.jpg',
    author: 'Dr. García',
    date: '2025-04-08',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Hábitos Saludables para el Día a Día',
    excerpt: 'Implementa estos sencillos hábitos en tu rutina diaria para mejorar tu salud y bienestar.',
    content: '',
    category: 'vida-saludable',
    image: '/blog/healthy-habits.jpg',
    author: 'Lic. Rodríguez',
    date: '2025-04-07',
    readTime: '4 min'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del blog */}
      <div className="bg-gradient-brand text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Blog de Nutrición y Vida Saludable
          </h1>
          <p className="text-center text-lg max-w-2xl mx-auto">
            Encuentra los mejores consejos y artículos sobre nutrición, salud y bienestar
          </p>
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-6 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors">
            Todos
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors">
            Nutrición
          </button>
          <button className="px-6 py-2 rounded-full bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors">
            Vida Saludable
          </button>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-custom overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-100 rounded-full mb-4">
                  {post.category === 'nutricion' ? 'Nutrición' : 'Vida Saludable'}
                </span>
                <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-primary-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <div className="flex items-center space-x-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              1
            </button>
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
              Siguiente
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
