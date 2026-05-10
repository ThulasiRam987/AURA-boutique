import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Wedding Wear',
    count: 18,
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Festive Collection',
    count: 12,
    img: 'https://plus.unsplash.com/premium_photo-1701203335335-481040fa9600?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Casual Elegance',
    count: 20,
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Office Chic',
    count: 10,
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'Party Wear',
    count: 9,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400'
  },
];

const CategoryItem = ({ name, count, img, isActive, onClick }) => (
  <div onClick={onClick} className="flex flex-col items-center group cursor-pointer">
    
    {/* Luxury Circular Image */}
    <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden 
    bg-boutique-50 shadow-sm border mb-4 
    transition-all duration-500 group-hover:scale-105 
    group-hover:shadow-md ${isActive ? 'border-boutique-gold ring-4 ring-boutique-gold/20' : 'border-boutique-200/40'}`}>

      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Elegant Typography */}
    <div className="flex items-start">
      <span className={`text-[17px] md:text-lg font-heading tracking-wide ${isActive ? 'font-bold text-boutique-text' : 'font-medium text-boutique-800'}`}>
        {name}
      </span>

      <span className="text-xs text-boutique-gold font-sans font-medium ml-1 mt-1">
        {count}
      </span>
    </div>
  </div>
);

const CategoryGallery = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto">

      {/* Editorial Heading */}
      <div className="mb-10 text-center md:text-left flex justify-between items-end">
        <div>
          <p className="text-sm tracking-[0.25em] font-sans uppercase text-boutique-gold mb-2 font-medium">
            Curated Collections
          </p>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-boutique-text">
            Shop by Category
          </h2>
        </div>
        
        {activeCategory !== "All" && (
          <button 
            onClick={() => setActiveCategory("All")}
            className="hidden md:block text-sm font-sans tracking-widest uppercase font-medium text-boutique-800 hover:text-boutique-gold transition-colors"
          >
            View All Collections
          </button>
        )}
      </div>

      {/* Responsive Layout */}
      <div className="flex overflow-x-auto no-scrollbar md:flex-wrap md:justify-between gap-y-10 gap-x-6 pb-4">
        {categories.map((cat) => (
          <div key={cat.id} className="flex-shrink-0">
            <CategoryItem
              name={cat.name}
              count={cat.count}
              img={cat.img}
              isActive={activeCategory === cat.name}
              onClick={() => setActiveCategory(activeCategory === cat.name ? "All" : cat.name)}
            />
          </div>
        ))}
      </div>
      
      {activeCategory !== "All" && (
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => setActiveCategory("All")}
            className="text-xs font-sans tracking-widest uppercase font-semibold text-boutique-800 border border-boutique-800/30 px-6 py-2 rounded-full hover:bg-boutique-800 hover:text-boutique-50 transition-colors"
          >
            View All Collections
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoryGallery;
