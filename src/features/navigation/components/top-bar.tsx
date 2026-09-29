'use client';

import { Logo } from '@/features/navigation/components/logo';

export const TopBar = () => (
  <header className="sticky top-0 z-40 border-b border-line-200 bg-surface-0">
    <div className="mx-auto flex h-20 max-w-7xl items-center px-5 md:px-8 lg:px-10">
      <Logo />
    </div>
  </header>
);
