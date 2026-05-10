import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CustomerReviews({ reviews }) {
  return (
    <div className="py-20 bg-boutique-50 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl text-center mb-16 font-heading tracking-wide text-boutique-text">What They Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={review.id} 
            className="p-10 rounded-xl bg-white border border-boutique-gold/20 shadow-sm"
          >
            <div className="flex gap-1 mb-6 text-boutique-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-boutique-100'}`} />
              ))}
            </div>
            <p className="text-boutique-text/70 mb-8 text-sm leading-relaxed font-sans font-light italic">
              "{review.text}"
            </p>
            <div className="flex items-center gap-4">
              <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-heading font-medium tracking-wide text-boutique-text uppercase">{review.author}</p>
                <p className="text-xs font-sans text-boutique-400 mt-1 flex items-center gap-1">
                  Verified Buyer
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
