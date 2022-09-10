import { useMemo } from 'react';

export default function useMemberStatus(hogwartsStudent, hogwartsStaff) {
    return useMemo(() => {
        let memberStatus = '';

        if (hogwartsStudent) {
            memberStatus = 'Estudiante';
        }

        if (hogwartsStaff) {
            memberStatus = 'Staff';
        }

        return memberStatus;
    }, [hogwartsStudent, hogwartsStaff]);
}
