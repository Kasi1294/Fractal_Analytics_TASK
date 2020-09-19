import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const changeBackground = (e, text) => {
    e.target.style.borderStyle = text;
  };

  const styled = {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    textDecoration: completed ? "line-through" : "none",
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div style={styled}>
      <Typography
        variant="h6"
        onMouseEnter={(e) => changeBackground(e, "groove")}
        onMouseLeave={(e) => changeBackground(e, "none")}
      >
        {text}
        <IconButton>
          <CheckCircleOutlineIcon onClick={hanldeToggle} color="primary" />
        </IconButton>
        <IconButton>
          <EditTwoToneIcon onClick={handleDelete} color="action" />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={handleDelete} color="secondary" />
        </IconButton>
      </Typography>
    </div>
  );
};

export default TodoItem;
