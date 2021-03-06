import React, {useEffect} from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList, initialLoad , saveTodo} from "../redux/actions/todoActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";
import green from "@material-ui/core/colors/green";

//useStyles - style to TodoList
const useStyles = makeStyles((theme) => ({
  saveButton: {
    backgroundColor: "#00ff72e0",
  },
  ButtonPadding: {
    padding: theme.spacing(2),
  },
}));

{
  /**
   * TodoList is a react function component 
   * used to show the todo item
   * 
   * @return{React function component to display todo with current state}
   */
}
const TodoList = () => {
  // classes - style object for TodoList
  const classes = useStyles();

  // dispatch - redux dispatch function
  const dispatch = useDispatch();

  // accent - Color to the save button
  const accent = green["800"];

  //todoList - return store from redux
  const todoList = useSelector((state) => {
    return state.todoReducer.list;
  });

  {
    /**
     * handleClearList is function used 
     * to handle the clearing all todo 
     * and dispatch clearTodoList action to redux
     *  
     * @dispacth{clearTodoList}  
     */
  }
  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  {
    /**
     * handleSave is function used 
     * to handle the save of all todo 
     * and dispatch saveTodo action to redux
     *  
     * @dispacth{saveTodo}  
     */
  }
  const handleSave = () => {
    dispatch(saveTodo(todoList));
  };
  
  //Load the todo form backend when screen load
  useEffect(() => {
    dispatch(initialLoad());
  }, [])

  return (
    <div>
      <Typography variant="h4" align="center">
        {todoList.map((todo) => (
          (todo.text !== "" ) ?
            <TodoItem key={todo.id} {...todo} /> : ""
        ))}
      </Typography>
      
      <div align="center" className={classes.ButtonPadding}>
        <Button
          variant="contained"
          color={accent}
          className={classes.saveButton}
          onClick={handleSave}
          startIcon={<SaveSharpIcon />}
        >
          SAVE
        </Button>
        &ensp;
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearList}
          startIcon={<DeleteForeverTwoToneIcon />}
        >
          clear
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
