import { SHOW_ERROR_MESSAGE, HIDE_MESSAGE } from "./types";

export const showErrorMessage = (message) => {
    return { type: SHOW_ERROR_MESSAGE, payload: message };
};
export const hideMessage = () => {
    return { type: HIDE_MESSAGE };
};
