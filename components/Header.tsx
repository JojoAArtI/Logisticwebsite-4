
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Vision 2026', href: '#vision' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 glass border-b border-gray-100/50 shadow-sm' : 'py-6 bg-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-black/10">
            <span className="font-bold text-xl">C</span>
          </div>
          <span className={`font-extrabold text-2xl tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
            Corex<span className="text-orange-500">Group</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-orange-500 relative group ${
                scrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-black text-gray-900 flex justify-between items-center group"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={20} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
          <button className="w-full bg-black text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 mt-4 text-lg">
            Track Now <ArrowUpRight size={20} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
