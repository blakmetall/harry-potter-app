import { membersTypes } from '../../types';

const loadStudents = () => {
    return function (dispatch) {
        const studentsUrl = 'https://raw.githubusercontent.com/AM-TI/amTest/master/hp-students.json';

        fetch(studentsUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('loading students from api');

                // set members from students
                dispatch({
                    type: membersTypes.SET_MEMBERS,
                    payload: data,
                });
            })
            .catch();
    };
};

export default loadStudents;
