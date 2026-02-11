
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="relative h-screen min-h-[600px] w-full flex flex-col justify-center pb-12 overflow-hidden bg-orange-50">
      {/* Background with advanced parallax - High Visibility Rajasthan Desert Road */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-200 ease-out"
        style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1590333746438-283fd8279bc9?auto=format&fit=crop&q=80&w=2400" 
          alt="Rajasthan Desert Highway"
          className="w-full h-full object-cover"
        />
        {/* Modern transparent overlay to protect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-white/30 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_15px_#f97316] animate-pulse" />
            Launching across Rajasthan in 2026
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-8 tracking-tighter drop-shadow-2xl">
            FREIGHT <br />
            <span className="text-orange-500 italic">UNLIMITED.</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mb-12 font-inter leading-relaxed drop-shadow-lg font-semibold">
            Corex brings state-of-the-art logistics to the heart of Rajasthan. From the dunes of Jaisalmer to the streets of Jaipur, we deliver the future.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button className="group relative bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_20px_40px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 active:scale-95">
              <span className="relative z-10">Join the Waitlist</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual anchor for the transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
    </div>
  );
};

export default Hero;
