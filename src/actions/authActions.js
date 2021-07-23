import {
    DISPATCH_LOGIN,
    GET_USER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT,
} from "./types";

export const dispatchLogin = () => {
    return {
        type: DISPATCH_LOGIN,
    };
};

export const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload,
    };
};

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload,
    };
};

export const registerRequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload,
    };
};
export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload,
    };
};

export const get_User = () => {
    return {
        type: GET_USER,
    };
};

export const logOut = () => {
    return {
        type: LOGOUT,
    };
};
