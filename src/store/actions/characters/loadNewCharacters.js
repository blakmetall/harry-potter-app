import { charactersTypes } from '../../types';

const loadNewCharacters = () => {
    return function (dispatch, getState) {
        // dont load if data already saved
        const { characters } = getState();
        if (characters.newCharacters.length > 0) {
            // set new characters
            dispatch({
                type: charactersTypes.SET_NEW_CHARACTERS,
                payload: characters.newCharacters,
            });

            return;
        }

        const newCharacterUrl = 'http://localhost:8000/newCharacters';

        fetch(newCharacterUrl)
            .then((response) => response.json())
            .then((data) => {
                // set new characters from json-server
                dispatch({
                    type: charactersTypes.SET_NEW_CHARACTERS,
                    payload: data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export default loadNewCharacters;
