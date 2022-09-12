import { renderHook } from '@testing-library/react';
import useFilteredNewCharacters from '../useFilteredNewCharacters';

describe('useFilteredNewCharacters', () => {
    it('should return students only when showingStudents is true and characters hogwartsStudent prop is true', () => {
        const newCharacters = [
            { hogwartsStudent: true, name: 'John' },
            { hogwartsStudent: true, name: 'Jane' },
            { hogwartsStudent: false, name: 'Mary' },
        ];
        const showingStudents = true;
        const { result } = renderHook(() => useFilteredNewCharacters(newCharacters, showingStudents));
        expect(result.current.length).toBe(2);
    });
    it('should return staff only when showingStudents is false and characters hogwartsStaff prop is true', () => {
        const newCharacters = [
            { hogwartsStaff: false, name: 'John' },
            { hogwartsStaff: false, name: 'Jane' },
            { hogwartsStaff: true, name: 'Mary' },
        ];
        const showingStudents = false;
        const { result } = renderHook(() => useFilteredNewCharacters(newCharacters, showingStudents));
        expect(result.current.length).toBe(1);
    });
});
