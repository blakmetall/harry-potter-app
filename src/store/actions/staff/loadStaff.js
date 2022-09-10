import { charactersTypes } from '../../types';

const loadStaff = () => {
    return function (dispatch) {
        const staffUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-staff.json';

        fetch(staffUrl)
            .then((response) => response.json())
            .then((data) => {
                // set characters from staff
                dispatch({
                    type: charactersTypes.SET_CHARACTERS,
                    payload: data,
                });
            })
            .catch();
    };
};

export default loadStaff;
