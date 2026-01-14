import React from 'react';
import { motion } from 'framer-motion';

export const Integrations: React.FC = () => {
  const tools = [
    "Figma", "Sketch", "Adobe XD", "Canva",
    "GitHub", "Webflow", "Framer", "WordPress",
    "Notion", "Slack", "Google Workspace", "Zapier"
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-display font-semibold text-text-primary mb-12">
          S'intègre à <span className="text-primary">votre workflow</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-text-secondary font-medium hover:bg-white/10 hover:text-white hover:border-primary/30 transition-all cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </div>
        
        <p className="mt-8 text-text-muted text-sm">
          + SDKs disponibles pour Python, Node.js et PHP.
        </p>
      </div>
    </section>
  );
};