import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions/todoActions";
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
  const list = useSelector((state) => {
   // console.log("State: ", state);
    return state.todoReducer.list;
  });
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const accent = green["800"];

  return (
    <div>
      <Typography variant="h4" align="center">
        {list.map((todo) => (
          (todo.text !== "" ) ?
            <TodoItem key={todo.id} {...todo} /> : ""
        ))}
      </Typography>
      <div align="center" className={classes.ButtonPadding}>
        <Button
          variant="contained"
          color={accent}
          className={classes.saveButton}
          onClick={handleClearList}
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
