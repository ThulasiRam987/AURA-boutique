import { useState } from 'react';
import { Star, ChevronRight, Share2, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductShowcase({ product, selectedColor, setSelectedColor }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 md:px-8 py-6 max-w-7xl mx-auto">
      {/* Image Gallery */}
      <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto no-scrollbar py-1">
          {product.images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative flex-shrink-0 w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeImage === idx ? 'border-boutique-800' : 'border-transparent hover:border-boutique-200'}`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        
        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex-1 rounded-3xl overflow-hidden bg-boutique-100 group aspect-[4/5] lg:aspect-auto h-[60vh] lg:h-[80vh]"
        >
          <img 
            src={product.images[activeImage]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all text-boutique-900"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-boutique-300 text-boutique-300' : 'text-boutique-900'}`} strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col mt-4 lg:mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-sans tracking-[0.2em] text-boutique-800 font-medium uppercase mb-3">
            {product.brand}
          </p>
          <h1 className="text-4xl lg:text-6xl font-heading text-boutique-900 mb-6 leading-tight font-medium">{product.name}</h1>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl lg:text-4xl font-light text-boutique-900">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-lg text-boutique-400 line-through decoration-1">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full tracking-wide">
                -{Math.round((1 - product.price/product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-boutique-gold/30">
            <div className="flex items-center text-boutique-gold">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-base font-medium text-boutique-900">{product.rating}</span>
            </div>
            <span className="text-boutique-800 text-sm font-medium">| &nbsp;&nbsp;&nbsp;{product.reviewsCount} Reviews</span>
          </div>
        </motion.div>

        {/* Colors */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading text-lg font-bold tracking-wide text-boutique-900 uppercase">
              Color: <span className="font-sans font-medium tracking-normal text-boutique-800 capitalize ml-2">{selectedColor.name}</span>
            </h3>
          </div>
          <div className="flex gap-4">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedColor === color ? 'ring-2 ring-boutique-900 ring-offset-2 ring-offset-boutique-50' : 'hover:scale-110 active:scale-95'}`}
              >
                <span className="w-8 h-8 rounded-full shadow-sm border border-black/5" style={{ backgroundColor: color.hex }}></span>
              </button>
            ))}
          </div>
        </div>

        {/* The rest of the form (SizeSelection) will be injected here in App.jsx or below this */}
      </div>
    </section>
  );
}
