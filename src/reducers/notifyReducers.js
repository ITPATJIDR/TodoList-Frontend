import { SHOW_ERROR_MESSAGE, HIDE_MESSAGE } from "../actions/types";

const INITALSTATE = {
    showMessage: false,
    errorMessage: "",
};

export default (state = INITALSTATE, action) => {
    switch (action.type) {
        case SHOW_ERROR_MESSAGE:
            return {
                showMessage: true,
                errorMessage: action.payload,
            };
        case HIDE_MESSAGE:
            return {
                showMessage: false,
            };
        default:
            return state;
    }
};
