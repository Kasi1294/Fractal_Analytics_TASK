import {all, fork} from "redux-saga/effects";
import {initialLoad, saveTodo} from './todoSaga'

{
  /**
  * rootSaga is a root function for 
  * initialLoad, saveTodo saga function 
  */

}
export default function* rootSaga() {
    yield all([fork(initialLoad), fork(saveTodo) ]);
  }