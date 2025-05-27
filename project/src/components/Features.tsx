import React from 'react';
import { Snowflake, Droplets, Folder as Fold, Watch, ShieldCheck } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: 'Auto-Cooling Technology',
      description: 'Patented cooling gel reacts to pressure and temperature, providing up to 8 hours of continuous cooling effect'
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: 'Waterproof & Easy Care',
      description: 'Fully waterproof and machine washable for easy cleaning and maintenance'
    },
    {
      icon: <Fold className="w-8 h-8 text-blue-500" />,
      title: 'Compact Storage',
      description: 'Folds away neatly when not in use, saving valuable storage space'
    },
    {
      icon: <Watch className="w-8 h-8 text-blue-500" />,
      title: 'Long-Lasting Cooling',
      description: 'Maintains cooling effect for up to 8 hours - twice as long as standard cooling mats'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: 'Safety First Design',
      description: 'Made with BPA-free materials, safe for your pets even if chewed'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Keep Your Pet Cool and Comfortable
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help your dogs and cats beat the heat with our innovative cooling mat.
            Our patented cooling technology effectively regulates your pet's temperature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;