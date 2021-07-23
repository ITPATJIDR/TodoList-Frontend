import { all } from "redux-saga/effects";
import authSagas from "./authSaga";
import tokenSagas from "./tokenSaga";
import userSagas from "./userSaga";
import todoListSagas from "./todoListSaga";

export default function* rootSaga() {
   yield all([authSagas(), tokenSagas(), userSagas(), todoListSagas()]);
}
