import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-background-secondary to-background border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">
                Sécurité de classe entreprise
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Vos données de marque sont critiques. Nous les protégeons avec les standards les plus stricts de l'industrie.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-accent-success" />
                  <span className="text-text-primary">Chiffrement AES-256</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent-success" />
                  <span className="text-text-primary">Conformité RGPD & SOC 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-accent-success" />
                  <span className="text-text-primary">Propriété Intellectuelle 100%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5 text-accent-success" />
                  <span className="text-text-primary">Backups (RPO 6h)</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
               <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-accent-success/20 blur-3xl rounded-full animate-pulse" />
                  <div className="relative z-10 w-full h-full bg-background-card border border-accent-success/30 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-24 h-24 text-accent-success" />
                  </div>
                  {/* Orbiting particles */}
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full blur-sm" />
                  <div className="absolute bottom-10 right-0 w-3 h-3 bg-accent-cyan rounded-full blur-sm" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};