import { setIdsToListData } from '../../../helpers';
import { charactersTypes, staffTypes } from '../../types';

const loadStaff = () => {
    return function (dispatch, getState) {
        // dont load if data already saved
        const { staff } = getState();
        if (staff.staff.length > 0) {
            // set characters from students
            dispatch({
                type: charactersTypes.SET_CHARACTERS,
                payload: staff.staff,
            });

            return;
        }

        const staffUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-staff.json';

        fetch(staffUrl)
            .then((response) => response.json())
            .then((data) => {
                const newData = setIdsToListData(data);

                // set staff
                dispatch({
                    type: staffTypes.SET_STAFF,
                    payload: newData,
                });

                // set characters from staff
                dispatch({
                    type: charactersTypes.SET_CHARACTERS,
                    payload: newData,
                });
            })
            .catch();
    };
};

export default loadStaff;
