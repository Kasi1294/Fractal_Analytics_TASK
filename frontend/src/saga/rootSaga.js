import {all, fork} from "redux-saga/effects";
import {initialLoad, saveTodo} from './todoSaga'

export default function* rootSaga() {
    yield all([fork(initialLoad), fork(saveTodo) ]);
  }