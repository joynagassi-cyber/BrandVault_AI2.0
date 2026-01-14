import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Cpu, Download, Image, Code, FileText, Palette, Quote } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent-cyan text-sm font-medium tracking-wider uppercase mb-4"
          >
            Notre Approche
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6"
          >
            Une <span className="text-accent-cyan">source de vérité</span> unique
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            BrandVault n'est pas un simple outil de stockage. C'est un système d'exploitation 
            qui orchestre l'identité de votre marque à travers tous vos canaux.
          </motion.p>
        </div>
        
        {/* Diagramme Architectural */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent-cyan/10 to-accent-magenta/10 blur-3xl pointer-events-none" />
          
          <div className="relative bg-background-secondary/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-[1fr,auto,1.5fr,auto,1fr] gap-8 items-center">
              
              {/* LAYER 1: INPUT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-accent-success/20 border border-accent-success/30 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-accent-success" />
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                    1. INPUT
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Règles, Assets, Valeurs & Ton de voix
                  </p>
                </div>
              </motion.div>
              
              {/* Connector 1 */}
              <div className="hidden lg:flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-accent-success to-primary rounded-full opacity-50" />
              </div>
              <div className="lg:hidden flex justify-center py-4">
                <div className="w-1 h-12 bg-gradient-to-b from-accent-success to-primary rounded-full opacity-50" />
              </div>
              
              {/* LAYER 2: KERNEL (Cerveau) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                
                <div className="relative bg-background-card border border-primary/30 rounded-2xl p-6 md:p-8 text-center shadow-glow-primary">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent-magenta flex items-center justify-center mb-6 shadow-lg">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                    2. KERNEL
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Orchestration Intelligente
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-wider">
                      Version Control
                    </span>
                    <span className="px-2 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] uppercase font-bold tracking-wider">
                      AI Processing
                    </span>
                  </div>
                </div>
              </motion.div>
              
              {/* Connector 2 */}
              <div className="hidden lg:flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent-magenta rounded-full opacity-50" />
              </div>
              <div className="lg:hidden flex justify-center py-4">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent-magenta rounded-full opacity-50" />
              </div>
              
              {/* LAYER 3: OUTPUT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-accent-magenta/20 border border-accent-magenta/30 flex items-center justify-center">
                  <Download className="w-8 h-8 text-accent-magenta" />
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                    3. OUTPUT
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Génération Multi-Canal
                  </p>
                  
                  {/* Icons Grid */}
                  <div className="grid grid-cols-2 gap-2 max-w-[160px] mx-auto">
                    <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-center"><Image className="w-4 h-4 text-accent-cyan" /></div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-center"><Code className="w-4 h-4 text-accent-cyan" /></div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-center"><FileText className="w-4 h-4 text-accent-cyan" /></div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 flex justify-center"><Palette className="w-4 h-4 text-accent-cyan" /></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
        
        {/* Citation clé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-magenta/5 border border-primary/20 backdrop-blur-sm">
            <Quote className="w-10 h-10 text-primary/50 mx-auto mb-4" />
            <p className="text-2xl font-medium text-text-primary leading-relaxed">
              Nous ne remplaçons pas votre créativité,<br />
              nous la <span className="text-primary">structurons</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};