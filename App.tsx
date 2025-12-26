
import React, { useState, useRef } from 'react';
import { AppState } from './types';
import { EXPERIENCES, STORIES, COLORS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceCard from './components/ExperienceCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import philosophyImage from './components/GettyRF584886375.avif';
import desertImage from './components/Desert.png';
import geometricHeritageImage from './components/OFFICIEL MEDINA.jpg';
import virginBeachImage from './components/VIRGIN BEACH.jpg';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppState>('home');
  const experiencesRef = useRef<HTMLElement>(null);
  const storiesRef = useRef<HTMLElement>(null);
  const navbarHeight = 80; // h-20 = 80px

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const elementTop = ref.current.offsetTop;
      const offsetPosition = elementTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleTabChange = (tab: AppState) => {
    setActiveTab(tab);
    
    // Small delay to ensure DOM is updated before scrolling
    setTimeout(() => {
      if (tab === 'experiences' && experiencesRef.current) {
        scrollToSection(experiencesRef);
      } else if (tab === 'stories' && storiesRef.current) {
        scrollToSection(storiesRef);
      } else if (tab === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementTop = contactSection.offsetTop;
      const offsetPosition = elementTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            
            {/* Philosophy Section - Transitioning to Surface Color */}
            <section className="py-48 px-6 bg-[#F9F8F6] section-transition">
              <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-32 items-center">
                <div className="aspect-[3/4] overflow-hidden border border-[#EBE9E6]">
                  <img 
                    src={philosophyImage} 
                    alt="Tunisian street scene with white buildings, blue accents, and yellow doors"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="space-y-16">
                  <div className="space-y-6">
                    <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">THE PHILOSOPHY</span>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-gray-900">
                      Prioritizing <span className="italic">authenticity</span> over promotion.
                    </h2>
                  </div>
                  <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                    Tunisia is a tapestry of Mediterranean history, Berber resilience, and desert serenity. We facilitate quiet, intentional encounters that respect both the land and its people.
                  </p>
                </div>
              </div>
            </section>

            {/* Sensory Palette Grid - Transitions to Neutral Sand (#CCBEB1) */}
            <section className="py-48 px-6 bg-[#CCBEB1]/5 section-transition">
              <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center text-center mb-32 space-y-6">
                  <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">THE SENSORY PALETTE</span>
                  <h2 className="text-4xl font-light tracking-tight max-w-2xl">Anatomy of a landscape.</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { img: desertImage, title: "Tunisian Landscapes", desc: "The hills, coast, and deserts that shape Tunisia." },
                    { img: geometricHeritageImage, title: "Geometric Heritage", desc: "The colorful tiles and patterns of Tunisian towns.", offset: true },
                    { img: virginBeachImage, title: "Virgin Shores", desc: "Untouched beaches, soft sand, and clear water along Tunisia’s coast." }
                  ].map((item, idx) => (
                    <div key={idx} className={`space-y-8 ${item.offset ? 'md:mt-32' : ''}`}>
                      <div className="aspect-[4/5] bg-white overflow-hidden border border-[#EBE9E6]">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-[11px] tracking-[0.3em] uppercase font-semibold text-gray-900">{item.title}</h4>
                        <div className="w-8 h-[1px] bg-[#CCBEB1]"></div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[240px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Experiences Grid - Back to White, Centralized */}
            <section className="py-48 px-6 bg-white section-transition">
              <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24 border-b border-gray-100 pb-12">
                  <div className="space-y-4 mb-8">
                    <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">COLLECTION</span>
                    <h2 className="text-4xl font-light tracking-tight">Curated Journeys</h2>
                  </div>
                  <button 
                    onClick={() => handleTabChange('experiences')}
                    className="text-[11px] tracking-[0.4em] text-[#CCBEB1] hover:text-[#b8a99a] transition-colors uppercase font-medium"
                  >
                    Explore all
                  </button>
                </div>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-24">
                  {EXPERIENCES.slice(0, 4).map((exp) => (
                    <div key={exp.id} className="w-full md:w-[calc(50%-24px)] lg:w-[calc(25%-36px)] max-w-[300px]">
                      <ExperienceCard experience={exp} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Seasonal Wisdom - Horizontal Multi-Column Layout */}
            <section className="py-48 px-6 bg-[#F9F8F6] section-transition border-t border-[#EBE9E6]">
              <div className="max-w-screen-xl mx-auto">
                <div className="mb-24 space-y-10">
                  <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">GUIDE</span>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
                    <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-[1.05] max-w-2xl text-gray-900">
                      The Timing of Discovery
                    </h2>
                    <p className="text-lg text-gray-500 font-light leading-relaxed max-w-md">
                      Each month reveals a different facet of Tunisia’s soul. Choose your season with intentionality.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EBE9E6] border border-[#EBE9E6]">
                  {[
                    { season: "Spring", months: "March — May", vibe: "The Awakening", description: "Jasmine blossoms fill the air in Tunis. The north is lush and green, perfect for archaeological exploration in Dougga." },
                    { season: "Summer", months: "June — August", vibe: "The Azure Retreat", description: "Seek refuge in the thick white walls of Djerba's houchs and the cool waters of Tabarka." },
                    { season: "Autumn", months: "September — November", vibe: "The Harvest", description: "The olive harvest begins. The Saharan heat softens, making it the ideal window for deep-desert expeditions." },
                    { season: "Winter", months: "December — February", vibe: "The Solitude", description: "The Medinas are quiet, and the Sahara reveals its stark, crystalline beauty under cold clear nights." }
                  ].map((item, idx) => (
                    <div key={idx} className="group bg-white p-12 lg:p-14 space-y-10 hover:bg-[#FDFDFD] transition-colors duration-500 h-full flex flex-col">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] tracking-[0.4em] text-[#CCBEB1] uppercase font-bold">0{idx + 1}</span>
                          <span className="text-[10px] tracking-[0.2em] text-[#CCBEB1] uppercase font-medium">{item.months}</span>
                        </div>
                        <h3 className="text-3xl font-light group-hover:text-[#CCBEB1] transition-colors duration-500">{item.season}</h3>
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <p className="text-[11px] tracking-[0.3em] uppercase font-semibold text-gray-400 group-hover:text-[#CCBEB1] transition-colors">{item.vibe}</p>
                        <p className="text-gray-500 font-light leading-relaxed text-[15px]">{item.description}</p>
                      </div>

                      <div className="pt-8 mt-auto border-t border-gray-50">
                        <button className="text-[10px] tracking-[0.3em] uppercase font-semibold text-gray-300 group-hover:text-black transition-colors">EXPLORE SEASON</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'experiences':
        return (
          <section ref={experiencesRef} className="pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-48 px-4 md:px-6 bg-white">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center text-center mb-32 space-y-8">
                <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">COLLECTION</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">The Experiences</h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-2xl px-4">
                  Quiet encounters curated based on seasonal availability and local artisan schedules. We don't believe in templates; we believe in timing.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 justify-items-center">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="w-full max-w-[340px]">
                    <ExperienceCard experience={exp} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'stories':
        return (
          <section ref={storiesRef} className="pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 lg:pb-48 px-4 md:px-6 bg-white">
            <div className="max-w-screen-xl mx-auto">
              <div className="text-center mb-24 md:mb-32 space-y-6 px-4">
                <span className="text-[10px] tracking-[0.5em] text-[#CCBEB1] uppercase font-semibold">JOURNAL</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">Sense Tunisia Stories</h1>
              </div>
              <div className="max-w-5xl mx-auto space-y-24 md:space-y-32 lg:space-y-48">
                {STORIES.map(story => (
                  <div key={story.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                    <div className="aspect-[3/4] bg-gray-50 overflow-hidden border border-[#EBE9E6] w-full">
                      <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" />
                    </div>
                    <div className="space-y-8 md:space-y-10 lg:space-y-12 px-4 md:px-0">
                       <span className="text-[10px] tracking-[0.3em] text-[#CCBEB1] font-medium uppercase block">{story.date} — BY {story.author}</span>
                       <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">{story.title}</h2>
                       <p className="text-gray-500 font-light leading-relaxed text-lg md:text-xl">{story.excerpt}</p>
                       <button className="text-[11px] tracking-[0.4em] font-medium border-b border-black pb-2 hover:text-[#CCBEB1] hover:border-[#CCBEB1] transition-all uppercase">
                        Read Story
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Inter']">
      <Navbar currentTab={activeTab} setTab={handleTabChange} onBookClick={scrollToContact} />
      
      <main className="flex-grow">
        {renderContent()}
        <ContactSection />
      </main>

      <Footer />

      {/* Floating CTA with new color palette */}
      {activeTab === 'home' && (
        <div className="fixed bottom-12 right-12 z-40 hidden lg:block">
          <button 
            onClick={scrollToContact}
            className="group relative flex items-center justify-center"
          >
            <div className="absolute w-28 h-28 border border-[#CCBEB1]/20 rounded-full animate-[spin_12s_linear_infinite]"></div>
            <div className="bg-white border border-[#CCBEB1]/40 w-16 h-16 rounded-full flex items-center justify-center text-[9px] tracking-[0.3em] group-hover:bg-[#CCBEB1] group-hover:text-white transition-all duration-500 uppercase font-medium">
              BOOK
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
