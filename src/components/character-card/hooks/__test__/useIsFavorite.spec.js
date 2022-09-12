import { renderHook } from '@testing-library/react';
import useIsFavorite from '../useIsFavorite';

describe('useIsFavorite', () => {
    it('should return true when id is found within favoritesIds list', () => {
        const id = 2;
        const favoritesIds = [1, 2, 3, 4];
        const { result } = renderHook(() => useIsFavorite(id, favoritesIds));
        expect(result.current).toBe(true);
    });
    it('should return false when id is not found within favoritesIds list', () => {
        const id = 5;
        const favoritesIds = [1, 2, 3, 4];
        const { result } = renderHook(() => useIsFavorite(id, favoritesIds));
        expect(result.current).toBe(false);
    });
});
