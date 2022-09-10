import { favoritesTypes } from '../types';

const initialState = {
    favorites: [],
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case favoritesTypes.SET_FAVORITES:
            return { ...state, favorites: action.payload };
        case favoritesTypes.GET_FAVORITES:
            return state;
        default:
            return state;
    }
}
