import { takeEvery, put } from "redux-saga/effects";

{/*
* getAllTodo function is used to get all todo from backend
* 
* @error {error} Error from backend
* @return {allTodo} List of todo
*/}
function* getAllTodo() {
  try {
    const response = yield fetch(
      "http://localhost:8000/todo/getAll"
    ).then((responce) => responce.json());
    let allTodo = yield response;
    yield put({ type: "INITIAL_LOAD_SAGA", allTodo });
  } catch (error) {
    yield put({ type: "INITIAL_LOAD_SAGA", error });
  }
}

{/*
* saveAllTodo function is used to save all todo in backend
* 
* @param {savePayLoad} List of todo to save
* @error {error} Error from backend
* @return {allTodo} List of todo from backend after save
*/}
function* saveAllTodo(savePayLoad) {
  try {
    const url = "http://localhost:8000/todo/postAll";
    const payLoad = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savePayLoad),
    };
    const response = yield fetch(url, payLoad).then((responce) =>
      responce.json()
    );
    let allTodo = yield response;
    yield put({ type: "SAVE_TODO_SAGA", allTodo });
  } catch (error) {
    yield put({ type: "SAVE_TODO_SAGA", error });
  }
}

//initialLoad function used to call getAllTodo
export function* initialLoad() {
  yield takeEvery("INITIAL_LOAD", getAllTodo);
}

//saveTodo function is used to call saveAllTodo
export function* saveTodo() {
  yield takeEvery("SAVE_TODO", saveAllTodo);
}
