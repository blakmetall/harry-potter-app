export default function useFilteredNewCharacters(newCharacters, showingStudents) {
    return newCharacters.filter(
        (newCharacter) => (newCharacter.hogwartsStudent && showingStudents) || (newCharacter.hogwartsStaff && !showingStudents),
    );
}
