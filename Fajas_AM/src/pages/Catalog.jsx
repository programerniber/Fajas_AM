// src/pages/Catalog.jsx
import { useLocation } from 'react-router-dom'; // IMPORTANTE
import { useEffect } from 'react';              // IMPORTANTE
import Navbar from '../components/Navbar';
import logo from '../assets/logo.jpeg';

const Catalog = () => {
  const location = useLocation(); // Para detectar el #HASH en la URL

  // LÓGICA DE AUTO-SCROLL
  useEffect(() => {
    if (location.hash) {
      // Limpiamos el ID (quitamos el #)
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Esperamos un momento a que React renderice para hacer el scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]); // Se activa cada vez que cambias de categoría en el menú

  const whatsappNumber = "12694844066"; 
  
  const contactByProduct = (productName) => {
    const message = `Hola AMC Collection, me interesa obtener información sobre: ${productName}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Tu base de datos se mantiene IGUAL
  const products = [
    // USOS
    { id: 1, section: "USOS", category: "USO DIARIO", name: "Reloj de Arena Luxury", desc: "Compresión ideal para el día a día.", img: "/src/assets/imagen1.png" },
    { id: 2, section: "USOS", category: "DEPORTIVA", name: "Cinturilla Gold", desc: "Máximo rendimiento en tu entrenamiento.", img: "/src/assets/imagen3.png" },
    // NIVEL DE COMPRESIÓN
    { id: 3, section: "NIVEL DE COMPRESIÓN", category: "MEDIA", name: "Faja Confort", desc: "Moldeado suave y natural.", img: "/src/assets/imagen2.png" },
    { id: 4, section: "NIVEL DE COMPRESIÓN", category: "ALTA", name: "Powernet Premium", desc: "Máxima compresión y soporte.", img: "/src/assets/imagen1.png" },
    // ESTILOS DE FAJA
    { id: 5, section: "ESTILOS DE FAJA", category: "CINTURILLA", name: "Cinturilla Clásica", desc: "Define tu silueta al instante.", img: "/src/assets/imagen3.png" },
    { id: 6, section: "ESTILOS DE FAJA", category: "CHALECO", name: "Chaleco Sculpt", desc: "Soporte total para torso y espalda.", img: "/src/assets/imagen7.png" },
    { id: 7, section: "ESTILOS DE FAJA", category: "RELOJ DE ARENA", name: "Reloj de Arena Pro", desc: "Curvas perfectas garantizadas.", img: "/src/assets/imagen1.png" },
    { id: 13, section: "ESTILOS DE FAJA", category: "SHORT", name: "Short Moldeador", desc: "Control y comodidad en tus piernas.", img: "/src/assets/imagen6.png" },
    { id: 14, section: "ESTILOS DE FAJA", category: "INVISIBLE", name: "Faja Invisible", desc: "Tu secreto para un look impecable.", img: "/src/assets/imagen5.png" },
    { id: 15, section: "ESTILOS DE FAJA", category: "LEVANTA GLÚTEO", name: "Levanta Glúteo Elite", desc: "Realza tu figura con estilo.", img: "/src/assets/imagen4.png" }, 
    // ESTILOS - HOMBRE
    { id: 8, section: "ESTILOS (HOMBRE)", category: "CHALECO", name: "Chaleco Masculino", desc: "Soporte lumbar y corrección de postura.", img: "/src/assets/imagen2.png" },
    { id: 9, section: "ESTILOS (HOMBRE)", category: "SHORT MASCULINO", name: "Short de Compresión", desc: "Diseño ergonómico para caballeros.", img: "/src/assets/imagen2.png" },
    { id: 16, section: "ESTILOS (HOMBRE)", category: "CINTURILLA", name: "Cinturilla Masculina", desc: "Control firme para una silueta definida.", img: "/src/assets/imagen3.png" },
    // PIJAMAS
    { id: 10, section: "PIJAMAS DE TEMPORADA", category: "PIJAMA INVIERNO", name: "pijama Invierno", desc: "Calidez y elegancia para el frío.", img: "/src/assets/imagen4.png" },
    { id: 11, section: "PIJAMAS DE TEMPORADA", category: "PIJAMA VERANO", name: "Pijama Verano", desc: "Frescura y estilo para las noches cálidas.", img: "/src/assets/imagen5.png" }, 
    { id: 12, section: "POR MATERIAL", category: "PIJAMA SEDA", name: "Pijama de Seda", desc: "Lujo y suavidad absoluta.", img: "/src/assets/imagen4.png" },
    { id: 17, section: "POR MATERIAL", category: "PIJAMA ALGODÓN", name: "Pijama de Algodón", desc: "Comodidad natural para tu descanso.", img: "/src/assets/imagen5.png" }, 
    { id: 18, section: "POR MATERIAL", category: "PIJAMA POLAR", name: "Pijama Polar", desc: "Calidez acogedora para las noches frías.", img: "/src/assets/imagen6.png" }
  ];

  // Tu estructura maestra se mantiene IGUAL
  const catalogStructure = [
    { section: "USOS", subCategories: ["USO DIARIO", "DEPORTIVA"] },
    { section: "NIVEL DE COMPRESIÓN", subCategories: ["MEDIA", "ALTA"] },
    { section: "ESTILOS DE FAJA", subCategories: ["CHALECO", "RELOJ DE ARENA", "CINTURILLA", "SHORT", "INVISIBLE", "LEVANTA GLÚTEO"] },
    { section: "ESTILOS (HOMBRE)", subCategories: ["CHALECO", "CINTURILLA", "SHORT MASCULINO"] },
    { section: "PIJAMAS DE TEMPORADA", subCategories: ["PIJAMA INVIERNO", "PIJAMA VERANO"] },
    { section: "POR MATERIAL", subCategories: ["PIJAMA ALGODÓN", "PIJAMA SEDA", "PIJAMA POLAR"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={true} logo={logo} />

      <header className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-[10px] tracking-[0.6em] uppercase text-[#BDD2C1] font-bold mb-4">Exclusividad en cada detalle</h1>
        <h2 className="text-5xl md:text-7xl font-serif text-black italic">Catálogo <span className="text-[#C5A048] not-italic font-light">2026</span></h2>
        <div className="w-full h-[1px] bg-black mt-8 max-w-7xl mx-auto"></div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {catalogStructure.map((struct) => (
          <div key={struct.section} className="mb-24">
            <h3 className="text-center text-3xl font-bold tracking-[0.3em] text-black mb-16 uppercase">
              {struct.section}
            </h3>

            {struct.subCategories.map((subCat) => (
              /* AÑADIMOS EL ID Y EL SCROLL-MARGIN AQUÍ */
              <div 
                key={subCat} 
                id={subCat.toUpperCase().replace(/\s+/g, '-')} 
                className="mb-16 scroll-mt-32"
              >
                <h4 className="text-xl font-serif italic text-[#888] mb-8 border-b border-zinc-100 pb-2">
                  {subCat}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {products
                    .filter(p => p.section === struct.section && p.category === subCat)
                    .map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => contactByProduct(item.name)}
                        className="group cursor-pointer border-l border-black pl-8 hover:border-[#C5A048] transition-all duration-500"
                      >
                        <div className="relative overflow-hidden aspect-[4/5] border border-black shadow-[20px_20px_0px_-5px_rgba(189,210,193,0.3)] group-hover:shadow-[20px_20px_0px_-5px_rgba(197,160,72,0.3)] transition-all">
                          <img src={item.img} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        </div>
                        <div className="mt-8">
                          <h3 className="text-2xl font-serif text-black uppercase group-hover:text-[#C5A048] transition-colors">{item.name}</h3>
                          <p className="text-zinc-500 mt-2 text-lg font-light italic">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;