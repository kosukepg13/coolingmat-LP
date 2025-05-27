import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is approximately 100vh
      const scrollThreshold = window.innerHeight * 0.8;
      
      if (window.scrollY > scrollThreshold && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 z-40 animate-slideUp">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:block text-blue-800 font-medium">
          Keep your pet cool now. 30% off for a limited time!
        </div>
        
        <div className="flex-1 md:flex-none flex justify-center">
          <a 
            href="https://tokro.shop/products/pet-dog-self-cooling-mat-pad-for-kennels-crates-and-beds-1295491688"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            data-test-id="floating-cta"
          >
            Buy Now
          </a>
        </div>
        
        <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Close promotion banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default FloatingCta;