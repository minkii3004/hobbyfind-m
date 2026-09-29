'use client';

import Link from 'next/link';
import { CategoryBadge } from '@/features/hobby/components/category-badge';
import { FavoriteButton } from '@/features/hobby/components/favorite-button';
import { HobbyThumbnail } from '@/features/hobby/components/hobby-thumbnail';
import type { Hobby } from '@/features/hobby/lib/types';

interface HobbyCardProps {
  hobby: Hobby;
  priority?: boolean;
}

export const HobbyCard = ({ hobby, priority }: HobbyCardProps) => (
  <article className="group relative">
    <Link
      href={`/hobbies/${hobby.id}`}
      className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
        <HobbyThumbnail
          hobby={hobby}
          priority={priority}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <CategoryBadge
          category={hobby.category}
          className="absolute left-3 top-3"
        />
      </div>
      <h3 className="mt-3 text-base font-semibold text-ink-950">
        {hobby.name}
      </h3>
    </Link>
    <FavoriteButton hobby={hobby} className="absolute right-3 top-3" />
  </article>
);
