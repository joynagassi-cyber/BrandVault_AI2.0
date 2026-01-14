import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { Security } from './components/Security';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        {/* PHASE 1: AWARENESS */}
        <Hero />
        <Manifesto />
        <PainPoints />
        
        {/* PHASE 2: CONSIDERATION */}
        <Solution />
        <HowItWorks />
        <Features />
        <UseCases />
        
        {/* PHASE 3: EVALUATION */}
        <Comparison />
        <Security />
        <Integrations />
        
        {/* PHASE 4: DECISION & ACTION */}
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;