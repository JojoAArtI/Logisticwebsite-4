
import React from 'react';
import { Truck, Warehouse, Globe, Zap, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 rajasthan-pattern py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-[0.9]">
            The Corex <br />
            <span className="text-orange-500">Service Stack</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-sm font-inter text-sm mb-2">
          Harnessing high-tech logistics infrastructure to move goods across Rajasthan with unprecedented speed and safety.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
        {/* Main Service */}
        <div className="md:col-span-8 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden bg-black shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
            alt="Main Cargo"
          />
          <div className="absolute inset-0 p-10 flex flex-col justify-end text-white pointer-events-none">
            <div className="flex items-center gap-3 mb-4">
               <div className="p-3 bg-orange-500 rounded-2xl"><Truck size={24} /></div>
               <span className="font-bold tracking-widest uppercase text-xs">Primary Network</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Hyper-Local <br/> Rajasthan Express</h3>
            <p className="text-gray-300 max-w-md font-inter mb-6">Connecting all 33 districts within 12 hours. The fastest regional network ever built.</p>
            <button className="pointer-events-auto w-fit bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Secondary Services */}
        <div className="md:col-span-4 md:row-span-1 group relative rounded-[2.5rem] bg-white border border-gray-100 p-8 flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
             <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><Warehouse size={24} /></div>
             <ArrowRight className="text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Heritage Warehousing</h4>
            <p className="text-gray-500 text-sm font-inter">Climate-controlled hubs in Jodhpur and Jaipur.</p>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 group relative rounded-[2.5rem] bg-orange-500 p-8 flex flex-col justify-between text-white hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="flex justify-between items-start">
             <div className="p-4 bg-white/20 rounded-2xl"><Globe size={24} /></div>
             <ArrowRight className="text-white/50 group-hover:translate-x-1 transition-all" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Global Export Hub</h4>
            <p className="text-white/80 text-sm font-inter">Direct customs clearance for international trade.</p>
          </div>
        </div>

        {/* Small Detail Cards */}
        <div className="md:col-span-4 md:row-span-1 bg-gray-50 rounded-[2.5rem] p-8 flex items-center gap-6 group hover:bg-white border border-transparent hover:border-gray-100 transition-all">
          <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:text-orange-500 transition-colors"><ShieldCheck size={28} /></div>
          <div>
            <h4 className="font-bold">100% Insured</h4>
            <p className="text-xs text-gray-500 font-inter">Safe passage guaranteed.</p>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-gray-50 rounded-[2.5rem] p-8 flex items-center gap-6 group hover:bg-white border border-transparent hover:border-gray-100 transition-all">
          <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:text-orange-500 transition-colors"><Clock size={28} /></div>
          <div>
            <h4 className="font-bold">24/7 Support</h4>
            <p className="text-xs text-gray-500 font-inter">Always on the move.</p>
          </div>
        </div>

        <div className="md:col-span-4 md:row-span-1 bg-gray-50 rounded-[2.5rem] p-8 flex items-center gap-6 group hover:bg-white border border-transparent hover:border-gray-100 transition-all">
          <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:text-orange-500 transition-colors"><MapPin size={28} /></div>
          <div>
            <h4 className="font-bold">Last Mile</h4>
            <p className="text-xs text-gray-500 font-inter">Deep rural connectivity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
