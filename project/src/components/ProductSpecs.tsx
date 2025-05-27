import React, { useState } from 'react';
import { Ruler, Weight, CheckSquare, Calendar, Droplets } from 'lucide-react';

const ProductSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'medium' | 'large'>('medium');
  
  const specs = {
    medium: {
      size: '60cm x 45cm',
      weight: '800g',
      material: 'Non-toxic gel, Polyester exterior',
      durability: 'Passed 5000 durability tests',
      warranty: '3-year manufacturer warranty'
    },
    large: {
      size: '90cm x 60cm',
      weight: '1.2kg',
      material: 'Non-toxic gel, Polyester exterior',
      durability: 'Passed 5000 durability tests',
      warranty: '3-year manufacturer warranty'
    }
  };
  
  const specItems = [
    { 
      icon: <Ruler className="w-5 h-5 text-blue-600" />, 
      label: 'Size', 
      getValue: (size: 'medium' | 'large') => specs[size].size 
    },
    { 
      icon: <Weight className="w-5 h-5 text-blue-600" />, 
      label: 'Weight', 
      getValue: (size: 'medium' | 'large') => specs[size].weight 
    },
    { 
      icon: <Droplets className="w-5 h-5 text-blue-600" />, 
      label: 'Material', 
      getValue: (size: 'medium' | 'large') => specs[size].material 
    },
    { 
      icon: <CheckSquare className="w-5 h-5 text-blue-600" />, 
      label: 'Durability', 
      getValue: (size:  'medium' | 'large') => specs[size].durability 
    },
    { 
      icon: <Calendar className="w-5 h-5 text-blue-600" />, 
      label: 'Warranty', 
      getValue: (size: 'medium' | 'large') => specs[size].warranty 
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Check out the detailed specs of Pet Cooling Mats
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'medium' 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('medium')}
              >
                Medium (For Medium Dogs)
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'large' 
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('large')}
              >
                Large (For Large Dogs)
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={activeTab === 'medium' 
                      ? '/middle-mat.jpg'
                      : '/large-mat.jpg'}
                    alt={`Cooling mat for ${activeTab === 'medium' ? 'medium' : 'large'} dogs`}
                    className="rounded-lg w-full h-auto"
                    loading="lazy"
                  />
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    Recommended for {activeTab === 'medium' ? 'medium' : 'large'} dogs
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {activeTab === 'medium' ? 'Medium Size' : 'Large Size'} Specifications
                  </h3>
                  
                  <ul className="space-y-4">
                    {specItems.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-3">
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">{item.label}:</span>
                          <span className="ml-2 text-gray-900">{item.getValue(activeTab)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <a 
                      href="https://tokro.shop/products/pet-dog-self-cooling-mat-pad-for-kennels-crates-and-beds-1295491688"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center"
                      data-test-id={`specs-cta-${activeTab}`}
                    >
                      Buy {activeTab === 'medium' ? 'Medium' : 'Large'} Size
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;