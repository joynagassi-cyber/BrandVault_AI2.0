import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-semibold text-text-primary mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-text-secondary">Commencez gratuitement. Évoluez avec votre équipe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Starter */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-text-primary mb-2">Starter</h3>
            <div className="text-3xl font-bold text-white mb-6">49€ <span className="text-sm font-normal text-text-muted">/mois</span></div>
            <ul className="space-y-3 text-sm text-text-secondary mb-8">
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 5 Utilisateurs</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 1 Brand Kit</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Export manuel</li>
            </ul>
            <Button variant="outline" className="w-full">Choisir Starter</Button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="relative p-8 rounded-2xl bg-background-card border border-primary/50 shadow-glow-primary transform md:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Recommandé
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Pro</h3>
            <div className="text-4xl font-bold text-white mb-6">149€ <span className="text-sm font-normal text-text-muted">/mois</span></div>
            <ul className="space-y-4 text-sm text-text-secondary mb-8">
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 20 Utilisateurs</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 5 Brand Kits</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> <strong>API Access</strong></li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Version Control</li>
            </ul>
            <Button variant="primary" className="w-full">Essayer Pro Gratuitement</Button>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-text-primary mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-white mb-6">Sur mesure</div>
            <ul className="space-y-3 text-sm text-text-secondary mb-8">
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Utilisateurs illimités</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> SSO / SAML</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> SLA garanti</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Manager dédié</li>
            </ul>
            <Button variant="outline" className="w-full">Contacter les ventes</Button>
          </div>
        </div>
      </div>
    </section>
  );
};