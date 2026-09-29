import { Brain, Dumbbell, LayoutGrid, Palette } from 'lucide-react';
import type {
  HobbyCategory,
  HobbyCategoryFilter,
} from '@/features/hobby/lib/types';

export const CATEGORY_TABS = [
  { value: 'all', label: '전체', icon: LayoutGrid },
  { value: 'exercise', label: '운동형', icon: Dumbbell },
  { value: 'intelligence', label: '지능형', icon: Brain },
  { value: 'art', label: '예술형', icon: Palette },
] as const satisfies readonly {
  value: HobbyCategoryFilter;
  label: string;
  icon: unknown;
}[];

export const DEFAULT_CATEGORY_FILTER: HobbyCategoryFilter = 'all';

export const CATEGORY_LABELS: Record<HobbyCategory, string> = {
  exercise: '운동형',
  intelligence: '지능형',
  art: '예술형',
};
