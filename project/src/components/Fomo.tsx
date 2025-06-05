import React, { useState, useEffect } from 'react';
import { Clock, Package, Users } from 'lucide-react';
import CtaButton from './CtaButton';

const Fomo: React.FC = () => {
  // Countdown timer state (24 hours from now)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  // Remaining stock (for demo purposes)
  const [stock, setStock] = useState(27);
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * 30) + 25);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate occasional stock decrease
  useEffect(() => {
    const stockInterval = setInterval(() => {
      if (Math.random() > 0.7 && stock > 1) {
        setStock(prevStock => prevStock - 1);
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(stockInterval);
  }, [stock]);

  // Randomize number of viewers currently on the page
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 30) + 25);
    }, 10000); // Every 10 seconds

    return () => clearInterval(viewerInterval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold mb-4">
              Limited Time Offer!
            </span>
            <h2 className="text-3xl font-bold mb-2">
              Today Only: 30% OFF
            </h2>
            <p className="text-lg opacity-90">
              Only 100 units today! Regular $69.80 → <span className="line-through">$69.80</span> <span className="text-2xl font-bold text-yellow-300">$36.99</span>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-80">Offer ends in</p>
                <p className="text-xl font-mono font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Package className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-80">Stock remaining</p>
                <p className="text-xl font-mono font-bold">
                  {stock} units left
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Users className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-80">People viewing now</p>
                <p className="text-xl font-mono font-bold">{viewers}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <CtaButton
              text="Grab Yours Before They're Gone"
              primary={true}
              testId="fomo-cta"
              href="https://tokro.shop/products/pet-dog-self-cooling-mat-pad-for-kennels-crates-and-beds-1295491688"
            />
            <p className="mt-4 text-sm opacity-80">
              Hurry! Once today's stock is gone, the sale ends. *Limit 2 per customer. Free shipping. 7-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fomo;
