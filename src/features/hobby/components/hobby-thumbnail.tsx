'use client';

import { ImageOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { getHobbyThumbnailSrc } from '@/features/hobby/lib/get-hobby-thumbnail-src';
import type { Hobby } from '@/features/hobby/lib/types';

interface HobbyThumbnailProps {
  hobby: Pick<Hobby, 'id' | 'name'>;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** 부모는 `relative` + 크기가 정해진 컨테이너여야 한다. */
export const HobbyThumbnail = ({
  hobby,
  sizes,
  priority,
  className,
}: HobbyThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={`${hobby.name} 썸네일을 불러오지 못했어요`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-100 text-ink-500"
      >
        <ImageOff className="h-8 w-8" aria-hidden />
        <span className="text-sm">이미지를 불러오지 못했어요</span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div
          aria-hidden
          className="absolute inset-0 animate-pulse bg-surface-100"
        />
      )}
      <Image
        src={getHobbyThumbnailSrc(hobby)}
        alt={`${hobby.name} 썸네일`}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={className}
      />
    </>
  );
};
