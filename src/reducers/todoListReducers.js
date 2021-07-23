import { GET_TODO_SUCCESS } from "../actions/types";

const INITIALSTATE = {
    todo: {},
    user: "",
    todoId: "",
};

export default (state = INITIALSTATE, actions) => {
    switch (actions.type) {
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todo: actions.payload.todo,
                user: actions.payload.user,
                todoId: actions.payload.todoId,
            };
        default:
            return state;
    }
};
