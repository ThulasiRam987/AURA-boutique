import { Heart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative rounded-lg overflow-hidden mb-4 bg-boutique-50 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-boutique-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Wishlist button */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all text-boutique-900 z-10"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-boutique-300 text-boutique-300' : 'text-boutique-900'}`} strokeWidth={1.5} />
        </button>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNewArrival && (
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans tracking-widest uppercase text-boutique-text rounded-full shadow-sm">
              New Arrival
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-boutique-gold/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans tracking-widest uppercase text-white rounded-full shadow-sm">
              Best Seller
            </span>
          )}
        </div>

        {/* Quick View CTA */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-4 left-4 right-4 z-10"
            >
              <div className="bg-white/90 backdrop-blur-md text-boutique-900 text-[11px] font-sans tracking-widest uppercase font-semibold py-3 rounded-full text-center shadow-md">
                Quick View
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Color swatches on hover */}
        <AnimatePresence>
          {isHovered && product.colors?.length > 1 && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 bottom-14 z-10 flex flex-col gap-2"
            >
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  title={color.name}
                  className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product info */}
      <h3 className="text-lg font-heading tracking-wide text-boutique-text mb-1 truncate font-semibold">{product.name}</h3>
      <div className="flex items-center gap-3">
        <p className="text-sm text-boutique-800 font-sans font-medium">₹{product.price.toLocaleString('en-IN')}</p>
        {product.originalPrice && (
          <p className="text-xs text-boutique-400 line-through font-sans">₹{product.originalPrice.toLocaleString('en-IN')}</p>
        )}
      </div>
    </motion.div>
  );
}
