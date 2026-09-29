import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteHobbiesState {
  favoriteIds: string[];
  toggleFavorite: (hobbyId: string) => void;
}

/** SSR 하이드레이션 불일치를 피하려고 skipHydration을 켜고, 마운트 후 rehydrate() 를 호출한다. */
export const useFavoriteHobbiesStore = create<FavoriteHobbiesState>()(
  persist(
    (set) => ({
      favoriteIds: [],
      toggleFavorite: (hobbyId) =>
        set(({ favoriteIds }) => ({
          favoriteIds: favoriteIds.includes(hobbyId)
            ? favoriteIds.filter((id) => id !== hobbyId)
            : [...favoriteIds, hobbyId],
        })),
    }),
    { name: 'hobbyfind-favorite-hobbies', skipHydration: true }
  )
);
