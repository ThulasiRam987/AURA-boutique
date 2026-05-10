import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryGallery from '../components/CategoryGallery';
import { allProducts } from '../utils/dummyData';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const newArrivals = allProducts.filter(p => p.isNewArrival).slice(0, 4);
  const bestSellers = allProducts.filter(p => p.isBestSeller).slice(0, 4);
  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-boutique-50">
      {/* Seasonal Banner */}
      <div className="bg-boutique-100 text-boutique-text py-16 px-4 md:px-8 text-center relative overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-sans tracking-[0.2em] uppercase mb-4 text-boutique-800 font-semibold"
          >
            The Festive Edit
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading mb-6 tracking-wide text-boutique-900 font-bold"
          >
            Curated Elegance for Your Special Moments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-boutique-900/80 font-sans font-medium max-w-lg mx-auto"
          >
            Discover our new arrivals featuring handwoven silks, intricate embroidery, and modern silhouettes.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Categories Gallery */}
        <CategoryGallery activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Selected Category Products */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-heading font-bold tracking-wide text-boutique-text">{activeCategory === "All" ? "Shop All" : activeCategory}</h2>
            <span className="text-sm font-sans font-semibold text-boutique-800">{filteredProducts.length} Items</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        {activeCategory === "All" && newArrivals.length > 0 && (
          <div className="mb-24 pt-16 border-t border-boutique-gold/30">
            <h2 className="text-3xl font-heading font-bold tracking-wide text-boutique-text mb-8">New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Best Sellers */}
        {activeCategory === "All" && bestSellers.length > 0 && (
          <div className="mb-16 pt-16 border-t border-boutique-gold/30">
            <h2 className="text-3xl font-heading font-bold tracking-wide text-boutique-text mb-8">Best Sellers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {bestSellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
