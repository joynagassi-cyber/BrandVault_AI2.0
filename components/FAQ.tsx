import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-text-primary">{question}</span>
        <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-secondary leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Est-ce que BrandVault remplace mes designers ?",
      answer: "Non. BrandVault automatise les tâches répétitives (déclinaisons, redimensionnements, vérifications) pour libérer vos designers. Ils peuvent enfin se concentrer sur la création pure, pas sur la maintenance de fichiers."
    },
    {
      question: "Puis-je importer ma charte graphique existante ?",
      answer: "Oui. Vous pouvez uploader vos fichiers PDF, SVG ou AI. Notre IA analyse et extrait automatiquement vos couleurs, polices et logos pour configurer votre BrandOS en quelques minutes."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons un chiffrement AES-256 de bout en bout. Vous restez 100% propriétaire de vos assets. Nous sommes conformes RGPD et SOC 2."
    },
    {
      question: "L'API est-elle incluse dans tous les plans ?",
      answer: "L'accès API est disponible à partir du plan Pro. Le plan Starter est conçu pour les besoins manuels des petites équipes."
    }
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-semibold text-text-primary text-center mb-12">
          Questions Fréquentes
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};