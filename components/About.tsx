
import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          About Us
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          We are a dedicated team of <span className="text-orange-500">logistics experts</span> passionate about the Thar's growth.
        </h2>
        
        <p className="text-gray-500 text-lg leading-relaxed font-inter">
          With a shared commitment to Rajasthan's economic surge, we help merchants, families, and businesses transition to smarter, faster logistics through regional expertise and AI-driven routes.
        </p>

        <div className="flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/${i + 50}/100/100`} 
                alt="Team" 
                className="w-14 h-14 rounded-full border-4 border-white object-cover"
              />
            ))}
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900 leading-none">520+ Members</p>
            <p className="text-gray-500 text-sm mt-1">Operating from 33 Districts</p>
          </div>
        </div>

        <button className="group bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-orange-500 transition-all">
          Our Story
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="relative order-1 md:order-2">
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
          <img 
            src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=1000" 
            alt="Logistic landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorator */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-20 -z-10" />
      </div>
    </div>
  );
};

export default About;
