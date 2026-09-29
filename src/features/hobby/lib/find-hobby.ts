import { HOBBIES } from '@/features/hobby/constants/hobbies';

export const findHobbyById = (id: string) =>
  HOBBIES.find((hobby) => hobby.id === id);
