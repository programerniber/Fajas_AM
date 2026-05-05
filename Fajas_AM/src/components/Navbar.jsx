// src/components/Navbar.jsx
import { useNavigate, useLocation } from 'react-router-dom'; 
import { categories } from './navData';

const Navbar = ({ isScrolled, logo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleCategoryClick = (categoryName) => {
    const targetId = categoryName.toUpperCase().replace(/\s+/g, '-');
    navigate(`/catalog#${targetId}`, { state: { selectedCategory: categoryName.toUpperCase() } });
  };

  return (
    <nav className={`px-6 flex items-center justify-between sticky top-0 z-50 transition-all duration-500 
      ${isScrolled ? 'bg-[#E5C17A]/70 backdrop-blur-md py-2 shadow-lg' : 'bg-[#E5C17A] py-4'}`}>
      
      {/* SECCIÓN IZQUIERDA: Botón Inicio + Logo */}
      <div className="flex items-center gap-4">
        {!isHomePage && (
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:border-black hover:bg-black group transition-all duration-300"
            title="Volver al Inicio"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-black group-hover:text-[#E5C17A] transition-colors"
            >
              <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
            </svg>
          </button>
        )}

        <div 
          className="flex flex-col items-center gap-1 group cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="Logo" className={`object-contain transition-all duration-500 ${isScrolled ? 'h-14 w-20' : 'h-20 w-28'}`} />
          <span className={`font-bold tracking-widest uppercase italic text-black ${isScrolled ? 'text-[10px]' : 'text-sm'}`}>
            AMC COLLECTION
          </span>
        </div>
      </div>

      {/* MENÚ CENTRAL */}
      <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase text-black">
        {categories.map((cat, i) => (
          <li key={i} className="group relative py-4 cursor-pointer">
            <span className="hover:text-white transition-colors">{cat.name}</span>
            {cat.sections.length > 0 && (
              <div className="absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-b-lg p-6 grid grid-cols-3 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-black">
                {cat.sections.map((sec, j) => (
                  <div key={j}>
                    <h4 className="font-bold text-black border-b border-zinc-200 mb-3 pb-1 uppercase">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, k) => (
                        <li 
                          key={k} 
                          onClick={() => handleCategoryClick(item)}
                          className="text-zinc-600 hover:text-[#C5A048] text-xs transition-colors cursor-pointer uppercase"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* BOTÓN CONTACTO: ESTILO CÁPSULA 3D FUTURISTA */}
      <div 
        onClick={() => window.open('https://wa.me/12694844066', '_blank')}
        className="flex items-center cursor-pointer group relative"
      >
        {/* Parte Circular (Icono) */}
        <div className="z-20 w-11 h-11 bg-black rounded-2xl flex items-center justify-center shadow-[4px_0_10px_rgba(0,0,0,0.3)] border border-[#E5C17A]/20 transition-transform duration-300 group-hover:scale-110">
          <svg 
            viewBox="0 0 24 24" 
            width="22" 
            height="22" 
            fill="none" 
            stroke="#E5C17A" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-2.5 7.5Z" />
            <path d="M17.4 15.3l-1.3-1.3c-.3-.3-.8-.3-1.1 0l-.5.5c-.3.3-.8.3-1.1 0l-2.8-2.8c-.3-.3-.3-.8 0-1.1l.5-.5c.3-.3.3-.8 0-1.1L9.8 7.7c-.3-.3-.8-.3-1.1 0L7.4 9c-.7.7-.8 1.8-.3 2.6 1.1 1.8 3.3 4.1 5.1 5.2.8.5 1.9.4 2.6-.3l1.3-1.3c.3-.3.3-.8 0-1.1l-.1.1Z" />
          </svg>
        </div>

        {/* Parte Alargada (Cápsula) */}
        <div className="relative -ml-4 pl-6 pr-5 py-2 bg-white/90 backdrop-blur-sm rounded-r-full border border-black/5 shadow-inner overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(229,193,122,0.3)]">
          <span className="text-black text-[10px] font-black uppercase tracking-[0.2em] relative z-10">
            Contacto
          </span>

          {/* Efecto Escáner Láser que recorre la cápsula */}
          <div className="absolute top-0 left-0 w-[2px] h-full bg-[#E5C17A] shadow-[0_0_8px_#E5C17A] opacity-0 group-hover:opacity-100 group-hover:animate-scan-horizontal z-20"></div>
        </div>

        {/* Estilo de la Animación */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan-horizontal {
            0% { left: 0%; }
            100% { left: 100%; }
          }
          .group-hover\\:animate-scan-horizontal {
            animation: scan-horizontal 2s linear infinite;
          }
        `}} />
      </div>
    </nav>
  );
};

export default Navbar;