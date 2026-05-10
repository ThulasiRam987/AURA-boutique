import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ProductDescription({ product }) {
  const [openSection, setOpenSection] = useState('story');

  const sections = [
    { id: 'story', title: 'The Story', content: product.description },
    { id: 'fabric', title: 'Fabric & Fit', content: product.fabric },
    { id: 'care', title: 'Care Instructions', content: product.care },
    { id: 'occasion', title: 'Styling Notes', content: product.occasion },
  ];

  return (
    <div className="py-16 border-t border-boutique-100 mt-16 max-w-7xl mx-auto px-4 md:px-8 bg-boutique-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center mb-12 font-heading tracking-wide text-boutique-text">Product Details</h2>
        
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-boutique-gold/30 pb-4">
              <button
                onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                className="w-full flex justify-between items-center py-4 text-lg font-heading tracking-wide text-boutique-text hover:text-boutique-gold transition-colors"
              >
                {section.title}
                <span className="text-boutique-gold">
                  {openSection === section.id ? <Minus className="w-5 h-5 stroke-1" /> : <Plus className="w-5 h-5 stroke-1" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === section.id ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-boutique-text/70 leading-relaxed font-sans font-light text-sm md:text-base pr-8 pb-4">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
