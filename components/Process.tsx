
import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <div className="relative bg-black rounded-[3rem] mx-6 py-20 px-8 md:px-20 overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full">
         <img 
          src="https://images.unsplash.com/photo-1519003722824-192d992a605b?auto=format&fit=crop&q=80&w=1000" 
          className="w-full h-full object-cover opacity-30 grayscale"
          alt="Truck at night"
         />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Your Process
          </div>
          
          <div className="text-8xl md:text-9xl font-black text-white/10 mb-8 italic">(03/04)</div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Seamless delivery, <br />
            <span className="text-orange-500">handled by experts.</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-lg mb-12">
            From initial booking to the final doorstep drop, our Rajasthan network ensures a smooth and safe transit process tailored to your urgency. Every package is tracked with laser-precision.
          </p>

          <div className="flex gap-4">
             <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ChevronLeft />
             </button>
             <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ChevronRight />
             </button>
          </div>
        </div>

        <div className="hidden md:block">
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Digital logistics dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                 <p className="font-bold text-orange-500 text-sm mb-1 uppercase tracking-tighter">Live Insight</p>
                 <h4 className="text-xl font-bold">Smart Route Optimization 2026</h4>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
