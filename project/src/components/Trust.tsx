import React from 'react';
import { Users, Star, Award, ShieldCheck } from 'lucide-react';

const Trust: React.FC = () => {
  const trustBadges = [
    { 
      icon: <Users className="w-8 h-8 text-blue-600" />, 
      title: '10,000+', 
      description: 'Proven Track Record' 
    },
    { 
      icon: <Star className="w-8 h-8 text-yellow-500" />, 
      title: '4.8/5', 
      description: 'Average Star Rating',
    },
    { 
      icon: <Award className="w-8 h-8 text-blue-600" />, 
      title: 'Recommended by Veterinarians', 
      description: 'Expert-Verified' 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />, 
      title: 'BPA Free', 
      description: 'Made with Certified Safe Materials' 
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div 
              key={index} 
              className="text-center p-4"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeIn 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="flex justify-center mb-3">
                {badge.icon}
              </div>
              <div className="font-bold text-xl text-gray-900">{badge.title}</div>
              <div className="text-sm text-gray-600">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
