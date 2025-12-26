
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white px-6 pt-20">
      <div className="max-w-screen-xl w-full flex flex-col items-center text-center">
        {/* Label */}
        <span className="text-[9px] tracking-[0.6em] text-[#CCBEB1] uppercase mb-12 animate-fade-in font-medium">
          SENSE TUNISIA — VOL. 01
        </span>
        
        {/* Heading */}
        <h1 className="text-5xl md:text-[88px] font-light text-[#1A1A1A] mb-16 tracking-tight max-w-5xl leading-[1.05] animate-fade-in-up">
          The art of slow discovery.
        </h1>

        {/* Hero Image Block - Editorial approach with contained border */}
        <div className="relative w-full max-w-6xl aspect-[21/9] overflow-hidden mb-16 animate-fade-in-up delay-200 border-[12px] border-[#F9F8F6]">
          <img 
            src="https://images.unsplash.com/photo-1548671842-8c1092a0129f?auto=format&fit=crop&q=80&w=2400" 
            alt="Tunisian Landscape"
            className="w-full h-full object-cover scale-105 animate-[slow-pan_40s_infinite_alternate]"
          />
        </div>

        {/* Narrative Flow Element */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up delay-500">
           <p className="text-[12px] tracking-[0.2em] uppercase text-[#CCBEB1] font-medium">Scroll to inhabit</p>
           <div className="w-[1px] h-16 bg-[#CCBEB1]/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[#CCBEB1] -translate-y-full animate-[scroll-line_2.5s_infinite]"></div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-pan {
          0% { transform: scale(1.1) translateX(-2%); }
          100% { transform: scale(1.1) translateX(2%); }
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 2.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-200 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default Hero;
