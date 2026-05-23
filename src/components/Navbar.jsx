import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { animate, stagger, splitText } from 'animejs';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home',     to: '/',          hash: ''         },
  { label: 'Products', to: '/#products', hash: '#products' },
  { label: 'About Us', to: '/about',     hash: ''         },
  { label: 'Contact',  to: '/#contact',  hash: '#contact'  },
];

export default function Navbar({ cart, setIsCartOpen }) {
  const logoRef = useRef(null);
  const location = useLocation();
  const { pathname, hash } = location;
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path, linkHash = '') => {
    const isActive = (pathname === path && hash === linkHash) ||
      (linkHash === '#contact' && hash === '#contact');
    return `${isActive ? 'text-boutique-gold' : 'text-boutique-900'} font-sans text-sm tracking-widest uppercase hover:text-boutique-gold transition-colors font-medium`;
  };

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    if (logoRef.current) {
      const { chars } = splitText(logoRef.current, { chars: { wrap: true } });
      animate(chars, {
        y: ['75%', '0%'],
        duration: 750,
        ease: 'out(3)',
        delay: stagger(50),
        loop: 3,
        alternate: true,
        onComplete: () => chars.forEach(c => (c.style.transform = 'translateY(0%)')),
      });
    }
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 glass px-4 md:px-8 py-4 flex justify-between items-center border-b border-boutique-gold/30">

        {/* Mobile: hamburger | Desktop: nav links */}
        <div className="flex-1 flex items-center">
          <button
            className="md:hidden p-2 -ml-2 text-boutique-900 hover:text-boutique-gold transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ label, to, hash: lHash }) => (
              <Link key={label} to={to} className={getLinkClass(to.split('#')[0] || '/', lHash)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo */}
        <div className="flex-1 text-center flex justify-center overflow-hidden">
          <Link
            to="/"
            ref={logoRef}
            className="inline-block text-boutique-900 drop-shadow-sm hover:text-boutique-gold transition-colors duration-300 font-heading text-3xl tracking-[0.2em] uppercase font-bold"
          >
            Aura
          </Link>
        </div>

        {/* Cart */}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.35 }}
              className="fixed top-0 left-0 h-full w-72 bg-boutique-50 z-50 flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-boutique-gold/20">
                <Link to="/" className="font-heading text-2xl tracking-[0.2em] uppercase text-boutique-900 font-bold">
                  Aura
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 -mr-2 text-boutique-800 hover:text-boutique-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
                {navLinks.map(({ label, to, hash: lHash }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      to={to}
                      className="block py-3.5 text-sm font-sans tracking-widest uppercase font-medium text-boutique-900 hover:text-boutique-gold border-b border-boutique-gold/10 transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-6 border-t border-boutique-gold/20">
                <button
                  onClick={() => { setMenuOpen(false); setIsCartOpen(true); }}
                  className="w-full flex items-center justify-center gap-2 bg-boutique-900 text-boutique-50 rounded-full py-3.5 text-xs font-sans tracking-widest uppercase font-medium hover:bg-boutique-gold transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  View Bag {cart.length > 0 && `(${cart.length})`}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
