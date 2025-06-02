import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    'Cooling effect reduces perceived temperature by up to 5°C',
    'Continuous cooling for up to 8 hours per use',
    'Machine washable with 99.9% bacteria removal',
    'Foldable design reduces storage space by 60%',
    'Passed 5000 durability tests with 3-year quality guarantee'
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="dist\pet-relaxing.png" 
                alt="Dog relaxing on cooling mat" 
                className="rounded-lg shadow-lg w-full h-auto object-cover scale-100"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">97%</p>
                <p className="text-sm">Pet owners recommend</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Scientifically Proven Cooling Effect
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our cooling mats are scientifically proven effective through collaboration with veterinarians.
              Check out these specific data points:
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    animation: 'fadeInRight 0.5s ease-out forwards',
                    opacity: 0,
                    transform: 'translateX(20px)'
                  }}
                >
                  <CheckCircle className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;