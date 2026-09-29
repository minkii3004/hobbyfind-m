'use client';

import {
  ArrowLeft,
  Backpack,
  Clock,
  Gauge,
  Lightbulb,
  MapPin,
  Sparkles,
  Tag,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { FavoriteButton } from '@/features/hobby/components/favorite-button';
import { HobbyDetailSection } from '@/features/hobby/components/hobby-detail-section';
import { HobbyThumbnail } from '@/features/hobby/components/hobby-thumbnail';
import { HobbyGrid } from '@/features/hobby/components/hobby-grid';
import { CATEGORY_LABELS } from '@/features/hobby/constants/categories';
import { HOBBIES } from '@/features/hobby/constants/hobbies';
import type { Hobby } from '@/features/hobby/lib/types';
import { cn } from '@/lib/utils';

interface HobbyDetailProps {
  hobby: Hobby;
}

interface BulletListProps {
  items: readonly string[];
}

const BulletList = ({ items }: BulletListProps) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-ink-700">
        <span
          aria-hidden
          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
        />
        {item}
      </li>
    ))}
  </ul>
);

export const HobbyDetail = ({ hobby }: HobbyDetailProps) => {
  const relatedHobbies = HOBBIES.filter(
    ({ id, category }) => category === hobby.category && id !== hobby.id
  );
  const infoItems: {
    label: string;
    value: string;
    icon: LucideIcon;
    className?: string;
  }[] = [
    {
      label: '카테고리',
      value: CATEGORY_LABELS[hobby.category],
      icon: Tag,
      className: 'col-span-2',
    },
    { label: '난이도', value: hobby.info.difficulty, icon: Gauge },
    { label: '예상 비용', value: hobby.info.cost, icon: Wallet },
    { label: '추천 시간', value: hobby.info.duration, icon: Clock },
    { label: '주요 장소', value: hobby.info.place, icon: MapPin },
  ];

  return (
    <div className="py-8 md:py-12">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 rounded-full pr-3 text-sm font-medium text-ink-700 transition-colors duration-200 hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-950 focus-visible:ring-offset-2"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        전체 취미
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-100 shadow-sm lg:aspect-auto lg:min-h-[420px]">
          <HobbyThumbnail
            hobby={hobby}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-ink-950 md:text-4xl">
              {hobby.name}
            </h1>
            <FavoriteButton
              hobby={hobby}
              className="h-11 w-11 border border-line-200"
            />
          </div>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
            {hobby.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 lg:mt-auto lg:pt-8">
            {infoItems.map(({ label, value, icon: Icon, className }) => (
              <div
                key={label}
                className={cn(
                  'flex items-center gap-3 rounded-xl bg-surface-100 p-4',
                  className
                )}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-0 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <dt className="text-sm text-ink-500">{label}</dt>
                  <dd className="font-semibold text-ink-950">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <HobbyDetailSection icon={Sparkles} title="이런 효과가 있어요">
          <BulletList items={hobby.benefits} />
        </HobbyDetailSection>
        <HobbyDetailSection icon={Users} title="이런 분께 추천해요">
          <BulletList items={hobby.recommendedFor} />
        </HobbyDetailSection>
        <HobbyDetailSection icon={Backpack} title="준비물">
          <BulletList items={hobby.supplies} />
        </HobbyDetailSection>
        <HobbyDetailSection icon={Lightbulb} title="이렇게 시작해 보세요">
          <ol className="space-y-3">
            {hobby.tips.map((tip, index) => (
              <li key={tip} className="flex items-start gap-3 text-ink-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600">
                  {index + 1}
                </span>
                {tip}
              </li>
            ))}
          </ol>
        </HobbyDetailSection>
      </div>

      {relatedHobbies.length > 0 && (
        <section className="mt-16 lg:mt-20">
          <h2 className="text-2xl font-semibold text-ink-950">
            다른 {CATEGORY_LABELS[hobby.category]} 취미
          </h2>
          <div className="mt-6 pb-16">
            <HobbyGrid hobbies={relatedHobbies} />
          </div>
        </section>
      )}
    </div>
  );
};
