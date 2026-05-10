import { Heart } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative rounded-lg overflow-hidden mb-4 bg-boutique-50 aspect-[3/4]">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all text-boutique-900 z-10"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-boutique-300 text-boutique-300' : 'text-boutique-900'}`} strokeWidth={1.5} />
        </button>
        
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans tracking-widest uppercase text-boutique-text rounded-full shadow-sm">
            New Arrival
          </span>
        )}
      </div>
      <h3 className="text-lg font-heading tracking-wide text-boutique-text mb-1 truncate font-semibold">{product.name}</h3>
      <p className="text-sm text-boutique-800 font-sans font-medium">₹{product.price.toLocaleString('en-IN')}</p>
    </motion.div>
  );
}
