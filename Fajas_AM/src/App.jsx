import { useState, useEffect } from 'react';
// AGREGAMOS: Las herramientas de rutas
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import logo from './assets/logo.jpeg'; 
// AGREGAMOS: La importación de tu nueva página
import Catalog from './pages/Catalog';

import img1 from './assets/imagen1.png';
import img2 from './assets/imagen2.png';
import img3 from './assets/imagen3.png';
import img4 from './assets/imagen4.png';
import img5 from './assets/imagen5.png';
import img6 from './assets/imagen6.png';
import img7 from './assets/imagen7.png';

// MOVEMOS: Todo tu contenido visual a este componente interno para que el botón funcione
const HomeContent = ({ currentSlide, setCurrentSlide, slides, isScrolled, logo }) => {
  const navigate = useNavigate(); // Esta es la función que activa el botón

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Banner Superior */}
      <div className="text-center py-3 text-sm font-extrabold tracking-widest uppercase italic shadow-md relative z-[60]" style={{
        background: '#BDD2C1', 
        color: '#C5A048',
        textShadow: '1px 1px 0px rgba(255,255,255,0.3), 1px 1px 2px rgba(0,0,0,0.2)'
      }}>
        ENVÍO GRATIS EN FAJAS SELECCIONADAS — COMPRAR AHORA
      </div>

      {/* 2. Navbar Modular */}
      <Navbar isScrolled={isScrolled} logo={logo} />

      {/* 3. Sección del Slider */}
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
        
        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 2 : currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20"
        >
          ❮
        </button>
        <button 
          onClick={() => setCurrentSlide(currentSlide >= slides.length - 2 ? 0 : currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20"
        >
          ❯
        </button>
      </div>

      {/* 4. Nueva Sección: Mensaje de Marca */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-[0.4em] uppercase text-zinc-400 mb-4">
            Nueva Colección <span className="text-[#C5A048] font-bold text-base">AMC</span>
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight mb-8">
            Elegancia natural para <br /> 
            <span className="text-[#C5A048] italic font-light">tu transformación</span>
          </h3>
          
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl leading-relaxed mb-12">
            Descubre nuestra línea exclusiva de fajas moldeadoras. Prendas diseñadas 
            para realzar tu figura con sofisticación, comodidad y la más alta calidad.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-[#C5A048] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#b3903d] transition-all shadow-lg">
              Explorar Fajas
            </button>
            {/* AGREGAMOS: El onClick para navegar al catálogo */}
            <button 
              onClick={() => navigate('/catalog')}
              className="border border-zinc-200 text-zinc-800 px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all"
            >
              Ver Catálogo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[11px] md:text-xs text-zinc-400 font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C5A048]"></span> Calidad Premium
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C5A048]"></span> Envío Rápido
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C5A048]"></span> Asesoría Personalizada
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// LA FUNCIÓN APP: Ahora solo gestiona los estados y las rutas
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2, img3, img4, img5, img6, img7];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slides.length - 2 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Router>
      <Routes>
        {/* RUTA INICIO: Pasa todos los estados actuales como props */}
        <Route path="/" element={
          <HomeContent 
            currentSlide={currentSlide} 
            setCurrentSlide={setCurrentSlide} 
            slides={slides} 
            isScrolled={isScrolled} 
            logo={logo} 
          />
        } />
        
        {/* RUTA CATÁLOGO: Muestra tu nuevo archivo */}
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;