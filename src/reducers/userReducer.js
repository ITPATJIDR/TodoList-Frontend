import { GET_USER } from "../actions/types";

const INITAILSTATE = {
    user: [],
};

export default (state = INITAILSTATE, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
