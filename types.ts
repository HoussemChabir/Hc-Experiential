
export interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
}

export type AppState = 'home' | 'experiences' | 'stories';
