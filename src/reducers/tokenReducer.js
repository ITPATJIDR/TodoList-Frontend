import { GET_TOKEN_SUCCESS } from "../actions/types";

const INITIALSTATE = {
    token: null,
};

const tokenReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};

export default tokenReducer;
