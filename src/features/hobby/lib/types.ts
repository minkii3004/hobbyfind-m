export type HobbyCategory = 'exercise' | 'intelligence' | 'art';

export interface HobbyInfo {
  difficulty: string;
  cost: string;
  duration: string;
  place: string;
}

export interface Hobby {
  id: string;
  name: string;
  category: HobbyCategory;
  description: string;
  info: HobbyInfo;
  benefits: readonly string[];
  recommendedFor: readonly string[];
  supplies: readonly string[];
  tips: readonly string[];
}

export type HobbyCategoryFilter = 'all' | HobbyCategory;
