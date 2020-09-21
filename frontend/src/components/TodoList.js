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

const useStyles = makeStyles((theme) => ({
  saveButton: {
    backgroundColor: "#00ff72e0",
  },
  ButtonPadding: {
    padding: theme.spacing(2),
  },
}));

const TodoList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const accent = green["800"];

  const todoList = useSelector((state) => {
    return state.todoReducer.list;
  });

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const handleSave = () => {
    dispatch(saveTodo(todoList));
  };
  
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
