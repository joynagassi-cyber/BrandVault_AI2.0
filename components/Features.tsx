import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { Palette, Code, Shield, Sparkles, Zap, GitBranch, Check, FileCode } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-accent-cyan text-sm font-medium tracking-wider uppercase mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6">
            Un <span className="text-accent-cyan">écosystème complet</span><br />
            pour votre marque
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Feature 1: Visual Identity (Large 2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <GlassCard className="h-full p-8" glowColor="primary">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Palette className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    CORE
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-semibold text-text-primary mb-4">
                  Identité Visuelle Complète
                </h3>
                
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Générez et gérez tous vos assets graphiques depuis une seule interface. 
                  Logos vectoriels (.SVG, .AI), déclinaisons couleur, versions monochrome.
                </p>
                
                <ul className="space-y-3 mb-auto">
                  {[
                    "Vectorisation automatique d'images raster",
                    "Palette harmonieuse (couleurs principales + 5 nuances)",
                    "Typographie avec fallbacks web-safe"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary">
                      <Check className="w-5 h-5 text-accent-success flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Visual Preview */}
                <div className="mt-8 rounded-xl bg-background/50 p-6 border border-white/5 flex gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-pulse" />
                  {['#A855F7', '#3B82F6', '#10B981', '#F59E0B'].map((color, i) => (
                    <div 
                      key={i}
                      className="w-16 h-16 rounded-lg shadow-lg flex-shrink-0 border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Feature 2: Code Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="h-full p-6" glowColor="cyan">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-display font-semibold text-text-primary mb-3">
                Export Code Natif
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                 CSS, Tailwind, React, Flutter. Synchronisation temps réel.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan text-xs">Variables CSS</span>
                <span className="px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan text-xs">Theme.json</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Feature 3: Brand Guard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="h-full p-6" glowColor="magenta">
              <div className="w-12 h-12 rounded-xl bg-accent-warning/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent-warning" />
              </div>
              <h3 className="text-xl font-display font-semibold text-text-primary mb-3">
                Brand Guard AI
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Analyse pré-publication : détection couleurs off-brand, validation ton de voix.
              </p>
            </GlassCard>
          </motion.div>

          {/* Feature 4: Creative Lab (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <GlassCard className="h-full p-6" glowColor="magenta">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent-magenta/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent-magenta" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                    Creative Lab
                  </h3>
                  <p className="text-text-secondary">
                    Générez des posts sociaux, packagings et slides en quelques secondes.
                  </p>
                </div>
                <Button variant="secondary" size="sm">Essayer le Lab</Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Feature 5: API Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="h-full p-6" glowColor="primary">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-text-primary mb-3">
                API Access
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                REST API. 10k req/jour. Intégration custom.
              </p>
              <div className="text-xs font-mono text-text-muted bg-black/20 p-2 rounded border border-white/5">
                GET /v1/brand/colors
              </div>
            </GlassCard>
          </motion.div>

           {/* Feature 6: Version Control */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="h-full p-6" glowColor="cyan">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-display font-semibold text-text-primary mb-3">
                Version Control
              </h3>
              <p className="text-text-secondary text-sm">
                Historique complet. Rollback en 1 clic. Branches de test pour rebranding.
              </p>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};