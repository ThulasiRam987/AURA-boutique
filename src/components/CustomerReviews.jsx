import { Star, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

function RatingBar({ label, percentage, delay }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-sans text-boutique-800 w-4 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-boutique-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          className="h-full bg-boutique-gold rounded-full"
        />
      </div>
      <span className="text-xs font-sans text-boutique-400 w-6 text-right shrink-0">{percentage}%</span>
    </div>
  );
}

export default function CustomerReviews({ reviews }) {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  // Build distribution from actual reviews
  const dist = [5, 4, 3, 2, 1].map(star => ({
    star,
    pct: Math.round((reviews.filter(r => r.rating === star).length / totalReviews) * 100)
  }));

  return (
    <section className="py-24 bg-boutique-50 px-4 md:px-8 max-w-7xl mx-auto">

      {/* Section heading */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase font-semibold tracking-[0.3em] text-boutique-gold mb-3">
          Customer Stories
        </p>
        <h2 className="text-4xl md:text-5xl font-heading text-boutique-text">What They Say</h2>
      </div>

      {/* Aggregate summary + bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-10 mb-16 bg-white border border-boutique-gold/20 rounded-2xl p-8 md:p-12 shadow-sm max-w-2xl mx-auto"
      >
        {/* Big score */}
        <div className="text-center shrink-0">
          <p className="text-7xl font-heading font-bold text-boutique-900 leading-none">{avgRating}</p>
          <div className="flex justify-center gap-1 mt-3 text-boutique-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.round(avgRating) ? 'fill-current' : 'text-boutique-100'}`} />
            ))}
          </div>
          <p className="text-xs font-sans text-boutique-400 mt-2 tracking-wide">{totalReviews} Reviews</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-24 bg-boutique-gold/20" />

        {/* Rating bars */}
        <div className="flex-1 w-full space-y-3">
          {dist.map(({ star, pct }, i) => (
            <RatingBar key={star} label={star} percentage={pct} delay={i * 0.1} />
          ))}
        </div>
      </motion.div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="relative p-8 rounded-2xl bg-white border border-boutique-gold/20 shadow-sm flex flex-col overflow-hidden"
          >
            {/* Decorative quote mark */}
            <span className="absolute top-4 right-6 text-8xl font-heading text-boutique-gold/10 leading-none select-none pointer-events-none">
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-5 text-boutique-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-boutique-100'}`} />
              ))}
            </div>

            {/* Review text */}
            <p className="text-boutique-text/70 text-sm leading-relaxed font-sans font-light italic flex-1 mb-8">
              "{review.text}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-boutique-gold/30"
              />
              <div>
                <p className="text-sm font-heading font-semibold tracking-wide text-boutique-text uppercase">
                  {review.author}
                </p>
                <p className="text-xs font-sans text-boutique-gold mt-0.5 flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" strokeWidth={2} />
                  Verified Buyer
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
