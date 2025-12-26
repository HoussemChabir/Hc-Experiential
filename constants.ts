
import { Experience, Story } from './types';
import sidibouImage from './components/SIDIBOU.jpg';
import douzImage from './components/DOUZZ.jpg';
import craftImage from './components/craft.jpg';

export const COLORS = {
  PRIMARY: '#316CCD', // Deep Mediterranean Blue (Sparing accent)
  SECONDARY: '#CCBEB1', // Desert Sand (Neutral grounding)
  BACKGROUND: '#FFFFFF',
  SURFACE: '#F9F8F6', // Off-white/Cream for low-contrast transitions
  TEXT: '#1A1A1A',
  TEXT_MUTED: '#8E8E8E',
  BORDER: '#EBE9E6',
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'The Blue Alleys of Sidi Bou Said',
    location: 'Carthage Coast',
    category: 'Architecture & Spirit',
    description: 'An early morning walk through the silence of the white and blue village, meeting with local craftsmen before the crowds arrive.',
    imageUrl: sidibouImage
  },
  {
    id: '2',
    title: 'Nomadic Echoes in the Grand Erg',
    location: 'Douz',
    category: 'Wilderness',
    description: 'Slow travel across the sand dunes, sleeping under a canopy of stars in a traditional Bedouin camp designed for quiet reflection.',
    imageUrl: douzImage
  },
  {
    id: '3',
    title: 'The Clay Legacy of Guellala',
    location: 'Djerba Island',
    category: 'Craftsmanship',
    description: 'Hands-on exploration of ancient pottery techniques in the subterranean workshops of Djerba, guided by master potters.',
    imageUrl: craftImage
  }
];

export const STORIES: Story[] = [
  {
    id: 's1',
    title: 'The Silent Language of the Medina',
    excerpt: 'Beyond the tourist maps lies a city of whispers and ancient geometry.',
    content: 'The Medina of Tunis is not a place to be visited; it is a place to be inhabited. Every nail in every wooden door tells a story of a century-old trade...',
    date: 'Oct 12, 2024',
    author: 'Yasmine Ben Salem',
    imageUrl: 'https://images.unsplash.com/photo-1548671842-8c1092a0129f?auto=format&fit=crop&q=80&w=1200'
  }
];
