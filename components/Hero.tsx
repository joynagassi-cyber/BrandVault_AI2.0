import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Play, Shield, Lock, Download, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background-secondary via-background to-background opacity-50 z-0" />
      
      {/* Simulated 3D Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-gradient-radial from-primary-500/40 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase">
            Le Premier BrandOS au Monde
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text-primary leading-[1.1] mb-8"
        >
          Centralisez l'ADN<br />
          de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-magenta">Entreprise</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          BrandVault transforme votre identité visuelle et textuelle en une 
          <strong className="text-text-primary font-semibold"> infrastructure intelligente</strong>. 
          Du logo vectoriel au code de votre site web, garantissez une cohérence totale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Démarrer l'essai gratuit
          </Button>
          
          <Button variant="secondary" size="lg" icon={<Play className="w-5 h-5 fill-current" />}>
            Voir la démo (2 min)
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-text-muted text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent-success" />
            <span>Architecture sécurisée</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-accent-success" />
            <span>Propriété 100% client</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-accent-success" />
            <span>Export Figma & React</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => {
          document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </motion.div>
    </section>
  );
};