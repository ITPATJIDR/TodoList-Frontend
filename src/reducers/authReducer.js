import { DISPATCH_LOGIN, GET_USER } from "../actions/types";

const INITIALSTATE = {
    user: [],
    isLogged: false,
};

export default (state = INITIALSTATE, action) => {
    switch (action.type) {
        case DISPATCH_LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        default:
            return state;
    }
};
