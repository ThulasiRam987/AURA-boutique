import { ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyBottomBar({ onAddToCart, product, selectedSize, selectedColor }) {
  const handleWhatsApp = () => {
    const msg = `Hi! I'm interested in *${product.name}* — Size: ${selectedSize}, Color: ${selectedColor?.name}. Price: ₹${product.price.toLocaleString('en-IN')}. Can you help me place an order?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass border-t border-boutique-gold/20 shadow-[0_-8px_30px_rgba(0,0,0,0.07)]"
    >
      {/* Product context strip */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 max-w-md mx-auto">
        <p className="text-xs font-sans font-medium text-boutique-800 truncate max-w-[60%]">{product?.name}</p>
        <div className="flex items-center gap-2 shrink-0">
          {product?.originalPrice && (
            <span className="text-xs text-boutique-400 line-through font-sans">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
          <span className="text-sm font-heading font-semibold text-boutique-900">₹{product?.price.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 px-4 pb-4 pt-2 max-w-md mx-auto">
        {/* WhatsApp enquiry */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 shrink-0 bg-[#25D366] text-white rounded-full px-5 py-3.5 text-xs font-sans font-semibold tracking-wide shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          Enquire
        </button>

        {/* Add to cart */}
        <button
          onClick={onAddToCart}
          className="flex-1 flex items-center justify-center gap-2 bg-boutique-900 text-boutique-50 rounded-full py-3.5 text-xs font-sans tracking-widest uppercase font-medium transition-all hover:bg-boutique-gold active:scale-[0.98] shadow-[0_4px_14px_rgba(200,169,107,0.15)]"
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
