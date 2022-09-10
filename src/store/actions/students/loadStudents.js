import { charactersTypes } from '../../types';

const loadStudents = () => {
    return function (dispatch) {
        const studentsUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-students.json';

        fetch(studentsUrl)
            .then((response) => response.json())
            .then((data) => {
                // set characters from students
                dispatch({
                    type: charactersTypes.SET_CHARACTERS,
                    payload: data,
                });
            })
            .catch();
    };
};

export default loadStudents;
