import React from 'react';
import { Button } from './ui/Button';
import { Rocket, Calendar, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 px-6 bg-gradient-to-b from-background via-background-secondary/20 to-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">
            Prêt à structurer<br />
            votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-cyan to-accent-magenta">marque</span> ?
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            Rejoignez les entreprises qui ont choisi de traiter leur marque 
            comme leur infrastructure la plus critique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" icon={<Rocket className="w-5 h-5" />}>
              Créer mon BrandVault
            </Button>
            <Button variant="secondary" size="lg" icon={<Calendar className="w-5 h-5" />}>
              Planifier une démo
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-12 py-12 border-t border-white/10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-magenta flex items-center justify-center">
                <span className="font-display font-bold text-white">B</span>
              </div>
              <span className="text-xl font-display font-bold text-text-primary">BrandVault</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Le premier système d'exploitation pour votre marque.
            </p>
          </div>
          
          <div>
            <h4 className="text-text-primary font-medium mb-4">Produit</h4>
            <ul className="space-y-3">
              {['Fonctionnalités', 'Tarifs', 'Cas d\'usage', 'Comparaison'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-medium mb-4">Ressources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Blog', 'Status'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-medium mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {['À propos', 'Carrières', 'Contact', 'Légal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2026 BrandVault AI. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};