import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORY_LABELS } from '@/features/hobby/constants/categories';
import { HOBBIES } from '@/features/hobby/constants/hobbies';
import { findHobbyById } from '@/features/hobby/lib/find-hobby';

interface HobbyDetailLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => HOBBIES.map(({ id }) => ({ id }));

export const generateMetadata = async ({
  params,
}: Pick<HobbyDetailLayoutProps, 'params'>): Promise<Metadata> => {
  const { id } = await params;
  const hobby = findHobbyById(id);

  if (!hobby) return {};

  const categoryLabel = CATEGORY_LABELS[hobby.category];

  return {
    title: `${hobby.name} 취미 가이드`,
    description: `${hobby.description} 난이도 ${hobby.info.difficulty}, 추천 시간 ${hobby.info.duration}의 ${categoryLabel} 취미입니다.`,
    keywords: [
      hobby.name,
      `${hobby.name} 입문`,
      `${hobby.name} 추천`,
      `${categoryLabel} 취미`,
      '취미 추천',
      '취미 찾기',
      'HobbyFind',
    ],
    openGraph: {
      title: `${hobby.name} 취미 가이드 | HobbyFind`,
      description: hobby.description,
      type: 'article',
      locale: 'ko_KR',
      images: [`/thumbnails/${hobby.id}.svg`],
    },
  };
};

export default async function HobbyDetailLayout({
  children,
  params,
}: HobbyDetailLayoutProps) {
  const { id } = await params;

  if (!findHobbyById(id)) notFound();

  return children;
}
