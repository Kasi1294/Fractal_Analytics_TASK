import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/index";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListSharpIcon from '@material-ui/icons/ListSharp';

const TodoInput = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="todo">PUT SOME TODO</InputLabel>
      <OutlinedInput
        id="todo"
        value={text}
        onChange={event => setText(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <AddCircleIcon color="primary" onClick={handleSubmit}/>
            </IconButton>
            <IconButton>
              <ListSharpIcon color="primary" onClick={handleSubmit}/>
            </IconButton>
          </InputAdornment>
        }
        labelWidth={135}
      />
    </FormControl>
  );
};

export default TodoInput;
