import { motion } from 'framer-motion';
import { Leaf, Gem, Heart, Sparkles, Users, Package, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const values = [
  {
    icon: Gem,
    title: 'Timeless Elegance',
    desc: 'Designs that transcend seasons and defy fleeting trends — crafted to be worn for decades.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Luxury',
    desc: 'Every fabric is sourced with deep respect for our planet and the communities that produce it.',
  },
  {
    icon: Heart,
    title: 'Ethical Craftsmanship',
    desc: 'We honour the artisans behind every stitch, ensuring fair wages and dignified working conditions.',
  },
  {
    icon: Sparkles,
    title: 'Quiet Confidence',
    desc: 'We believe true luxury whispers. Our silhouettes empower without demanding attention.',
  },
];

const stats = [
  { icon: Users,   value: '12,000+', label: 'Happy Customers'   },
  { icon: Package, value: '500+',    label: 'Curated Pieces'    },
  { icon: Star,    value: '4.8',     label: 'Average Rating'    },
  { icon: Award,   value: '8+',      label: 'Years of Craft'    },
];

const process = [
  { step: '01', title: 'Concept',   desc: 'Each collection begins with a mood — a feeling we want to evoke.' },
  { step: '02', title: 'Sourcing',  desc: 'We travel to source the finest sustainable fabrics and trims.' },
  { step: '03', title: 'Atelier',   desc: 'Skilled artisans bring every silhouette to life by hand.' },
  { step: '04', title: 'Curation',  desc: 'Only pieces that meet our standard of quiet luxury reach you.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-boutique-50">

      {/* ── Hero ── */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1400"
          alt="Aura Boutique atelier"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Warm sepia tint to match cream/gold theme */}
        <div className="absolute inset-0 bg-boutique-800/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-boutique-900/90 via-boutique-900/30 to-boutique-800/10" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
          <motion.p {...fadeUp(0.2)} className="text-boutique-gold text-sm font-sans tracking-[0.3em] uppercase mb-4 font-semibold">
            Our Story
          </motion.p>
          <motion.h1 {...fadeUp(0.4)} className="text-5xl md:text-7xl font-heading text-white leading-[1.1] mb-4">
            The Essence of <br /><span className="italic text-boutique-200 font-light">Aura</span>
          </motion.h1>
          <motion.p {...fadeUp(0.6)} className="text-white/70 font-sans font-light text-lg max-w-xl leading-relaxed">
            A boutique born from a love of craft, culture, and the quiet power of a well-made garment.
          </motion.p>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div className="bg-boutique-900 text-boutique-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <Icon className="w-5 h-5 text-boutique-gold" strokeWidth={1.5} />
              <p className="text-3xl font-heading font-bold text-white">{value}</p>
              <p className="text-xs font-sans tracking-widest uppercase text-boutique-50/60">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Story ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase font-semibold tracking-[0.3em] text-boutique-gold mb-4">Since 2016</p>
          <h2 className="text-4xl font-heading text-boutique-900 mb-6 leading-tight">Crafting Confidence, <br />One Garment at a Time</h2>
          <p className="text-boutique-900/65 font-sans leading-relaxed mb-4 font-light">
            Aura was founded on a simple principle: true luxury is effortless. We believe clothing should empower the wearer — combining impeccable tailoring with the finest sustainable materials to create pieces that transcend seasons.
          </p>
          <p className="text-boutique-900/65 font-sans leading-relaxed font-light">
            Every stitch, every silhouette, and every fabric choice is meticulously considered in our atelier. We don't just design garments; we curate an experience of quiet confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative aspect-[4/5] rounded-radius-2xl overflow-hidden shadow-2xl shadow-boutique-800/10"
        >
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800"
            alt="Artisan at work"
            className="w-full h-full object-cover object-top"
          />
          {/* Warm overlay to match cream/gold palette */}
          <div className="absolute inset-0 bg-boutique-800/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-boutique-900/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── Values ── */}
      <section className="bg-boutique-100/60 py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase font-semibold tracking-[0.3em] text-boutique-gold mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-heading text-boutique-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-boutique-gold/15 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-boutique-gold/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-boutique-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg text-boutique-900 font-semibold">{title}</h3>
                <p className="text-sm font-sans text-boutique-900/60 leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-xs uppercase font-semibold tracking-[0.3em] text-boutique-gold mb-3">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-heading text-boutique-900">From Concept to Closet</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {process.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col gap-3"
            >
              <span className="text-4xl font-heading font-bold text-boutique-gold/30">{step}</span>
              <h3 className="font-heading text-xl text-boutique-900 font-semibold">{title}</h3>
              <p className="text-sm font-sans text-boutique-900/60 leading-relaxed font-light">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Founder Quote ── */}
      <section className="bg-boutique-900 py-20 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-7xl font-heading text-boutique-gold/30 leading-none block mb-2">"</span>
          <p className="text-2xl md:text-3xl font-heading text-white font-light italic leading-relaxed mb-8">
            We dress the woman who speaks softly but carries a profound presence. Our garments are merely the canvas — she is the masterpiece.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-px bg-boutique-gold/40" />
            <p className="text-xs font-sans tracking-[0.25em] uppercase text-boutique-gold font-medium">Founder, Aura Boutique</p>
            <div className="w-10 h-px bg-boutique-gold/40" />
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading text-boutique-900 mb-4">Ready to Find Your Aura?</h2>
          <p className="text-boutique-900/60 font-sans font-light mb-8 max-w-md mx-auto">
            Explore our latest collection and discover pieces crafted just for you.
          </p>
          <Link
            to="/#products"
            className="inline-block bg-boutique-900 text-boutique-50 font-sans tracking-widest uppercase text-sm px-10 py-4 rounded-full hover:bg-boutique-gold transition-all duration-300 shadow-lg"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
