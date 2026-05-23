import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function CartSidebar({ isOpen, onClose, cart, removeFromCart, updateQuantity, clearCart }) {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems  = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    let message = 'Hi, I would like to place an order for:\n\n';
    cart.forEach(item => {
      message += `• ${item.name} — Size: ${item.size}, Color: ${item.color}, Qty: ${item.quantity} — ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    message += `\nTotal: ₹${totalAmount.toLocaleString('en-IN')}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-boutique-50 shadow-[-10px_0_40px_rgba(0,0,0,0.06)] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-boutique-gold/30">
              <h2 className="text-xl font-heading tracking-widest uppercase text-boutique-text flex items-center gap-2.5">
                Shopping Bag
                <span className="text-xs bg-boutique-gold/15 text-boutique-gold px-2 py-0.5 rounded-full font-sans font-semibold">
                  {totalItems}
                </span>
              </h2>
              <div className="flex items-center gap-4">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs font-sans tracking-widest text-boutique-400 hover:text-red-400 transition-colors flex items-center gap-1 uppercase"
                  >
                    <Trash2 className="w-3 h-3" /> Clear
                  </button>
                )}
                <button onClick={onClose} className="p-2 -mr-2 text-boutique-800 hover:text-boutique-text transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-boutique-800">
                  <ShoppingBag className="w-12 h-12 mb-4 stroke-[1.5] text-boutique-gold" />
                  <p className="font-sans font-medium tracking-wide text-sm">Your shopping bag is empty.</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-3 border-[1.5px] border-boutique-gold text-boutique-text font-semibold text-xs tracking-widest uppercase hover:bg-boutique-gold hover:text-white transition-all rounded-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <motion.div
                    key={item.cartId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    className="flex gap-4 pb-6 border-b border-boutique-gold/10 last:border-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-28 bg-boutique-100 flex-shrink-0 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="text-sm font-sans font-semibold text-boutique-text leading-snug mb-1">{item.name}</h3>
                          <p className="text-xs font-sans text-boutique-400">
                            {item.size} &bull; {item.color}
                          </p>
                        </div>
                        {/* Always-visible remove button */}
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="p-1.5 rounded-full text-boutique-400 hover:text-red-400 hover:bg-red-50 transition-all shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity stepper */}
                        <div className="flex items-center border border-boutique-gold/40 rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="px-2.5 py-1 text-boutique-800 hover:bg-boutique-gold/10 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-xs font-sans font-bold text-boutique-text min-w-[2rem] text-center border-x border-boutique-gold/40">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="px-2.5 py-1 text-boutique-800 hover:bg-boutique-gold/10 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line subtotal */}
                        <p className="text-sm font-heading font-semibold text-boutique-text">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-6 bg-boutique-50 border-t border-boutique-gold/30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                {/* Totals */}
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-sans text-boutique-400 uppercase tracking-widest">Subtotal</span>
                  <span className="text-2xl font-heading font-medium text-boutique-text">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs font-sans text-boutique-400/70 mb-6">Shipping calculated at checkout.</p>

                {/* WhatsApp checkout */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] text-white py-4 rounded-full text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-all hover:bg-[#1ebe5d] active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-md shadow-green-200"
                >
                  <WhatsAppIcon />
                  Place Order via WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full mt-3 bg-transparent text-boutique-text border border-boutique-text/20 py-4 rounded-full text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all hover:border-boutique-gold hover:text-boutique-gold active:scale-[0.98] flex items-center justify-center"
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
