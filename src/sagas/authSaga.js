import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTER_REQUEST, LOGOUT } from "../actions/types";
import { registerSuccess, showErrorMessage } from "../actions";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

//API
const login_Request = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/user/login`, payload, {
         withCredentials: true,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
         },
      })
      .then((res) => res)
      .catch((error) => {
         const { response } = error;
         const { request, ...errorObject } = response;
         return errorObject;
      });
};

const register_Request = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/user/register`, payload)
      .then((res) => res)
      .catch((error) => {
         const { response } = error;
         const { request, ...errorObject } = response;
         return errorObject;
      });
};

const logOut_Request = async () => {
   return await axios
      .get(`${REACT_APP_API_URL}/user/logOut`, {
         withCredentials: true,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
         },
      })

      .then((res) => res)
      .catch((err) => {
         throw err;
      });
};

//WORKER
function* login({ payload }) {
   try {
      const res = yield call(login_Request, payload);
      if (res.status === 200) {
         localStorage.setItem("firstLogin", true);
         document.location = "/todolist";
      } else {
         yield put(showErrorMessage(res.data.msg));
      }
   } catch (err) {
      console.log(err);
   }
}

function* register({ payload }) {
   try {
      const res = yield call(register_Request, payload);
      if (res.status === 200) {
         window.location = "/login";
      } else {
         yield put(showErrorMessage(res.data.msg));
      }
      yield put(registerSuccess(res));
   } catch (err) {
      if (err.response) {
         yield put(showErrorMessage(err.response));
      }
   }
}

function* logOut() {
   try {
      const res = yield call(logOut_Request);
      document.location = "/login";
      localStorage.removeItem("firstLogin");
   } catch (err) {
      console.log(err);
   }
}

//WATCHER

export function* loginWatcher() {
   yield takeEvery(LOGIN_REQUEST, login);
}
export function* registerWatcher() {
   yield takeEvery(REGISTER_REQUEST, register);
}
export function* logOutWatcher() {
   yield takeEvery(LOGOUT, logOut);
}

//ROOT

export default function* rootSaga() {
   yield all([fork(loginWatcher), fork(registerWatcher), fork(logOutWatcher)]);
}
