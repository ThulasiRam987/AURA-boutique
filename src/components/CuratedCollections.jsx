import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const collections = [
  {
    id: 1,
    title: "Wedding Edit",
    subtitle: "Timeless elegance for grand celebrations",
    image: "https://images.unsplash.com/photo-1702378154233-9b870ff8f1b3?q=80&w=687&auto=format&fit=crop",
    height: "h-[300px]",
    category: "Wedding Wear",
  },
  {
    id: 2,
    title: "Casual Muse",
    subtitle: "Soft everyday sophistication",
    image: "https://images.unsplash.com/photo-1651840760882-e5209bba5815?w=600&auto=format&fit=crop&q=60",
    height: "h-[300px]",
    category: "Casual Elegance",
  },
  {
    id: 3,
    title: "Festive Collection",
    subtitle: "Curated styles crafted for modern elegance",
    image: "https://plus.unsplash.com/premium_photo-1720798648593-d47ef30eb141?w=600&auto=format&fit=crop&q=60",
    height: "h-[624px]",
    featured: true,
    category: "Festive Collection",
  },
  {
    id: 4,
    title: "Office Chic",
    subtitle: "Minimal silhouettes with refined charm",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60",
    height: "h-[300px]",
    category: "Office Chic",
  },
  {
    id: 5,
    title: "Evening Glam",
    subtitle: "Luxury looks for unforgettable nights",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    height: "h-[300px]",
    category: "Party Wear",
  },
];

const CollectionCard = ({ title, subtitle, image, height, featured, category, onExplore, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onExplore(category)}
      className={`relative overflow-hidden rounded-[28px] ${height} group cursor-pointer border border-boutique-200/50 shadow-sm`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
        style={{ transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 1s ease-out' }}
      />

      {/* Gradient overlay — deepens on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
          opacity: hovered ? 1 : 0.85,
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white">
        <p className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase mb-2 text-boutique-100/80 font-medium">
          Aura Boutique
        </p>

        <h3 className={`font-heading leading-tight mb-2 ${featured ? "text-3xl md:text-5xl font-semibold" : "text-2xl md:text-3xl font-medium"}`}>
          {title}
        </h3>

        <p className="text-sm text-white/80 max-w-xs leading-relaxed font-sans font-light mb-4">
          {subtitle}
        </p>

        {/* Explore CTA — slides up on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => { e.stopPropagation(); onExplore(category); }}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-sans tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-boutique-gold hover:border-boutique-gold transition-colors duration-300"
            >
              Explore {title}
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const CuratedCollections = ({ setActiveCategory }) => {
  return (
    <section className="hidden md:block pt-8 pb-20">
      {/* Section Heading */}
      <div className="mb-14 text-center">
        <p className="text-xs uppercase font-semibold tracking-[0.3em] text-boutique-gold mb-3">
          Curated Collections
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-boutique-900 mb-5">
          Crafted for Every Occasion
        </h2>
        <p className="text-boutique-400 font-sans font-medium max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-4">
          Discover timeless silhouettes and premium boutique styles designed to bring elegance into every celebration.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-6">
          <CollectionCard {...collections[0]} index={0} onExplore={setActiveCategory} />
          <CollectionCard {...collections[1]} index={1} onExplore={setActiveCategory} />
        </div>
        <div className="md:col-span-2">
          <CollectionCard {...collections[2]} index={2} onExplore={setActiveCategory} />
        </div>
        <div className="flex flex-col gap-6">
          <CollectionCard {...collections[3]} index={3} onExplore={setActiveCategory} />
          <CollectionCard {...collections[4]} index={4} onExplore={setActiveCategory} />
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
