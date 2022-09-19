export default function useFavorites(favoritesIds, students, staff, newCharacters) {
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

        // search in new added characters
        for (let j = 0; j < newCharacters.length; j++) {
            if (newCharacters[j].id === favoriteId) {
                favorites.push(newCharacters[j]);
            }
        }
    }

    return favorites;
}
