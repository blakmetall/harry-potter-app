import { favoritesTypes } from '../../types';

const removeFavorite = (favoriteId) => {
    return function (dispatch, getState) {
        const favorites = getState().favorites.favorites;
        const newFavorites = [];

        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i] !== favoriteId) {
                newFavorites.push(favorites[i]);
            }
        }

        dispatch({
            type: favoritesTypes.SET_FAVORITES,
            payload: newFavorites,
        });
    };
};

export default removeFavorite;
