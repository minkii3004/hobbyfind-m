'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { HobbyDetail } from '@/features/hobby/components/hobby-detail';
import { findHobbyById } from '@/features/hobby/lib/find-hobby';

interface HobbyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function HobbyDetailPage({ params }: HobbyDetailPageProps) {
  const { id } = use(params);
  const hobby = findHobbyById(id);

  if (!hobby) notFound();

  return <HobbyDetail hobby={hobby} />;
}
