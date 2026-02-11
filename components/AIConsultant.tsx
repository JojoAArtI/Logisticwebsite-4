
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Namaste! I am CorexBot, your AI logistics consultant for Corex Transport Group. How can I help you plan your shipment for 2026?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are CorexBot, a helpful AI assistant for 'Corex Transport Group', a premium logistics company based in Rajasthan, India, launching in 2026. 
          Use a professional yet warm tone. Mention Rajasthan's heritage or specific cities like Jaipur, Jodhpur, Udaipur where relevant. 
          Focus on logistics, freight, warehousing, and the vision of 2026. 
          Keep answers concise and helpful for mobile users.`,
          temperature: 0.7,
        },
      });

      const botText = response.text || "I apologize, I'm having trouble connecting to my central hub. Please try again later.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Oops! Something went wrong. I'm still in beta for our 2026 launch." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in zoom-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-black p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold">CorexBot AI</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">Vision 2026 Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-[1.5rem] text-sm shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-[1.5rem] rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-orange-500" />
                  <span className="text-xs text-gray-400">CorexBot is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about 2026 routes..."
                className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-4 pr-12 text-sm focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-2 w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors disabled:opacity-30 disabled:hover:bg-black"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-black text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-orange-500 transition-all group"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
