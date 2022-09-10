import { charactersTypes } from '../../types';

const addCharacter = (data) => {
    return function (dispatch, getState) {
        dispatch({
            type: charactersTypes.ADD_NEW_CHARACTER,
            payload: data,
        });
    };
};

export default addCharacter;
