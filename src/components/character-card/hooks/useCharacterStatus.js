import { useMemo } from 'react';

export default function useCharacterStatus(hogwartsStudent, hogwartsStaff) {
    return useMemo(() => {
        let characterStatus = '';

        if (hogwartsStudent) {
            characterStatus = 'Estudiante';
        }

        if (hogwartsStaff) {
            characterStatus = 'Staff';
        }

        return characterStatus;
    }, [hogwartsStudent, hogwartsStaff]);
}
