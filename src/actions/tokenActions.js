import { GET_TOKEN, GET_TOKEN_SUCCESS } from "../actions/types";

export const getToken = (payload) => {
    return {
        type: GET_TOKEN,
        payload,
    };
};

export const getTokenSuccess = (payload) => {
    return {
        type: GET_TOKEN_SUCCESS,
        payload,
    };
};
