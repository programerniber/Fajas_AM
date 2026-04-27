import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // <-- IMPORTANTE
import logo from './assets/logo.jpeg'; // Lo mantenemos aquí para pasarlo por "props"

import img1 from './assets/imagen1.png';
import img2 from './assets/imagen2.png';
import img3 from './assets/imagen3.png';
import img4 from './assets/imagen4.png';
import img5 from './assets/imagen5.png';
import img6 from './assets/imagen6.png';
import img7 from './assets/imagen7.png';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2, img3, img4, img5, img6, img7];
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica de Scroll (Mantenla aquí para controlar el estado global)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slides.length - 2 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Superior */}
      <div className="text-center py-3 text-sm font-extrabold tracking-widest uppercase italic shadow-md relative z-[60]" style={{
        background: '#BDD2C1', 
        color: '#C5A048',
        textShadow: '1px 1px 0px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        ENVÍO GRATIS EN FAJAS SELECCIONADAS — COMPRAR AHORA
      </div>

      {/* --- AQUÍ ESTÁ EL CAMBIO PRINCIPAL --- */}
      {/* Llamamos al nuevo Navbar y le pasamos el estado del scroll y el logo */}
      <Navbar isScrolled={isScrolled} logo={logo} />

      {/* SECCIÓN DEL SLIDER */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-zinc-900">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }} 
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-[50%] h-full p-1 flex-shrink-0">
              <img src={slide} alt={`Banner ${index}`} className="w-full h-full object-cover rounded-sm" />
            </div>
          ))}
        </div>
        {/* ... (Botones del carrusel se quedan igual) */}
      </div>

      {/* Título de Bienvenida */}
      <main className="py-16 px-10 text-center">
        <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-zinc-800">
          Nueva Colección <span className="font-bold text-[#C5A048]">AMC</span>
        </h2>
      </main>
    </div>
  );
}

export default App;