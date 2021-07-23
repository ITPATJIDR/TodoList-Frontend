import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_USER } from "../actions/types";
import { getUserSuccess } from "../actions";
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

//API
const getUser_Request = async (payload) => {
   return await axios
      .get(`${REACT_APP_API_URL}/user/getUserInfo`, {
         headers: { Authorization: payload.token },
      })
      .then((res) => res)
      .catch((err) => {
         throw err;
      });
};
//WORKER
function* getUser({ payload }) {
   try {
      const res = yield call(getUser_Request, payload);
      yield put(getUserSuccess(res.data));
   } catch (err) {
      console.log(err);
   }
}
//WATCHER
export function* getUserWatcher() {
   yield takeEvery(GET_USER, getUser);
}
//ROOT
export default function* rootSage() {
   yield all([fork(getUserWatcher)]);
}
