'use client';

import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatusMessageProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  role?: 'alert' | 'status';
  className?: string;
  children?: ReactNode;
}

export const StatusMessage = ({
  icon: Icon,
  title,
  description,
  role,
  className,
  children,
}: StatusMessageProps) => (
  <div
    role={role}
    className={cn(
      'flex flex-col items-center justify-center px-4 py-20 text-center',
      className
    )}
  >
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-primary">
      <Icon className="h-7 w-7" aria-hidden />
    </span>
    <h2 className="mt-5 text-xl font-semibold text-ink-950">{title}</h2>
    {description && <p className="mt-2 max-w-md text-ink-500">{description}</p>}
    {children && (
      <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>
    )}
  </div>
);
