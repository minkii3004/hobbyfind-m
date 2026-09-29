'use client';

import { CATEGORY_TABS } from '@/features/hobby/constants/categories';
import type { HobbyCategoryFilter } from '@/features/hobby/lib/types';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
  value: HobbyCategoryFilter;
  onChange: (value: HobbyCategoryFilter) => void;
}

export const CategoryTabs = ({ value, onChange }: CategoryTabsProps) => (
  <div className="sticky top-20 z-30 -mx-5 border-b border-line-200 bg-surface-0 px-5 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
    <div
      role="group"
      aria-label="취미 카테고리 필터"
      className="flex items-center gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {CATEGORY_TABS.map(({ value: tabValue, label, icon: Icon }) => {
        const isSelected = value === tabValue;

        return (
          <button
            key={tabValue}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(tabValue)}
            className={cn(
              'flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium text-ink-700 transition-colors duration-200 hover:bg-surface-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 focus-visible:ring-offset-2',
              isSelected &&
                'bg-primary font-semibold text-primary-foreground shadow-sm hover:bg-primary'
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </button>
        );
      })}
    </div>
  </div>
);
