import { charactersTypes } from '../types';

const initialState = {
    characters: [],
    newCharacters: [],
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {
        case charactersTypes.SET_CHARACTERS:
            return { ...state, characters: action.payload };
        case charactersTypes.ADD_NEW_CHARACTER:
            const oldCharacters = state.characters.newCharacters ? state.characters.newCharacters : [];
            oldCharacters.push(action.payload);

            return { ...state, newCharacters: oldCharacters };
        default:
            return state;
    }
}
