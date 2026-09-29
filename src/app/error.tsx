'use client';

import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { StatusMessage } from '@/features/common/components/status-message';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusMessage
      icon={TriangleAlert}
      role="alert"
      title="문제가 발생했어요"
      description="페이지를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
    >
      <Button onClick={reset} className="rounded-full px-6">
        다시 시도
      </Button>
      <Button asChild variant="outline" className="rounded-full px-6">
        <Link href="/">홈으로</Link>
      </Button>
    </StatusMessage>
  );
}
