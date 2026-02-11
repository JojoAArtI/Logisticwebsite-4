
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Rocket, Zap, Users } from 'lucide-react';

const StatCounter: React.FC<{ target: number, label: string, suffix?: string }> = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);
      }
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={countRef} className="text-center md:text-left">
      <p className="text-4xl md:text-6xl font-black text-gray-900 mb-2">{count}{suffix}</p>
      <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
};

const Vision: React.FC = () => {
  const milestones = [
    { year: '2025 Q1', title: 'Infrastructure Build', desc: 'Central hubs construction in Jaipur & Jodhpur.', icon: <Rocket size={18} /> },
    { year: '2025 Q3', title: 'Tech Integration', desc: 'Rollout of Corex AI routing & tracking system.', icon: <Zap size={18} /> },
    { year: '2026 Q1', title: 'Grand Launch', desc: 'Operations start across 33 districts of Rajasthan.', icon: <Calendar size={18} /> },
    { year: '2026 Q4', title: 'Global Gateway', desc: 'Opening air-freight corridors to EMEA markets.', icon: <Users size={18} /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gray-50 rounded-[4rem] p-10 md:p-24 relative overflow-hidden rajasthan-pattern">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest mb-10 shadow-xl shadow-orange-500/20">
              Vision 2026
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-10">
              Rewiring the <span className="text-orange-500">Logistics</span> DNA.
            </h2>

            <p className="text-xl text-gray-500 font-inter mb-12 max-w-xl leading-relaxed">
              We aren't just moving boxes; we are building the digital backbone of the Great Indian Desert. Reliable, sustainable, and hyper-local.
            </p>

            <div className="grid grid-cols-2 gap-10">
               <StatCounter target={2400} label="Partners Joined" suffix="+" />
               <StatCounter target={33} label="Cities Reached" />
               <StatCounter target={1200} label="Electric Fleet" suffix="+" />
               <StatCounter target={100} label="Carbon Neutral" suffix="%" />
            </div>
          </div>

          {/* Interactive Roadmap */}
          <div className="flex flex-col gap-8 py-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="group relative flex gap-8">
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {m.icon}
                   </div>
                   {idx !== milestones.length - 1 && <div className="w-[2px] h-full bg-gray-200 mt-2" />}
                </div>
                <div className="pt-2">
                   <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 block">{m.year}</span>
                   <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{m.title}</h4>
                   <p className="text-gray-500 font-inter text-sm max-w-xs">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
