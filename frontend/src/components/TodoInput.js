import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo , updateTodo} from "../redux/actions/todoActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SaveIcon from "@material-ui/icons/Save";

const TodoInput = () => {
  
  const dispatch = useDispatch();
  
  const selectedItem = useSelector((state) => {
    console.log("State: ", state);
    return state.todoReducer.selectedItem;
  });
  
  const isAdd = Object.keys(selectedItem).length === 0 ? true: false

  const itemText = isAdd ? "": selectedItem.text

  const [text, setText] = useState(itemText);

  useEffect(() => {
    setText(itemText)
  }, [itemText])
  
  const onAddTodoList = (event) => {
    event.preventDefault();
    if (text !== "") {
      isAdd ? dispatch(addTodo(text, false)) : dispatch(updateTodo(text, selectedItem.todoId));
      setText("");
    }
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="todo">PUT SOME TODO</InputLabel>
      <OutlinedInput
        id="todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            {Object.keys(selectedItem).length === 0 ? (
              <IconButton>
                <AddCircleIcon color="primary" onClick={onAddTodoList} />
              </IconButton>
            ) : (
              <IconButton>
                <SaveIcon color="primary" onClick={onAddTodoList} />
              </IconButton>
            )}
          </InputAdornment>
        }
        labelWidth={135}
      />
    </FormControl>
  );
};

export default TodoInput;