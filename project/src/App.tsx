import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import Fomo from './components/Fomo';
import Testimonials from './components/Testimonials';
import ProductSpecs from './components/ProductSpecs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';

function App() {
  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Trust />
        <Fomo />
        <Testimonials />
        <ProductSpecs />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

export default App;