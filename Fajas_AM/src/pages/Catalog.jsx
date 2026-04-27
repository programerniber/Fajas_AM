import Navbar from '../components/Navbar';
import logo from '../assets/logo.jpeg';

const Catalog = () => {
  const whatsappNumber = "12694844066"; // El número de tu imagen
  
  // Función para abrir WhatsApp con un mensaje personalizado
  const contactByProduct = (productName) => {
    const message = `Hola AMC Collection, me interesa obtener información sobre: ${productName}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const products = [
    { id: 1, name: "Reloj de Arena Luxury", desc: "Define tu cintura con compresión de alta tecnología.", img: "/src/assets/imagen1.png" },
    { id: 2, name: "Post-Quirúrgica Premium", desc: "Soporte total y recuperación acelerada con estilo.", img: "/src/assets/imagen2.png" },
    { id: 3, name: "Cinturilla Deportiva Gold", desc: "Potencia tu entrenamiento con máxima resistencia.", img: "/src/assets/imagen3.png" },
    { id: 4, name: "Pijama de Colección Seda", desc: "El descanso que tu cuerpo merece con elegancia.", img: "/src/assets/imagen4.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={true} logo={logo} />

      {/* Cabecera del Catálogo */}
      <header className="pt-24 pb-12 px-6 text-center bg-[#f9f9f9] border-b border-black">
        <h1 className="text-[10px] tracking-[0.6em] uppercase text-[#BDD2C1] font-bold mb-4">Exclusividad en cada detalle</h1>
        <h2 className="text-5xl md:text-7xl font-serif text-black italic">Catálogo <span className="text-[#C5A048] not-italic font-light">2026</span></h2>
      </header>

      {/* Grid de Productos Estilo Galería */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((item) => (
            <div 
              key={item.id} 
              onClick={() => contactByProduct(item.name)}
              className="group cursor-pointer border-l border-black pl-8 hover:border-[#C5A048] transition-all duration-500"
            >
              {/* Contenedor de Imagen con Efecto Oro */}
              <div className="relative overflow-hidden aspect-[4/5] border border-black shadow-[20px_20px_0px_-5px_rgba(189,210,193,0.3)] group-hover:shadow-[20px_20px_0px_-5px_rgba(197,160,72,0.3)] transition-all">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
              </div>

              {/* Texto: Nombre y Descripción */}
              <div className="mt-8">
                <h3 className="text-2xl font-serif text-black uppercase tracking-tight group-hover:text-[#C5A048] transition-colors">
                  {item.name}
                </h3>
                <p className="text-zinc-500 mt-2 text-lg leading-relaxed font-light italic">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#BDD2C1]">
                  <span>Click para asesoría inmediata</span>
                  <div className="h-[1px] w-12 bg-[#BDD2C1]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;