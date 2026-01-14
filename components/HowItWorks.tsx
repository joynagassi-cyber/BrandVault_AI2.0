import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket } from 'lucide-react';
import { Button } from './ui/Button';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Importez vos assets",
      desc: "Uploadez vos logos (.SVG, .AI), polices et charte. Notre système extrait automatiquement les couleurs et règles.",
      tags: ["Drag & Drop", "Auto-parsing"],
      color: "from-primary to-accent-magenta",
      glow: "shadow-glow-primary"
    },
    {
      id: 2,
      title: "Définissez vos règles",
      desc: "Interface guidée pour définir : Palette, Ton de voix, Grid system et restrictions d'usage.",
      tags: ["Visual Editor", "AI Suggestions"],
      color: "from-accent-cyan to-primary",
      glow: "shadow-glow-cyan"
    },
    {
      id: 3,
      title: "Testez la génération IA",
      desc: "Générez un logo alternatif ou un post social. Vérifiez que les outputs respectent vos règles.",
      tags: ["Real-time Preview", "A/B Testing"],
      color: "from-accent-magenta to-accent-cyan",
      glow: "shadow-glow-primary"
    },
    {
      id: 4,
      title: "Déployez et intégrez",
      desc: "Invitez votre équipe. Connectez vos outils (Figma, Webflow). Activez l'API.",
      tags: ["Team Invites", "API Keys"],
      color: "from-accent-success to-primary",
      glow: "shadow-lg",
      icon: <Check className="w-10 h-10 text-white" />
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-background-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Mise en Place
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6">
            En 4 étapes, votre marque a<br />
            son <span className="text-primary">infrastructure</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Configuration en moins de 30 minutes. Aucune compétence technique requise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[3rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-cyan to-accent-magenta opacity-30" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                <div className={`
                  flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} 
                  flex items-center justify-center ${step.glow} relative z-10
                  mx-auto md:mx-0
                `}>
                  {step.icon ? step.icon : <span className="text-4xl font-display font-bold text-white">{step.id}</span>}
                </div>

                <div className="flex-1 pt-2 text-center md:text-left bg-background-card/30 md:bg-transparent p-6 md:p-0 rounded-2xl border border-white/5 md:border-none">
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {step.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-primary text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button variant="primary" size="lg" icon={<Rocket className="w-5 h-5" />}>
            Commencer maintenant
          </Button>
          <p className="mt-4 text-text-muted text-sm">
            Aucune carte de crédit requise • Configuration en 30 min
          </p>
        </motion.div>
      </div>
    </section>
  );
};