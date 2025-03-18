const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                  Transforma tu vida
                </span>{' '}
                <span className="block text-secondary-600 xl:inline">
                  con nutrición inteligente
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Descubre el poder de una alimentación consciente y un estilo de vida activo. 
                Te guiamos con ciencia, experiencia y resultados comprobados.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-600 to-primary-400 hover:from-primary-700 hover:to-primary-500 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105"
                  >
                    Comienza Ahora
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10 transform transition-all hover:scale-105"
                  >
                    Conoce Más
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Grid de imágenes */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ejercicio 1"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ejercicio 2"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1574689096264-2adf441c3d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ejercicio 3"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Nutrición 1"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Nutrición 2"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Nutrición 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
