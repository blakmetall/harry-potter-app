import { renderHook } from '@testing-library/react';
import useAllCharacters from '../useAllCharacters';

describe('useAllCharacters', () => {
    it('should concatenate characters arrays', () => {
        const characters = [1, 2, 3];
        const newCharacters = [4, 5, 6];
        const { result } = renderHook(() => useAllCharacters(characters, newCharacters));
        expect(result.current).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
