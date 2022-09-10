import { staffTypes } from '../types';

const initialState = {
    staff: [],
};

export default function staffReducer(state = initialState, action) {
    switch (action.type) {
        case staffTypes.LOAD_STAFF:
            return state;
        case staffTypes.SET_STAFF:
            return { ...state, staff: action.payload };
        default:
            return state;
    }
}
