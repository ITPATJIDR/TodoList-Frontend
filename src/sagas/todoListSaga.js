import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
   GET_TODO_REQUEST,
   ADD_TODO_REQUEST,
   DELETE_TODO_REQUEST,
} from "../actions/types";
import { getTodoSuccess } from "../actions";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

//API
const getTodo_Request = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/todo/getTodo`, payload)
      .then((res) => res)
      .catch((err) => {
         throw err;
      });
};

const addTodo_Request = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/todo/addTodo`, payload, {
         headers: { Authorization: payload.accessToken },
      })
      .then((res) => res)
      .catch((err) => {
         throw err;
      });
};
const deleteTodo_Request = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/todo/deleteTodo`, payload)
      .then((res) => res)
      .catch((err) => {
         throw err;
      });
};
//WORKER
function* getTodo({ payload }) {
   try {
      const res = yield call(getTodo_Request, payload);
      yield put(
         getTodoSuccess({
            todo: res.data[0]?.todoContent,
            user: res.data[0]?.user.username,
            todoId: res.data[0]._id,
         })
      );
   } catch (err) {
      console.log(err);
   }
}

function* addTodo({ payload }) {
   try {
      yield call(addTodo_Request, payload);
      document.location = "/";
   } catch (err) {
      throw err;
   }
}

function* deleteTodo({ payload }) {
   try {
      yield call(deleteTodo_Request, payload);
      document.location = "/";
   } catch (err) {
      throw err;
   }
}

//WATCHER
export function* getTodoWatcher() {
   yield takeEvery(GET_TODO_REQUEST, getTodo);
}

export function* addTodoWatcher() {
   yield takeEvery(ADD_TODO_REQUEST, addTodo);
}

export function* deleteTodoWatcher() {
   yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
}
//ROOT
export default function* rootSage() {
   yield all([
      fork(getTodoWatcher),
      fork(addTodoWatcher),
      fork(deleteTodoWatcher),
   ]);
}
