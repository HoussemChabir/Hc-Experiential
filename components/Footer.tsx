
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-3 space-y-8">
          <h2 className="text-2xl font-medium tracking-tight">SENSE TUNISIA</h2>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-light">
            Founded on the principle that travel should be a dialogue between cultures, not just a series of sights. We curate silence, authenticity, and human connection in the heart of Tunisia.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] font-semibold uppercase text-gray-900">Legal & Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Press Kit</a></li>
            <li><a href="mailto:sensetunisia@proton.me" className="hover:text-black transition-colors">sensetunisia@proton.me</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-24 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-300 tracking-[0.2em] uppercase">
        <p>© 2024 SENSE TUNISIA EXPERIENTIAL TRAVEL. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
