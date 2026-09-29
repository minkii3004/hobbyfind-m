'use client';

import { CATEGORY_LABELS } from '@/features/hobby/constants/categories';
import type { HobbyCategory } from '@/features/hobby/lib/types';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: HobbyCategory;
  className?: string;
}

export const CategoryBadge = ({ category, className }: CategoryBadgeProps) => (
  <span
    className={cn(
      'rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm',
      className
    )}
  >
    {CATEGORY_LABELS[category]}
  </span>
);
