import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo , updateTodo} from "../redux/actions/todoActions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";

{
  /**
   * TodoInput is the react function component 
   * for input a todo in both add and update
   * 
   * @return{react text input for both add and update}
   */
}
const TodoInput = () => {
  // dispatch - redux dispatch function
  const dispatch = useDispatch();
  
  //selectedItem - current selected item for edit
  const selectedItem = useSelector((state) => {
    return state.todoReducer.selectedItem;
  });
  
  //isAdd - find current todo is add or update
  const isAdd = Object.keys(selectedItem).length === 0 ? true: false

  //itemText - todo text in both add and update
  const itemText = isAdd ? "": selectedItem.text

  //text - todo text, setText - to set the text state
  const [text, setText] = useState(itemText);

  //To set the text when itemText is changed
  useEffect(() => {
    setText(itemText)
  }, [itemText])
  
  {
    /**
     * onAddTodoList is function used to handle the todo add
     */
  }
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
              <Button variant="contained" color="primary" onClick={onAddTodoList}>
              OK
              </Button>
            )}
          </InputAdornment>
        }
        labelWidth={135}
      />
    </FormControl>
  );
};

export default TodoInput;