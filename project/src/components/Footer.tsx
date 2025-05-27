import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PetCool<span className="text-cyan-400">Mats</span></h3>
            <p className="text-blue-200 mb-6">
              Delivering comfort to your pets with innovative cooling technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-cyan-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Info</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-blue-200 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Care Instructions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-blue-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Returns</a></li>
              <li><a href="https://tokro.shop/pages/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-cyan-300" />
                <a href="mailto:info@petcoolmats.com" className="text-blue-200 hover:text-white transition-colors">
                  info@petcoolmats.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-cyan-300" />
                <a href="tel:1-800-123-4567" className="text-blue-200 hover:text-white transition-colors">
                  1-800-123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition-colors">
                Contact Form
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p className="mb-2">© 2024 PetCoolMats. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;