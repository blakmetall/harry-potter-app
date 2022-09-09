import { membersTypes } from '../types';

const initialState = {
    members: [],
};

export default function membersReducer(state = initialState, action) {
    switch (action.type) {
        case membersTypes.SET_MEMBERS:
            return { ...state, members: action.payload };
        default:
            return state;
    }
}
