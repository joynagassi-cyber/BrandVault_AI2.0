import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, DollarSign } from 'lucide-react';
import { Button } from './ui/Button';

export const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Clock className="w-7 h-7 text-accent-warning" />,
      title: "Perte de Temps",
      desc: "Vos équipes passent 4h par semaine à chercher le 'bon logo' ou la 'dernière version' de la charte graphique.",
      metric: "Coût annuel estimé : 15 000 €/employé",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-accent-warning" />,
      title: "Incohérence Visuelle",
      desc: "Votre site web affiche un #7B3FF2, vos slides utilisent #8A4FE8, et vos cartes de visite un troisième violet.",
      metric: "Perte de crédibilité professionnelle",
    },
    {
      icon: <DollarSign className="w-7 h-7 text-accent-warning" />,
      title: "Coûts Cachés",
      desc: "Vous payez un designer pour redimensionner un logo. Un développeur pour changer une couleur.",
      metric: "Tâches automatisables = 40% du budget créatif",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-accent-warning text-sm font-medium tracking-wider uppercase mb-4">
            Le Problème
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6">
            La gestion de marque traditionnelle<br />
            est <span className="text-accent-warning">fragmentée</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Et cela coûte cher. En temps, en argent, en opportunités manquées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent-warning/30 transition-all hover:bg-background-card/80"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-warning/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">
                {point.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {point.desc}
              </p>
              
              <div className="pt-6 border-t border-white/5">
                <span className="text-sm text-accent-warning font-medium">
                  → {point.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-text-primary font-medium mb-6">
            Il est temps de structurer votre marque comme votre code.
          </p>
          <Button variant="primary" size="lg">
            Découvrir la solution
          </Button>
        </motion.div>
      </div>
    </section>
  );
};