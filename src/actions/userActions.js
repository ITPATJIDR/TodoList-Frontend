import { GET_USER, GET_USER_SUCCESS } from "./types";

export const getUser = (payload) => {
    return {
        type: GET_USER,
        payload,
    };
};

export const getUserSuccess = (payload) => {
    return {
        type: GET_USER_SUCCESS,
        payload,
    };
};
