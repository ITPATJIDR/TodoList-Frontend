import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_TOKEN } from "../actions/types";
import { getTokenSuccess } from "../actions";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// API

const getTokenRequest = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/user/refresh_token`, payload, {
         withCredentials: true,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
         },
      })
      .then((res) => res)
      .catch((err) => {
         console.log(err.response);
      });
};

// WORKER

function* getTokenWorker({ payload }) {
   try {
      const res = yield call(getTokenRequest, payload);
      yield put(getTokenSuccess(res.data.access_token));
   } catch (err) {
      console.log(err);
   }
}

// WATCHER
export function* getTokenWatcher() {
   yield takeEvery(GET_TOKEN, getTokenWorker);
}

//ROOT
export default function* rootSage() {
   yield all([fork(getTokenWatcher)]);
}
