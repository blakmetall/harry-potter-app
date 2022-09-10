import { charactersTypes } from '../types';

const initialState = {
    characters: [],
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {
        case charactersTypes.SET_CHARACTERS:
            return { ...state, characters: action.payload };
        default:
            return state;
    }
}
