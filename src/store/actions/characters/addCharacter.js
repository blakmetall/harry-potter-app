import axios from 'axios';
import { charactersTypes } from '../../types';

const addCharacter = (data) => {
    return function (dispatch) {
        axios
            .post('http://localhost:8000/newCharacters', data)
            .then((response) => {
                dispatch({
                    type: charactersTypes.ADD_NEW_CHARACTER,
                    payload: data,
                });
            })
            .catch();
    };
};

export default addCharacter;
