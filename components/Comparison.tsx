import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-background-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary mb-4">
            Pourquoi choisir <span className="text-primary">BrandVault</span> ?
          </h2>
          <p className="text-text-secondary">Arrêtez de bricoler avec des outils qui ne sont pas faits pour ça.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-white/10 w-1/4"></th>
                <th className="p-6 border-b border-primary/50 bg-primary/10 rounded-t-xl text-center min-w-[150px]">
                  <div className="font-display font-bold text-xl text-white">BrandVault</div>
                </th>
                <th className="p-6 border-b border-white/10 text-center text-text-muted font-medium min-w-[150px]">
                  Google Drive / Dropbox
                </th>
                <th className="p-6 border-b border-white/10 text-center text-text-muted font-medium min-w-[150px]">
                  Agences Classiques
                </th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                { label: "Génération IA", vault: true, drive: false, agency: "Lent" },
                { label: "Export Code (CSS/React)", vault: true, drive: false, agency: "Cher" },
                { label: "Versioning (Git-like)", vault: true, drive: true, agency: false },
                { label: "Coût", vault: "€", drive: "€", agency: "€€€€" },
                { label: "Temps de mise en place", vault: "30 min", drive: "Instantané", agency: "3 mois" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-medium text-text-primary">{row.label}</td>
                  
                  {/* BrandVault Column */}
                  <td className="p-4 text-center bg-primary/5 border-x border-primary/10">
                    {row.vault === true ? (
                      <div className="flex justify-center"><div className="bg-accent-success/20 p-1 rounded-full"><Check className="w-5 h-5 text-accent-success" /></div></div>
                    ) : (
                      <span className="font-bold text-text-primary">{row.vault}</span>
                    )}
                  </td>
                  
                  {/* Drive Column */}
                  <td className="p-4 text-center">
                    {row.drive === true ? (
                      <div className="flex justify-center"><Check className="w-5 h-5 text-text-muted" /></div>
                    ) : row.drive === false ? (
                      <div className="flex justify-center"><X className="w-5 h-5 text-text-muted" /></div>
                    ) : (
                      <span>{row.drive}</span>
                    )}
                  </td>
                  
                  {/* Agency Column */}
                  <td className="p-4 text-center">
                    {row.agency === false ? (
                       <div className="flex justify-center"><X className="w-5 h-5 text-text-muted" /></div>
                    ) : (
                      <span>{row.agency}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};