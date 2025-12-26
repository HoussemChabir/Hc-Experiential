
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-48 px-6 bg-white border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-32">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">INQUIRIES</span>
            <h2 className="text-5xl font-light tracking-tight leading-tight">Start your journey.</h2>
          </div>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
            Every experience is curated personally. Share your vision with us, and we will craft a dialogue that resonates with your rhythm.
          </p>
          <div className="pt-12 space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Direct Contact</p>
            <p className="text-lg font-light">sensetunisia@proton.me</p>
            <p className="text-lg font-light">+216 71 000 000</p>
          </div>
        </div>

        <div className="bg-[#F9F8F6] p-12 lg:p-16 flex items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-500 font-light">To inquire about a journey, please email us or call directly. We will follow up within 24 hours.</p>
            <p className="text-lg font-light">Email: <a href="mailto:sensetunisia@proton.me" className="text-[#316CCD] underline">sensetunisia@proton.me</a></p>
            <p className="text-lg font-light">Phone: +216 71 000 000</p>
            <a href="mailto:sensetunisia@proton.me" className="inline-block mt-4 py-4 px-8 bg-[#CCBEB1] text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-[#b8a99a] transition-colors">Send Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
