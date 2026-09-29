'use client';

import { SearchX } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { StatusMessage } from '@/features/common/components/status-message';

export default function HobbyNotFoundPage() {
  return (
    <StatusMessage
      icon={SearchX}
      title="찾을 수 없는 취미예요"
      description="존재하지 않거나 잘못된 취미 주소입니다. 전체 취미 목록에서 다시 골라 보세요."
    >
      <Button asChild className="rounded-full px-6">
        <Link href="/">전체 취미 보기</Link>
      </Button>
    </StatusMessage>
  );
}
