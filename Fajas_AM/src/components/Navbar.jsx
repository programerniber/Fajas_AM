// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom'; // Para navegar entre páginas
import { categories } from './navData';

const Navbar = ({ isScrolled, logo }) => {
  const navigate = useNavigate();

  // Función para manejar el clic en una categoría
  const handleCategoryClick = (categoryName) => {
    // Te redirige a la página de catálogo pasando la categoría por el estado
    navigate('/catalog', { state: { selectedCategory: categoryName } });
  };

  return (
    <nav className={`px-6 flex items-center justify-between sticky top-0 z-50 transition-all duration-500 
      ${isScrolled ? 'bg-[#E5C17A]/70 backdrop-blur-md py-2 shadow-lg' : 'bg-[#E5C17A] py-4'}`}>
      
      {/* Logo - Clic para volver al inicio */}
      <div 
        className="flex flex-col items-center gap-1 group cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="Logo" className={`object-contain transition-all duration-500 ${isScrolled ? 'h-14 w-20' : 'h-20 w-28'}`} />
        <span className={`font-bold tracking-widest uppercase italic text-black ${isScrolled ? 'text-[10px]' : 'text-sm'}`}>
          AMC COLLECTION
        </span>
      </div>

      {/* Menú Dinámico con Dropdown */}
      <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase text-black">
        {categories.map((cat, i) => (
          <li key={i} className="group relative py-4 cursor-pointer">
            <span className="hover:text-white transition-colors">{cat.name}</span>
            
            {/* Mega Menú Desplegable */}
            {cat.sections.length > 0 && (
              <div className="absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-b-lg p-6 grid grid-cols-3 gap-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-black">
                {cat.sections.map((sec, j) => (
                  <div key={j}>
                    <h4 className="font-bold text-black border-b border-zinc-200 mb-3 pb-1 uppercase">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, k) => (
                        <li 
                          key={k} 
                          onClick={() => handleCategoryClick(item)} // Al hacer clic, navega
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

      {/* Botón de Contacto */}
      <button className="bg-black text-[#E5C17A] hover:bg-zinc-800 font-bold py-2 px-4 rounded-lg text-xs uppercase transition-all">
        Contacto
      </button>
    </nav>
  );
};

export default Navbar;