import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import CartSidebar from './components/CartSidebar';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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
      <Navbar cart={cart} setIsCartOpen={setIsCartOpen} />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
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
      
      {/* Premium Persistent Footer */}
      <footer className="bg-boutique-900 text-boutique-50 pt-16 pb-8 mt-12 border-t border-boutique-gold/20" id="contact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="inline-block font-heading text-3xl tracking-widest uppercase mb-6 text-boutique-gold">Aura</Link>
              <p className="text-sm text-boutique-50/70 font-light leading-relaxed max-w-xs">
                Redefining modern luxury with ethically crafted, timeless silhouettes for the sophisticated woman.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-sans text-sm tracking-widest uppercase font-semibold mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-sm font-light text-boutique-50/70">
                <li><Link to="/#products" className="hover:text-boutique-gold transition-colors">Shop Collection</Link></li>
                <li><Link to="/about" className="hover:text-boutique-gold transition-colors">Our Story</Link></li>
                <li><Link to="/#contact" className="hover:text-boutique-gold transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-sans text-sm tracking-widest uppercase font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-4 text-sm font-light text-boutique-50/70">
                <li><a href="mailto:hello@auraboutique.com" className="hover:text-boutique-gold transition-colors">FAQ — Email Us</a></li>
                <li><a href="mailto:hello@auraboutique.com" className="hover:text-boutique-gold transition-colors">Shipping & Returns</a></li>
                <li><Link to="/#products" className="hover:text-boutique-gold transition-colors">Size Guide</Link></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-sans text-sm tracking-widest uppercase font-semibold mb-6 text-white">Connect</h4>
              <ul className="space-y-4 text-sm font-light text-boutique-50/70">
                <li><a href="mailto:hello@auraboutique.com" className="hover:text-boutique-gold transition-colors">hello@auraboutique.com</a></li>
                <li><a href="tel:+919876543210" className="hover:text-boutique-gold transition-colors">+91 98765 43210</a></li>
                <li className="pt-2 flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-boutique-gold transition-colors uppercase tracking-wider text-xs font-medium">Instagram</a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-boutique-gold transition-colors uppercase tracking-wider text-xs font-medium">Pinterest</a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-boutique-50/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-boutique-50/50">&copy; 2026 Aura Boutique. All rights reserved.</p>
            <div className="flex space-x-6 text-xs text-boutique-50/50">
              <a href="mailto:hello@auraboutique.com" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="mailto:hello@auraboutique.com" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
