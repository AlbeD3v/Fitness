import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-600">
                Fitness Cubano
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-600"
              >
                Blog
              </Link>
              <Link
                href="/nutricion"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-600"
              >
                Nutrición
              </Link>
              <Link
                href="/ejercicio"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-600"
              >
                Ejercicio
              </Link>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-600"
              >
                Sobre Mí
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="bg-green-600 px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-green-700"
            >
              Suscríbete
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
