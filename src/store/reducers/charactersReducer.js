import { charactersTypes } from '../types';

const initialState = {
    characters: [],
    newCharacters: [],
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {
        case charactersTypes.SET_CHARACTERS:
            return { ...state, characters: action.payload };
        case charactersTypes.SET_NEW_CHARACTERS:
            return { ...state, newCharacters: action.payload };
        case charactersTypes.ADD_NEW_CHARACTER:
            return { ...state, newCharacters: [...state.newCharacters, action.payload] };
        default:
            return state;
    }
}
