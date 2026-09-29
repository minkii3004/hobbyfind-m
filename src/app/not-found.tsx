'use client';

import { Compass } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { StatusMessage } from '@/features/common/components/status-message';

export default function NotFoundPage() {
  return (
    <StatusMessage
      icon={Compass}
      title="페이지를 찾을 수 없어요"
      description="주소가 잘못되었거나 이동된 페이지일 수 있어요. 홈에서 다른 취미를 둘러보세요."
    >
      <Button asChild className="rounded-full px-6">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </StatusMessage>
  );
}
