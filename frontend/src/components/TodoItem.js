import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTodo, toggleTodo } from "../redux/actions/todoActions";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

const TodoItem = ({todoId, text, completed }) => {
  const dispatch = useDispatch();

  const changeBackground = (event, text) => {
    event.target.style.borderStyle = text;
  };

  const styled = {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    textDecoration: completed ? "line-through" : "none",
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todoId));
  };

  const handleEdit = () => {
    dispatch(selectTodo({ todoId, text, completed }));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div style={styled}>
      <Typography
        variant="h6"
        onMouseEnter={(value) => changeBackground(value, "groove")}
        onMouseLeave={(value) => changeBackground(value, "none")}
      >
        {text}
        <IconButton>
          <CheckCircleOutlineIcon onClick={hanldeToggle} color="primary" />
        </IconButton>
        <IconButton>
          <EditTwoToneIcon onClick={handleEdit} color="action" />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={handleDelete} color="secondary" />
        </IconButton>
      </Typography>
    </div>
  );
};

export default TodoItem;
