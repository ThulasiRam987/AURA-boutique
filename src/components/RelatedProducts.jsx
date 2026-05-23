import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RelatedProducts({ products }) {
  const navigate = useNavigate();
  return (
    <div className="py-20 bg-white px-4 md:px-8 border-t border-boutique-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-heading tracking-wide text-boutique-text">Complete the Look</h2>
          <button
            onClick={() => navigate('/#products')}
            className="hidden md:flex items-center gap-2 text-sm font-sans tracking-widest uppercase font-medium text-boutique-gold hover:text-boutique-text transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3">
          {products.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={item.id} 
              onClick={() => navigate(`/product/${item.id}`)}
              className="flex-shrink-0 w-64 md:w-auto group cursor-pointer"
            >
              <div className="rounded-lg overflow-hidden mb-6 bg-boutique-50 aspect-[3/4]">
                <img 
                  src={item.images && item.images.length > 0 ? item.images[0] : ''} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-heading tracking-wide text-boutique-text mb-2 font-semibold">{item.name}</h3>
              <p className="text-boutique-800 font-sans font-medium">₹{item.price.toLocaleString('en-IN')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
