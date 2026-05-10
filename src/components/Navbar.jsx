import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { animate, stagger, splitText } from 'animejs';

export default function Navbar({ cart, setIsCartOpen }) {
  const logoRef = useRef(null);
  const location = useLocation();
  const { pathname, hash } = location;

  const getLinkClass = (path, linkHash = '') => {
    const isContactActive = linkHash === '#contact' && hash === '#contact';
    const isActive = (pathname === path && hash === linkHash) || isContactActive;
    return `${isActive ? 'text-boutique-gold' : 'text-boutique-900'} font-sans text-sm tracking-widest uppercase hover:text-boutique-gold transition-colors font-medium`;
  };

  useEffect(() => {
    if (logoRef.current) {
      const { chars } = splitText(logoRef.current, {
        chars: { wrap: true },
      });

      animate(chars, {
        y: ['75%', '0%'],
        duration: 750,
        ease: 'out(3)',
        delay: stagger(50),
        loop: 3,
        alternate: true,
        complete: () => {
          chars.forEach(char => char.style.transform = 'translateY(0%)');
        },
        onComplete: () => {
          chars.forEach(char => char.style.transform = 'translateY(0%)');
        }
      });
    }
  }, []);
  return (
    <header className="sticky top-0 z-40 glass px-4 md:px-8 py-4 flex justify-between items-center border-b border-boutique-gold/30">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 flex-1">
        <Link to="/" className={getLinkClass('/', '')}>Home</Link>
        <Link to="/#products" className={getLinkClass('/', '#products')}>Products</Link>
        <Link to="/about" className={getLinkClass('/about', '')}>About Us</Link>
        <Link to="/#contact" className={getLinkClass('/', '#contact')}>Contact</Link>
      </nav>

      {/* Logo */}
      <div className="flex-1 text-center flex justify-center overflow-hidden">
        <Link to="/" className="inline-block text-boutique-900 drop-shadow-sm hover:text-boutique-gold transition-colors duration-300 font-heading text-3xl tracking-[0.2em] uppercase font-bold" ref={logoRef}>
          Aura
        </Link>
      </div>

      {/* Cart & Mobile Nav Toggle */}
      <div className="flex-1 flex justify-end">
        <button className="relative p-2" onClick={() => setIsCartOpen(true)}>
          <ShoppingBag className="w-5 h-5 text-boutique-900 hover:text-boutique-gold transition-colors" />
          {cart.length > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-boutique-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
