import { staffTypes } from '../types';

const initialState = {};

export default function staffReducer(state = initialState, action) {
    switch (action.type) {
        case staffTypes.LOAD_STAFF:
            return state;
        default:
            return state;
    }
}
