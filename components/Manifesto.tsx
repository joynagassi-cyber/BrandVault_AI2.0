import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-12 text-center"
        >
          Pourquoi nous avons créé <span className="text-primary">BrandVault</span>
        </motion.h2>
        
        <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La marque est devenue la <em className="text-primary not-italic font-medium">ressource stratégique</em> n°1 
            de l'entreprise moderne.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pourtant, elle reste gérée comme dans les années 90 : 
            fichiers dispersés sur des drives, guidelines PDF de 200 pages que personne ne lit, 
            et une armée de freelances qui réinventent la roue à chaque projet.
          </motion.p>
          
          <motion.p
            className="text-text-primary font-medium text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nous croyons que votre marque mérite une infrastructure.
          </motion.p>
          
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
          >
            Pas un simple "dossier partagé". Une véritable architecture logicielle où :
          </motion.p>
          
          <ul className="space-y-4 ml-4 md:ml-8 border-l-2 border-primary/20 pl-6">
            {[
              "Vos assets sont versionnés comme du code.",
              "Vos règles de marque sont exécutables, pas juste documentées.",
              "L'IA génère pour vous, mais vous gardez le contrôle."
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <Check className="w-6 h-6 text-accent-cyan mt-1 flex-shrink-0" />
                <span className="text-text-primary">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.p 
            className="text-text-primary text-xl pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            C'est ça, le BrandOS. Et c'est ce que nous construisons chez BrandVault.
          </motion.p>
        </div>
        
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-magenta" />
          <div>
            <p className="text-text-primary font-medium">L'équipe BrandVault</p>
            <p className="text-text-muted text-sm">Builders, pas marketeurs.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};