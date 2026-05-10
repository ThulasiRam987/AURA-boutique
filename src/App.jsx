import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartSidebar from './components/CartSidebar';
import { ShoppingBag } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === selectedSize && item.color === selectedColor.name
      );

      if (existingItemIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }

      const newItem = {
        ...product,
        cartId: Date.now().toString(),
        size: selectedSize,
        color: selectedColor.name,
        image: product.images[0],
        quantity: 1
      };
      return [...prevCart, newItem];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prevCart) => prevCart.map(item => {
      if (item.cartId === cartId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  return (
    <div className="min-h-screen bg-boutique-50 font-sans pb-24 lg:pb-0">
      <header className="sticky top-0 z-40 glass px-4 md:px-8 py-4 flex justify-between items-center border-b border-boutique-gold/30">
        <div className="w-8"></div>
        <Link to="/" className="font-heading text-3xl tracking-[0.2em] uppercase font-bold text-boutique-900 drop-shadow-sm">
          Aura
        </Link>
        <button className="relative p-2" onClick={() => setIsCartOpen(true)}>
          <ShoppingBag className="w-5 h-5 text-boutique-900" />
          {cart.length > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
      </Routes>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
      
      {/* Persistent Footer */}
      <footer className="bg-boutique-900 text-boutique-50 py-12 text-center mt-12">
        <Link to="/" className="inline-block font-heading text-3xl tracking-widest uppercase mb-6">Aura</Link>
        <p className="text-sm text-boutique-50/60">&copy; 2026 Aura Boutique. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
