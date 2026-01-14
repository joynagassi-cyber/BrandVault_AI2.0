import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Building2, ArrowRight } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Startups & Scale-ups",
      desc: "Déployez une marque forte sans embaucher une armée de designers. Gardez votre cohérence pendant votre hyper-croissance.",
      benefit: "Gagnez 20h/semaine"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-cyan" />,
      title: "Agences & Freelances",
      desc: "Livrez des Brand Books vivants et connectés à vos clients. Générez des revenus récurrents sur la maintenance.",
      benefit: "Upsell de services"
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent-magenta" />,
      title: "Grandes Entreprises",
      desc: "Centralisez les assets de 50+ filiales. Contrôlez l'usage de la marque par vos milliers d'employés.",
      benefit: "Gouvernance totale"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary">
            Pour qui est fait <span className="text-primary">BrandVault</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 p-4 rounded-xl bg-background inline-block border border-white/5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center text-primary font-medium text-sm">
                <span className="mr-2">{item.benefit}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};