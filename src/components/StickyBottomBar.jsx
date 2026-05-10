import { MessageCircle } from 'lucide-react';

export default function StickyBottomBar({ onAddToCart }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 glass pb-safe border-t border-boutique-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3 max-w-md mx-auto">
        <button 
          onClick={onAddToCart}
          className="w-full bg-boutique-50 text-boutique-900 border border-boutique-gold rounded-full py-4 text-sm tracking-widest uppercase font-medium transition-all hover:bg-boutique-gold hover:text-white active:scale-[0.98] shadow-[0_4px_14px_rgba(200,169,107,0.15)]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
