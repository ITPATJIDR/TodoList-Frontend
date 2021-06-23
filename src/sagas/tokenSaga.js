import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_TOKEN } from "../actions/types";
import {getToken} from '../actions'
import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_URL;

// API
const getTokenRequest = async (payload) => {
   return await axios
      .post(`${REACT_APP_API_URL}/user/refreshToken`)
      .then((res) => res.data)
      .catch((err) => {
         throw err;
      });
};

// WORKER    

function* getTokenWorker ({payload}) => {
   try{
      const data = yield call(getTokenRequest, payload)
      yield put(getToken({payload}))
   }catch(err){
      console.log(err)
   }
}


// WATCHER 
export function* getTokenWatcher() {
   yield takeEvery(GET_TOKEN, getTokenWorker) 
}

export default function* rootSage() {
   yield all([
      fork(getTokenWatcher)
   ])
}
