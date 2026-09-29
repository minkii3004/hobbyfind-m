import type {
  Hobby,
  HobbyCategory,
  HobbyCategoryFilter,
} from '@/features/hobby/lib/types';

const CATEGORY_ORDER: readonly HobbyCategory[] = [
  'exercise',
  'intelligence',
  'art',
];

const rotate = <T>(items: readonly T[], offset: number) =>
  items.map((_, index) => items[(index + offset) % items.length]);

/** 카테고리가 연달아 나열되지 않도록 행마다 순서를 돌려가며 번갈아 배치한다. */
const mixCategories = (hobbies: readonly Hobby[]) => {
  const groups = CATEGORY_ORDER.map((category) =>
    hobbies.filter((hobby) => hobby.category === category)
  );
  const rowCount = Math.max(...groups.map((group) => group.length));

  return Array.from({ length: rowCount }).flatMap((_, row) =>
    rotate(groups, row).flatMap((group) => (group[row] ? [group[row]] : []))
  );
};

export const filterHobbiesByCategory = (
  hobbies: readonly Hobby[],
  category: HobbyCategoryFilter
) =>
  category === 'all'
    ? mixCategories(hobbies)
    : hobbies.filter((hobby) => hobby.category === category);
