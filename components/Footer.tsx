
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
             <div className="flex items-center gap-2 mb-10">
              <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-2xl rotate-3">
                <span className="font-bold text-2xl">C</span>
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white">
                Corex<span className="text-orange-500">Group</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-lg max-w-sm mb-10 leading-relaxed">
              123 Corex Tower, Civil Lines, <br />
              Jaipur, Rajasthan 302001, India. <br />
              info@corextransport.com
            </p>

            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Switch to the <br />
              <span className="text-orange-500">logistics energy</span> <br />
              built for 2026.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all">
                  Explore Now <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <p>©2026 Corex Transport Group. All Right Reserved | Terms of Use</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Vision</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
