'use client';

import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useFavoriteHobbiesStore } from '@/features/hobby/hooks/use-favorite-hobbies-store';
import type { Hobby } from '@/features/hobby/lib/types';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  hobby: Pick<Hobby, 'id' | 'name'>;
  className?: string;
}

export const FavoriteButton = ({ hobby, className }: FavoriteButtonProps) => {
  const isFavorite = useFavoriteHobbiesStore((state) =>
    state.favoriteIds.includes(hobby.id)
  );
  const toggleFavorite = useFavoriteHobbiesStore(
    (state) => state.toggleFavorite
  );
  // 선택 해제 직후에는 포인터가 아직 위에 있어도 hover 채움이 보이지 않도록 한다.
  const [isHoverSuppressed, setIsHoverSuppressed] = useState(false);

  const handleClick = () => {
    setIsHoverSuppressed(isFavorite);
    toggleFavorite(hobby.id);
  };

  const showHoverFill = !isFavorite && !isHoverSuppressed;

  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      aria-label={`${hobby.name} ${isFavorite ? '선호 취미 해제' : '선호 취미로 표시'}`}
      onClick={handleClick}
      onMouseLeave={() => setIsHoverSuppressed(false)}
      className={cn(
        'group/heart flex h-9 w-9 items-center justify-center rounded-full bg-surface-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 focus-visible:ring-offset-2',
        className
      )}
    >
      <Heart
        aria-hidden
        className={cn(
          'h-5 w-5 text-primary transition-colors duration-200',
          isFavorite && 'fill-primary',
          showHoverFill && 'group-hover/heart:fill-primary/25'
        )}
      />
    </button>
  );
};
