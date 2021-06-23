import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { DISPATCH_LOGIN, GET_USER } from "../actions/types";
import { dispatchLogin } from "../actions";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_URL;

//API
const loginRequest = async (payload) => {
   console.log(payload);
};

//WORKER
function* workerLogin({ payload }) {
   try {
      const data = yield call(loginRequest, payload);
      yield put(dispatchLogin);
   } catch (err) {
      console.log(err);
   }
}

//WATCHER

export function* loginWatcher() {
   yield takeEvery(DISPATCH_LOGIN, workerLogin);
}

//ROOT

export default function* rootSaga() {
   yield all([fork(loginWatcher)]);
}
