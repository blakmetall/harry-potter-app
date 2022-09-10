import { studentsTypes } from '../types';

const initialState = {
    students: [],
};

export default function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case studentsTypes.LOAD_STUDENTS:
            return state;
        case studentsTypes.SET_STUDENTS:
            return { ...state, students: action.payload };
        default:
            return state;
    }
}
