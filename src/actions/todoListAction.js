import {
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
} from "./types";

export const getTodoRequest = (payload) => {
    return {
        type: GET_TODO_REQUEST,
        payload,
    };
};

export const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload,
    };
};

export const addTodoRequest = (payload) => {
    return {
        type: ADD_TODO_REQUEST,
        payload,
    };
};

export const addTodoSuccess = (payload) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload,
    };
};

export const deleteTodoRequest = (payload) => {
    return {
        type: DELETE_TODO_REQUEST,
        payload,
    };
};

export const deleteTodoSuccess = (payload) => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload,
    };
};
