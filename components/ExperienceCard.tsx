
import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group cursor-pointer text-center flex flex-col items-center w-full">
      <div className="aspect-[4/5] w-full overflow-hidden mb-4 md:mb-6 bg-gray-50 border border-[#EBE9E6]">
        <img 
          src={experience.imageUrl} 
          alt={experience.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <div className="space-y-2 md:space-y-3 px-2 md:px-4 w-full">
        <p className="text-[10px] tracking-[0.4em] text-[#CCBEB1] uppercase font-semibold">{experience.category}</p>
        <h3 className="text-lg md:text-xl font-light text-gray-900 leading-tight tracking-tight">{experience.title}</h3>
        <p className="text-[11px] tracking-widest text-[#CCBEB1] font-medium uppercase">{experience.location}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
