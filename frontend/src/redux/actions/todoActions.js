import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
  SELECT_TODO,
  UPDATE_TODO,
  INITIAL_LOAD,
  SAVE_TODO,
} from "./actions.types";

export const initialLoad = () => {
  return {
    type: INITIAL_LOAD,
  };
};

export const addTodo = (text, completed) => {
  return {
    type: ADD_TODO,
    text,
    completed,
  };
};

export const selectTodo = (payLoad) => {
  return {
    type: SELECT_TODO,
    payLoad,
  };
};

export const updateTodo = (text, todoId) => {
  return {
    type: UPDATE_TODO,
    text,
    todoId,
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    todoId,
  };
};

export const saveTodo = (savePayload) => {
  return {
    type: SAVE_TODO,
    savePayload,
  };
};
