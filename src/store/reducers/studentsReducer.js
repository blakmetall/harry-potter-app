import { studentsTypes } from '../types';

const initialState = {};

export default function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case studentsTypes.LOAD_STUDENTS:
            return state;
        default:
            return state;
    }
}
