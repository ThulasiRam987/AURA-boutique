import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collections } from "./CuratedCollections";

const MobileLuxuryCards = () => {
  const [stack, setStack] = useState(collections);

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      const updated = [...stack];
      const first = updated.shift();
      updated.push(first);
      setStack(updated);
    }
  };

  return (
    <section className="md:hidden py-14 px-5 overflow-hidden bg-boutique-50">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-boutique-gold mb-3">
          Curated Collections
        </p>

        <h2 className="text-3xl font-heading font-bold text-boutique-900 leading-tight">
          Boutique Highlights
        </h2>
      </div>

      {/* Card Stack */}
      <div className="relative w-full max-w-[320px] mx-auto h-[460px]">

        <AnimatePresence>
          {stack.map((card, index) => {
            const isTop = index === 0;

            return (
              <motion.div
                key={card.id}
                className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-[1px] border-boutique-200/50"
                style={{
                  zIndex: stack.length - index,
                  cursor: isTop ? "grab" : "default",
                }}
                initial={{
                  scale: 0.92,
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  scale: 1 - index * 0.04,
                  y: index * 12,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                whileDrag={{
                  scale: 1.03,
                  rotate: 2,
                }}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-7 text-white w-full">

                  <p className="text-[10px] uppercase tracking-[0.28em] font-medium text-boutique-100 opacity-90 mb-3">
                    Aura Boutique
                  </p>

                  <h3 className="text-3xl font-heading font-semibold leading-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-sans font-light leading-relaxed text-white/90 max-w-[240px]">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobileLuxuryCards;
