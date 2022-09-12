import { renderHook } from '@testing-library/react';
import useCharacterStatus from '../useCharacterStatus';

describe('useCharacterStatus', () => {
    it('should return Estudiante when howartsStudent is true', () => {
        const hogwartsStudent = true;
        const hogwartsStaff = false;
        const { result } = renderHook(() => useCharacterStatus(hogwartsStudent, hogwartsStaff));
        expect(result.current).toBe('Estudiante');
    });
    it('should return Staff when hogwartsStaff is true', () => {
        const hogwartsStudent = false;
        const hogwartsStaff = true;
        const { result } = renderHook(() => useCharacterStatus(hogwartsStudent, hogwartsStaff));
        expect(result.current).toBe('Staff');
    });
});
