import { useMemo } from 'react';

export default function useIsFavorite(id, favoritesIds) {
    return useMemo(() => {
        for (let i = 0; i < favoritesIds.length; i++) {
            if (favoritesIds[i] === id) {
                return true;
            }
        }

        return false;
    }, [id, favoritesIds]);
}
