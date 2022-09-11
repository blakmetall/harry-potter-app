import axios from 'axios';
import { charactersTypes } from '../../types';

const removeNewCharacter = (newCharacterId) => {
    return function (dispatch, getState) {
        // delete from json-server
        if (newCharacterId) {
            const removeUrl = 'http://localhost:8000/newCharacters/' + newCharacterId;

            axios.delete(removeUrl).then(() => {
                const newCharacters = getState().characters.newCharacters;

                const newData = [];

                for (let i = 0; i < newCharacters.length; i++) {
                    if (newCharacters[i].id !== newCharacterId) {
                        newData.push(newCharacters[i]);
                    }
                }

                dispatch({
                    type: charactersTypes.SET_NEW_CHARACTERS,
                    payload: newData,
                });
            });
        }
    };
};

export default removeNewCharacter;
