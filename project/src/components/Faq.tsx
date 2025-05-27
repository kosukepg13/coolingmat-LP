import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: 'How long does the cooling effect last?',
      answer: 'Our cooling mats maintain their cooling effect for up to 8 hours thanks to our patented technology. That\'s about twice as long as standard cooling mats. While duration may vary slightly depending on your pet\'s weight and room temperature, many customers report the effect lasting throughout the day.'
    },
    {
      question: 'Can it be washed?',
      answer: 'Yes, it\'s fully washable. The outer cover is removable and machine washable. The inner gel section can be hand washed with mild detergent. We recommend air drying away from direct sunlight for best results.'
    },
    {
      question: 'Is it suitable for both small and large dogs?',
      answer: 'We offer two sizes: Medium (60cm x 45cm) and Large (90cm x 60cm). The Medium size is perfect for small to medium breeds (Chihuahuas, Shih Tzus, Beagles), while the Large size accommodates medium to large breeds (Golden Retrievers, Labradors, German Shepherds).'
    },
    {
      question: 'Is it safe if my pet chews or scratches it?',
      answer: 'Our cooling mats are made with highly durable materials resistant to scratching and chewing. The internal gel is non-toxic, BPA-free, and safe for pets. However, if the mat becomes damaged, we recommend replacing it to maintain optimal cooling performance.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day money-back guarantee. If you\'re not satisfied, contact us within 7 days for a full refund (return shipping at customer\'s expense). For products with manufacturing defects, we offer free replacement within 30 days of purchase.'
    },
    {
      question: 'Can cats use it too?',
      answer: 'Yes, it\'s perfect for cats too! It\'s especially popular with heat-sensitive breeds like Persians and Maine Coons. Cats may take longer than dogs to adapt to the cooling mat, so we recommend placing it in their favorite spots to help them get used to it.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about Pet Cooling Mats
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-600" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  }
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 p-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Have more questions? Feel free to contact us.
            </p>
            <a 
              href="https://tokro.shop/pages/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;