import type { Hobby } from '@/features/hobby/lib/types';

export const getHobbyThumbnailSrc = ({ id }: Pick<Hobby, 'id'>) =>
  `/thumbnails/${id}.svg`;
