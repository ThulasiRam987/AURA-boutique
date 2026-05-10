import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-boutique-50 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-boutique-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-4 font-semibold"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading mb-8 text-boutique-900"
          >
            The Essence of <br/><span className="italic text-boutique-400 font-light">Aura</span>
          </motion.h1>
        </div>

        {/* Image / Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-radius-3xl overflow-hidden shadow-2xl mb-16 relative"
        >
          <div className="absolute inset-0 bg-boutique-900/10 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src="/boutique-hero.png" 
            alt="Aura Boutique Atelier" 
            className="w-full h-full object-cover object-[center_15%]"
          />
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16">
          <motion.section 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-heading mb-6 text-boutique-900">Crafting Confidence</h2>
              <p className="text-boutique-900/70 font-sans leading-relaxed mb-4 font-light">
                Aura was founded on a simple principle: true luxury is effortless. We believe that clothing should empower the wearer, combining impeccable tailoring with the finest sustainable materials to create pieces that transcend seasons.
              </p>
              <p className="text-boutique-900/70 font-sans leading-relaxed font-light">
                Every stitch, every silhouette, and every fabric choice is meticulously considered in our atelier. We don't just design garments; we curate an experience of quiet confidence.
              </p>
            </div>
            <div className="bg-boutique-100 p-8 rounded-radius-2xl">
               <h3 className="text-xl font-heading mb-4 text-boutique-800">Our Values</h3>
               <ul className="space-y-4 font-sans text-sm text-boutique-900/80">
                 <li className="flex items-start">
                   <span className="text-boutique-gold mr-3">✦</span>
                   <span><strong>Timeless Elegance:</strong> Designs that defy fleeting trends.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-boutique-gold mr-3">✦</span>
                   <span><strong>Ethical Craftsmanship:</strong> Honoring the artisans behind our collections.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-boutique-gold mr-3">✦</span>
                   <span><strong>Sustainable Luxury:</strong> Sourcing materials with respect for our planet.</span>
                 </li>
               </ul>
            </div>
          </motion.section>

          <motion.section 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
             className="text-center max-w-2xl mx-auto pb-12"
          >
            <h2 className="text-3xl font-heading mb-6 text-boutique-900">The Modern Woman</h2>
            <p className="text-boutique-900/70 font-sans leading-relaxed font-light italic text-lg">
              "We dress the woman who speaks softly but carries a profound presence. Our garments are merely the canvas; she is the masterpiece."
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
