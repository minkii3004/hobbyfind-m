'use client';

import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface HobbyDetailSectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export const HobbyDetailSection = ({
  icon: Icon,
  title,
  children,
}: HobbyDetailSectionProps) => (
  <section className="rounded-2xl border border-line-200 bg-surface-0 p-6 md:p-8">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h2 className="text-xl font-semibold text-ink-950">{title}</h2>
    </div>
    <div className="mt-5">{children}</div>
  </section>
);
