import {
  ADD_TODO,
  SELECT_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
  SAVE_TODO_SAGA,
  INITIAL_LOAD_SAGA,
} from "../actions/actions.types";

const initalState = {
  selectedItem: {},
  list: [{ todoId: 0, text: "", completed: false }],
};

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case SAVE_TODO_SAGA:
    case INITIAL_LOAD_SAGA:
      return {
        ...state,
        list: [...action.allTodo],
      };

    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            todoId: state.list.length,
            text: action.text,
            completed: action.completed,
          },
        ],
      };

    case SELECT_TODO:
      return {
        ...state,
        selectedItem: action.payLoad,
      };

    case UPDATE_TODO:
      const { todoId, text } = action;
      let todoList = state.list;
      for (const todo of todoList) {
        if (todo.todoId === todoId) {
          todo.text = text;
          break;
        }
      }
      return { ...state, list: [...todoList], selectedItem: {} };

    case CLEAR_TODO_LIST:
      return initalState;

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.todoId !== action.todoId),
        selectedItem: {},
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.todoId === action.todoId
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
