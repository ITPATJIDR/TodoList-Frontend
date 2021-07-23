import { DISPATCH_LOGIN, LOGOUT } from "../actions/types";

const INITIALSTATE = {
    isLogged: false,
};

export default (state = INITIALSTATE, action) => {
    switch (action.type) {
        case DISPATCH_LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
            };
        default:
            return state;
    }
};
