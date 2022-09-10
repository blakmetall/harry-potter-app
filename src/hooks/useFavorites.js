import { useMemo } from 'react';

export default function useFavorites(favoritesIds, students, staff) {
    return useMemo(() => {
        const favorites = [];

        for (let i = 0; i < favoritesIds.length; i++) {
            const favoriteId = favoritesIds[i];

            // search in students
            for (let j = 0; j < students.length; j++) {
                if (students[j].id === favoriteId) {
                    favorites.push(students[j]);
                }
            }

            // search in staff
            for (let j = 0; j < staff.length; j++) {
                if (staff[j].id === favoriteId) {
                    favorites.push(staff[j]);
                }
            }
        }

        return favorites;
    }, [favoritesIds, students, staff]);
}
