'use client';

import { SearchX } from 'lucide-react';
import { StatusMessage } from '@/features/common/components/status-message';
import { HobbyCard } from '@/features/hobby/components/hobby-card';
import type { Hobby } from '@/features/hobby/lib/types';

/** 첫 화면(above the fold)에 보이는 카드 수 — LCP 이미지를 미리 로드한다. */
const PRIORITY_CARD_COUNT = 4;

interface HobbyGridProps {
  hobbies: readonly Hobby[];
}

export const HobbyGrid = ({ hobbies }: HobbyGridProps) => {
  if (hobbies.length === 0) {
    return (
      <StatusMessage
        icon={SearchX}
        role="status"
        title="표시할 취미가 없어요"
        description="이 카테고리에는 아직 보여드릴 취미가 없습니다. 다른 카테고리를 선택해 보세요."
      />
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hobbies.map((hobby, index) => (
        <li key={hobby.id}>
          <HobbyCard hobby={hobby} priority={index < PRIORITY_CARD_COUNT} />
        </li>
      ))}
    </ul>
  );
};
