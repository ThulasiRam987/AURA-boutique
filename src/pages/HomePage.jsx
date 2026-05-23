import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryGallery from '../components/CategoryGallery';
import CuratedCollections from '../components/CuratedCollections';
import MobileLuxuryCards from '../components/MobileLuxuryCards';
import { allProducts } from '../utils/dummyData';
import { motion } from 'framer-motion';
import { Truck, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { icon: Truck,        label: 'Free Shipping on orders above ₹999' },
  { icon: Leaf,         label: 'Ethically & Sustainably Crafted' },
  { icon: ShieldCheck,  label: '100% Authentic Handcrafted Pieces' },
  { icon: Sparkles,     label: 'Exclusive Limited Edition Drops' },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const newArrivals = allProducts.filter(p => p.isNewArrival).slice(0, 4);
  const bestSellers = allProducts.filter(p => p.isBestSeller).slice(0, 4);
  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-boutique-50">
      {/* Premium Hero Section */}
      <div className="relative bg-boutique-50 overflow-hidden min-h-[85vh] flex items-center border-b border-boutique-gold/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-12 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

            {/* Text Content */}
            <div className="w-full md:w-1/2 pt-8 md:pt-0 z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-boutique-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-6 font-semibold"
              >
                The Aura Collection
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading mb-8 text-boutique-900 leading-[1.1]"
              >
                Soft <br /><span className="italic text-boutique-400 font-light">Luxury</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-boutique-900/70 font-sans text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light"
              >
                Discover our meticulously curated collection of timeless elegance. Crafted for the modern woman who embraces quiet sophistication.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <a
                  href="#products"
                  className="relative inline-block overflow-hidden bg-boutique-900 text-boutique-50 font-sans tracking-widest uppercase text-sm px-10 py-4 rounded-radius-3xl hover:bg-boutique-gold hover:text-white transition-all duration-300 shadow-xl hover:shadow-boutique-gold/20 group"
                >
                  {/* shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  Shop The Collection
                </a>
                <a href="/about" className="text-sm font-sans tracking-widest uppercase text-boutique-800 hover:text-boutique-gold transition-colors underline underline-offset-4 decoration-boutique-gold/40">
                  Our Story
                </a>
              </motion.div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 relative pb-8 md:pb-0 mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="relative rounded-radius-3xl overflow-hidden shadow-2xl shadow-boutique-800/10 aspect-[4/5] md:aspect-[3/4]"
              >
                <div className="absolute inset-0 bg-boutique-900/10 mix-blend-overlay z-10 transition-opacity hover:opacity-0 duration-700"></div>
                <img
                  src="/boutique-hero.png"
                  alt="High fashion editorial woman in elegant dress"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 bg-boutique-200 rounded-full -z-10 blur-3xl opacity-60"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.2 }}
                className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-40 h-40 md:w-64 md:h-64 bg-boutique-100 rounded-full -z-10 blur-3xl opacity-50"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Trust Strip Marquee */}
      <div className="bg-boutique-900 text-boutique-50 py-3 overflow-hidden border-y border-boutique-gold/20">
        <div className="flex marquee-track gap-0">
          {[...trustItems, ...trustItems].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2.5 px-10 shrink-0">
              <Icon className="w-4 h-4 text-boutique-gold shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-sans tracking-widest uppercase whitespace-nowrap">{label}</span>
              <span className="ml-10 text-boutique-gold/40">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="products">

        {/* Categories Gallery */}
        <CategoryGallery activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Selected Category Products */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-heading font-bold tracking-wide text-boutique-text">{activeCategory === "All" ? "Shop All" : activeCategory}</h2>
            <span className="text-sm font-sans font-semibold text-boutique-800">{filteredProducts.length} Items</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-24 md:gap-x-8 md:gap-y-32">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Curated Collections Editorial Showcase */}
        {activeCategory === "All" && (
          <>
            <CuratedCollections setActiveCategory={setActiveCategory} />
            <MobileLuxuryCards />
          </>
        )}

        {/* New Arrivals */}
        {activeCategory === "All" && newArrivals.length > 0 && (
          <div className="mb-24 pt-16 border-t border-boutique-gold/30">
            <h2 className="text-3xl font-heading font-bold tracking-wide text-boutique-text mb-8">New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-24 md:gap-x-8 md:gap-y-32">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-24 md:gap-x-8 md:gap-y-32">
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
