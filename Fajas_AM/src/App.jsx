import { useState, useEffect } from 'react';
import logo from './assets/logo.jpeg';
// Importación de tus 7 imágenes para el carrusel
import img1 from './assets/imagen1.png';
import img2 from './assets/imagen2.png';
import img3 from './assets/imagen3.png';
import img4 from './assets/imagen4.png';
import img5 from './assets/imagen5.png';
import img6 from './assets/imagen6.png';
import img7 from './assets/imagen7.png';

function App() {
  // 1. Lógica del Carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Superior con colores del logo */}
      <div className="text-center py-3 text-sm font-extrabold tracking-widest uppercase italic shadow-md" style={{
        background: '#BDD2C1', 
        color: '#C5A048',
        textShadow: '1px 1px 0px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        ENVÍO GRATIS EN FAJAS SELECCIONADAS — COMPRAR AHORA
      </div>

      {/* Navbar Principal */}
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Logo Grande */}
        <div className="flex flex-col items-center gap-1 group">
          <img 
            src={logo} 
            alt="AMC Collection Logo" 
            className="h-24 w-30 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="text-sm font-bold tracking-[0.2em] uppercase italic text-[#C5A048]">
            AMC COLLECTION
          </span>
        </div>

        {/* Menú de Categorías */}
        <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-widest text-white">
          <li><a href="#" className="hover:text-[#C5A048] transition-colors">Fajas Mujer</a></li>
          <li><a href="#" className="hover:text-[#C5A048] transition-colors">Fajas Hombre</a></li>
          <li><a href="#" className="hover:text-[#C5A048] transition-colors">Pijamas de Colección</a></li>
        </ul>

        {/* Buscador y Botón Dorado */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block text-black">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-zinc-900 text-white text-sm rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-[#C5A048] w-48 transition-all"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-2.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="bg-[#C5A048] hover:bg-[#b3903d] text-black font-bold py-2 px-4 rounded-lg text-xs uppercase transition-all">
            Contacto
          </button>
        </div>
      </nav>

      {/* SECCIÓN DEL SLIDER (CARRUSEL) */}
<div className="relative w-full h-[300px] md:h-[600px] overflow-hidden bg-gray-100">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide}
        alt={`Banner AMC ${index + 1}`}
        // CAMBIO AQUÍ: 'object-contain' en lugar de 'object-cover'
        className="w-full h-full object-contain" 
      />
    </div>
  ))}

  {/* Botones de Navegación Manual */}
  <button 
    onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
  >
    ❮
  </button>
  <button 
    onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10"
  >
    ❯
  </button>

  {/* Puntitos Indicadores (Dorado AMC) */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
    {slides.map((_, i) => (
      <button 
        key={i}
        onClick={() => setCurrentSlide(i)}
        className={`h-3 w-3 rounded-full transition-all ${i === currentSlide ? "bg-[#C5A048] scale-125" : "bg-white/50"}`}
      />
    ))}
  </div>
</div>

      {/* Título de Bienvenida */}
      <main className="py-16 px-10 text-center">
        <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-zinc-800">
          Nueva Colección <span className="font-bold text-[#C5A048]">AMC</span>
        </h2>
        <p className="text-zinc-500 mt-4 italic">Elegancia y control en cada detalle.</p>
      </main>
    </div>
  );
}

export default App;