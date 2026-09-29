'use client';

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div
      role="status"
      className="flex min-h-[50vh] items-center justify-center text-primary"
    >
      <Loader2 className="h-8 w-8 animate-spin" aria-hidden />
      <span className="sr-only">불러오는 중입니다</span>
    </div>
  );
}
