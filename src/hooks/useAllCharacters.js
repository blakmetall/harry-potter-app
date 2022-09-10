import { useMemo } from 'react';

export default function useAllCharacters(characters, newCharacters) {
    return useMemo(() => {
        return characters.concat(newCharacters);
    }, [characters, newCharacters]);
}
