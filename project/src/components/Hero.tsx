import React from 'react';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 to-cyan-500"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1741235/pexels-photo-1741235.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            The Ultimate Cooling Mat to Protect Your Dog from Heat
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light animate-fade-in-delay">
            Experience up to 8 hours of cooling comfort with our patented technology
          </h2>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center mb-8">
            <CtaButton 
              text="Get Your Cooling Mat Now" 
              primary={true} 
              testId="hero-cta"
              href="https://tokro.shop/products/pet-dog-self-cooling-mat-pad-for-kennels-crates-and-beds-1295491688" 
            />
            <CtaButton 
              text="Learn More" 
              primary={false} 
              testId="hero-learn-more"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-sm font-medium">
              <span className="font-bold">7-Day Money Back</span> • <span className="font-bold">Free Shipping</span> • <span className="font-bold">24h Dispatch</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;