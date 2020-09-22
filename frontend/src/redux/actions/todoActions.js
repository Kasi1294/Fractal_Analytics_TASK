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

{
  /**
   * initialLoad is a action creator function 
   * for initial data fetch
   * 
   * @return{type: INITIAL_LOAD} 
   */
}
export const initialLoad = () => {
  return {
    type: INITIAL_LOAD,
  };
};

{
  /**
   * addTodo is a action creator function 
   * for add a todo
   * 
   * @param{text, completed} 
   * @return{type: ADD_TODO, text, completed} 
   */
}
export const addTodo = (text, completed) => {
  return {
    type: ADD_TODO,
    text,
    completed,
  };
};

{
  /**
   * selectTodo is a action creator function 
   * for selecting a todo for edit
   * 
   * @param{payLoad} selected todo 
   * @return{type: SELECT_TODO, payLoad} 
   */
}
export const selectTodo = (payLoad) => {
  return {
    type: SELECT_TODO,
    payLoad,
  };
};

{
  /**
   * updateTodo is a action creator function 
   * for updating a todo
   * 
   * @param{text, todoId} selected todo 
   * @return{type: UPDATE_TODO, text, todoId} 
   */
}
export const updateTodo = (text, todoId) => {
  return {
    type: UPDATE_TODO,
    text,
    todoId,
  };
};

{
  /**
   * clearTodoList is a action creator function 
   * for clearing all todo
   * 
   * @return{type: CLEAR_TODO_LIST} 
   */
}
export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};

{
  /**
   * deleteTodo is a action creator function 
   * for delete a todo
   * 
   * @param{todoid}
   * @return{type: DELETE_TODO, todoId} 
   */
}
export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

{
  /**
   * toggleTodo is a action creator function 
   * for toggle a todo from in-progress to completed 
   * and vise-versa
   * 
   * @param{todoid}
   * @return{type: DELETE_TODO, todoId} 
   */
}
export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    todoId,
  };
};

{
  /**
   * saveTodo is a action creator function 
   * for saving all todo
   * 
   * @param{savePayload}
   * @return{type: SAVE_TODO, savePayload} 
   */
}
export const saveTodo = (savePayload) => {
  return {
    type: SAVE_TODO,
    savePayload,
  };
};
