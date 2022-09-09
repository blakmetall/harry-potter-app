import { membersTypes } from '../../types';

const loadStaff = () => {
    return function (dispatch) {
        const staffUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-staff.json';

        fetch(staffUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('loading staff from api');

                // set members from staff
                dispatch({
                    type: membersTypes.SET_MEMBERS,
                    payload: data,
                });
            })
            .catch();
    };
};

export default loadStaff;
