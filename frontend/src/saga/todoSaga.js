import { takeEvery, put } from "redux-saga/effects";

function* initialLoadSaga() {
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

function* saveTodoSaga(savePayLoad) {
  try {
    console.log(savePayLoad);
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

export function* initialLoad() {
  yield takeEvery("INITIAL_LOAD", initialLoadSaga);
}

export function* saveTodo() {
  yield takeEvery("SAVE_TODO", saveTodoSaga);
}
