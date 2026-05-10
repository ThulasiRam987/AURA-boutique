import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose, cart, removeFromCart, updateQuantity, clearCart }) {
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    let message = "Hi, I would like to place an order for:\n\n";
    cart.forEach(item => {
      message += `${item.name} - Size ${item.size} - Color ${item.color} - Qty ${item.quantity}\n`;
    });
    message += `\nTotal: ₹${totalAmount.toLocaleString('en-IN')}`;
    
    const encodedMessage = encodeURIComponent(message);
    // Replace with the actual business WhatsApp number
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-boutique-50 shadow-[-10px_0_40px_rgba(0,0,0,0.05)] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-boutique-50 border-b border-boutique-gold/30">
              <h2 className="text-xl font-heading tracking-widest uppercase text-boutique-text flex items-center gap-2">
                Shopping Bag <span className="text-xs bg-boutique-100 text-boutique-text px-2 py-0.5 rounded-full font-sans">{totalItems}</span>
              </h2>
              <div className="flex items-center gap-4">
                {cart.length > 0 && (
                  <button 
                    onClick={clearCart}
                    className="text-xs font-sans tracking-widest text-boutique-400 hover:text-boutique-text transition-colors flex items-center gap-1 uppercase"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Cart
                  </button>
                )}
                <button 
                  onClick={onClose}
                  className="p-2 -mr-2 text-boutique-800 hover:text-boutique-text transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-boutique-800">
                  <ShoppingBag className="w-12 h-12 mb-4 stroke-[1.5] text-boutique-gold" />
                  <p className="font-sans font-medium tracking-wide text-sm">Your shopping bag is empty.</p>
                  <button 
                    onClick={onClose}
                    className="mt-6 px-6 py-3 border-[1.5px] border-boutique-gold text-boutique-text font-semibold text-xs tracking-widest uppercase hover:bg-boutique-gold hover:text-white transition-all rounded-full shadow-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-6 group pb-6 border-b border-boutique-gold/10 last:border-0">
                    <div className="w-24 h-32 bg-boutique-100 flex-shrink-0 relative overflow-hidden rounded-md">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-sans font-medium text-boutique-text leading-tight pr-4">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-boutique-400 hover:text-boutique-text transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex gap-3 text-xs font-sans font-medium text-boutique-800 mb-2">
                          <span>Size: {item.size}</span>
                          <span>&bull;</span>
                          <span>Color: {item.color}</span>
                        </div>
                        <p className="text-sm font-heading font-medium text-boutique-text">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <div className="flex items-center mt-4 border-[1.5px] border-boutique-gold/50 rounded-full overflow-hidden w-fit">
                        <button 
                          onClick={() => updateQuantity(item.cartId, -1)}
                          className="px-3 py-1 text-boutique-800 hover:bg-boutique-gold/10 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 text-sm font-sans font-bold text-boutique-text min-w-[2.5rem] text-center border-x-[1.5px] border-boutique-gold/50">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, 1)}
                          className="px-3 py-1 text-boutique-800 hover:bg-boutique-gold/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / CTA Actions */}
            {cart.length > 0 && (
              <div className="p-6 bg-boutique-50 border-t border-boutique-gold/30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="block text-xs font-sans text-boutique-400 uppercase tracking-widest mb-1">Subtotal</span>
                    <span className="block text-xs font-sans text-boutique-400/70">Shipping calculated at checkout.</span>
                  </div>
                  <span className="text-2xl font-heading font-medium text-boutique-text">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-boutique-text text-white py-4 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all hover:bg-boutique-gold active:scale-[0.98] flex items-center justify-center shadow-sm"
                >
                  Place Order via WhatsApp
                </button>
                <button 
                  onClick={onClose}
                  className="w-full mt-3 bg-transparent text-boutique-text border border-boutique-text/20 py-4 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all hover:border-boutique-text active:scale-[0.98] flex items-center justify-center"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
