import { favoritesTypes } from '../../types';

const addFavorite = (favoriteId) => {
    return function (dispatch, getState) {
        const oldFavorites = getState().favorites.favorites;

        // allow only 5 elements
        if (oldFavorites.length === 5) {
            oldFavorites.shift();
        }

        // do not save previously saved favoriteId
        for (let i = 0; i < oldFavorites.length; i++) {
            if (oldFavorites[i] === favoriteId) {
                return;
            }
        }

        dispatch({
            type: favoritesTypes.SET_FAVORITES,
            payload: [...oldFavorites, favoriteId],
        });
    };
};

export default addFavorite;
