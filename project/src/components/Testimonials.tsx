import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  date: string;
  comment: string;
  petType: string;
  withImage?: boolean;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Misaki Tanaka",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      date: "June 15, 2024",
      comment: "I bought this for my Toy Poodle who's sensitive to heat. Thanks to this cooling mat, he can comfortably stay in the living room even during the hottest parts of the day. Love that it's washable too!",
      petType: "Toy Poodle",
      withImage: true
    },
    {
      name: "Kenta Sato",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      date: "June 3, 2024",
      comment: "Our Labrador struggles with heat, and summers were particularly challenging. Since we started using this mat, he's noticeably more comfortable. The size is perfect for large dogs.",
      petType: "Labrador"
    },
    {
      name: "Yuko Suzuki",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      date: "May 22, 2024",
      comment: "My cat won't leave it! I was worried she wouldn't be interested, but she took to it immediately. Love that it's foldable so I can move it around as she changes spots.",
      petType: "American Shorthair"
    },
    {
      name: "Makoto Takahashi",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      date: "May 18, 2024",
      comment: "I have two Shiba Inus and was worried about them overheating. This mat keeps them comfortable, and I love how durable it is - it stands up to their occasional chewing!",
      petType: "Shiba Inu",
      withImage: true
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about Pet Cooling Mats
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-sky-50 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.petType} owner</div>
                      </div>
                      <div className="ml-auto text-sm text-gray-500">
                        {testimonial.date}
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {testimonial.comment}
                    </p>
                    
                    {testimonial.withImage && (
                      <div className="mt-4">
                        <img 
                          src={testimonial.petType === "Toy Poodle" 
                            ? "https://images.pexels.com/photos/5731862/pexels-photo-5731862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            : "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          } 
                          alt={`${testimonial.name}'s pet`} 
                          className="rounded-lg w-full h-48 object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 focus:outline-none z-10"
            onClick={prevSlide}
            aria-label="View previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-600 hover:text-blue-800 focus:outline-none z-10"
            onClick={nextSlide}
            aria-label="View next review"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;