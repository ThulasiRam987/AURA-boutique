import { useState } from 'react';
import { Ruler, CheckCircle2 } from 'lucide-react';

export default function SizeSelection({ sizes, selectedSize, setSelectedSize }) {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="font-heading text-lg font-medium tracking-wide text-boutique-text mb-1 uppercase">Select Size</h3>
          <p className="text-xs text-boutique-text/50 flex items-center gap-1 font-light tracking-wide">
            <CheckCircle2 className="w-3 h-3 text-boutique-gold" /> True to size. Model is 5'9" wearing S.
          </p>
        </div>
        <button 
          onClick={() => setShowGuide(true)}
          className="text-sm text-boutique-900/60 underline underline-offset-4 hover:text-boutique-900 flex items-center gap-1 transition-colors"
        >
          <Ruler className="w-4 h-4" /> Size Guide
        </button>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex-1 min-w-[3.5rem] py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 active:scale-95 border-[1.5px]
              ${selectedSize === size 
                ? 'bg-boutique-50 text-boutique-text border-boutique-gold shadow-sm' 
                : 'bg-white text-boutique-text/70 border-boutique-300 hover:border-boutique-gold hover:text-boutique-text'
              }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Simple Size Guide Modal (Overlay) */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setShowGuide(false)}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Size Guide</h2>
              <button onClick={() => setShowGuide(false)} className="text-boutique-900/50 hover:text-boutique-900 text-xl">&times;</button>
            </div>
            <div className="space-y-4 text-sm text-boutique-900/70">
              <div className="flex justify-between border-b pb-2"><span>Size</span><span>Bust / Waist / Hips (in)</span></div>
              <div className="flex justify-between border-b pb-2"><span>XS (0-2)</span><span>32 / 24 / 34</span></div>
              <div className="flex justify-between border-b pb-2"><span>S (4-6)</span><span>34 / 26 / 36</span></div>
              <div className="flex justify-between border-b pb-2"><span>M (8-10)</span><span>36 / 28 / 38</span></div>
              <div className="flex justify-between border-b pb-2"><span>L (12-14)</span><span>39 / 31 / 41</span></div>
              <div className="flex justify-between"><span>XL (16)</span><span>42 / 34 / 44</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
