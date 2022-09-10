import { setIdsToListData } from '../../../helpers';
import { charactersTypes, studentsTypes } from '../../types';

const loadStudents = () => {
    return function (dispatch, getState) {
        // dont load if data already saved
        const { students } = getState();
        if (students.students.length > 0) {
            // set characters from students
            dispatch({
                type: charactersTypes.SET_CHARACTERS,
                payload: students.students,
            });

            return;
        }

        const studentsUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-students.json';

        fetch(studentsUrl)
            .then((response) => response.json())
            .then((data) => {
                const dataWithIds = setIdsToListData(data);

                // set students
                dispatch({
                    type: studentsTypes.SET_STUDENTS,
                    payload: dataWithIds,
                });

                // set characters from students
                dispatch({
                    type: charactersTypes.SET_CHARACTERS,
                    payload: dataWithIds,
                });
            })
            .catch();
    };
};

export default loadStudents;
