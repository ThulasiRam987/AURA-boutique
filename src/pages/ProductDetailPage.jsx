import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts, reviews } from '../utils/dummyData';
import ProductShowcase from '../components/ProductShowcase';
import SizeSelection from '../components/SizeSelection';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
import CustomerReviews from '../components/CustomerReviews';
import StickyBottomBar from '../components/StickyBottomBar';

export default function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = allProducts.find(p => p.id === id);
  
  // If product not found, you could redirect or show a message
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || { name: '', hex: '' });

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <main>
        {/* Main Product Section contains image gallery and right-side info */}
        <ProductShowcase product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />

        {/* Desktop CTA Buttons & Size */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-2 lg:-mt-16 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1 hidden lg:block"></div>
          <div className="flex-1">
            <SizeSelection sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-boutique-50 text-boutique-900 border border-boutique-gold rounded-full py-4 text-sm tracking-widest uppercase font-medium transition-all hover:bg-boutique-gold hover:text-white active:scale-[0.98] shadow-[0_4px_14px_rgba(200,169,107,0.15)]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <ProductDescription product={product} />
        <RelatedProducts products={relatedProducts} />
        <CustomerReviews reviews={reviews} />
      </main>

      <StickyBottomBar onAddToCart={handleAddToCart} />
    </>
  );
}
