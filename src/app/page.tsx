'use client';

import { useMemo, useState } from 'react';
import { CategoryTabs } from '@/features/hobby/components/category-tabs';
import { Hero } from '@/features/hobby/components/hero';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import { DEFAULT_CATEGORY_FILTER } from '@/features/hobby/constants/categories';
import { HOBBIES } from '@/features/hobby/constants/hobbies';
import { filterHobbiesByCategory } from '@/features/hobby/lib/filter-hobbies';
import type { HobbyCategoryFilter } from '@/features/hobby/lib/types';

const HOBBY_SECTION_ID = 'hobbies';

export default function Home() {
  const [category, setCategory] = useState<HobbyCategoryFilter>(
    DEFAULT_CATEGORY_FILTER
  );
  const hobbies = useMemo(
    () => filterHobbiesByCategory(HOBBIES, category),
    [category]
  );

  return (
    <>
      <Hero />
      <div id={HOBBY_SECTION_ID} className="scroll-mt-20">
        <CategoryTabs value={category} onChange={setCategory} />
        <div className="py-8 pb-16 lg:pb-20">
          <p role="status" className="sr-only">
            {hobbies.length}개의 취미를 표시하고 있어요
          </p>
          <HobbyGrid hobbies={hobbies} />
        </div>
      </div>
    </>
  );
}
