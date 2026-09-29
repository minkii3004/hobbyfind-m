'use client';

import { Compass } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-2 rounded-full px-1 text-xl font-bold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 focus-visible:ring-offset-2"
  >
    <Compass className="h-6 w-6" aria-hidden />
    HobbyFind
  </Link>
);
