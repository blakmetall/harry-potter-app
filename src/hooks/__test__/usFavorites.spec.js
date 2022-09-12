import { renderHook } from '@testing-library/react';
import useFavorites from '../useFavorites';

describe('useFavorites', () => {
    it('should return favorites elements if favoritesIds is found within students, staff and newCharacters', () => {
        const favoritesIds = [1, 4, 6];
        const students = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
        ];
        const staff = [
            { id: 3, name: 'Mary' },
            { id: 4, name: 'Anne' },
        ];
        const newCharacters = [
            { id: 5, name: 'Paul' },
            { id: 6, name: 'Jack' },
        ];
        const { result } = renderHook(() => useFavorites(favoritesIds, students, staff, newCharacters));
        expect(result.current.length).toBe(3);
    });
    it('should not return any favorites elements if favoritesIds is empty', () => {
        const favoritesIds = [];
        const students = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
        ];
        const staff = [
            { id: 3, name: 'Mary' },
            { id: 4, name: 'Anne' },
        ];
        const newCharacters = [
            { id: 5, name: 'Paul' },
            { id: 6, name: 'Jack' },
        ];
        const { result } = renderHook(() => useFavorites(favoritesIds, students, staff, newCharacters));
        expect(result.current.length).toBe(0);
    });
});
