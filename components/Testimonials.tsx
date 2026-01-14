import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Nous devions pitcher auprès d'investisseurs. BrandVault nous a permis de créer un deck cohérent en 2h au lieu de 2 jours.",
      author: "Alex Rivera",
      role: "CEO, Nexus Tech",
      metric: "Gain de temps : 90%"
    },
    {
      quote: "Enfin une source de vérité unique pour nos 12 produits. L'équipe dev ne me demande plus jamais les codes hexa.",
      author: "Sarah Chen",
      role: "Head of Design, Orbit",
      metric: "Support design : -70%"
    },
    {
      quote: "L'API nous a permis d'automatiser la génération de bannières pour nos 5000 produits e-commerce.",
      author: "Marc Dupont",
      role: "CTO, MarketFlow",
      metric: "ROI : x10"
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-background-secondary/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary text-center mb-16">
          Ils ont <span className="text-accent-success">adopté</span> le BrandOS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background-card/40 border border-white/5 p-8 rounded-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent-warning fill-accent-warning" />)}
              </div>
              <p className="text-lg text-text-primary mb-6 flex-1 italic">"{t.quote}"</p>
              
              <div className="pt-6 border-t border-white/5">
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-text-muted mb-2">{t.role}</div>
                <div className="text-sm font-medium text-accent-success">{t.metric}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};