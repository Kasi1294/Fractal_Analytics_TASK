import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTodo, toggleTodo } from "../redux/actions/todoActions";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

{
  /**
   * TodoItem is a react function component 
   * used to process the todo item
   * 
   * @param{todoId, text, completed}
   * @return{React function component to display all todo in current state}
   */
}
const TodoItem = ({todoId, text, completed}) => {
  // dispatch - redux dispatch function
  const dispatch = useDispatch();
  
  {
    /**
     * changeBackgroundStyle is function used to
     * toggle a border when mouse enter and leave the particular todo
     * 
     * @param{event,text}  
     */
  }
  const changeBackgroundStyle = (event, text) => {
    event.target.style.borderStyle = text;
  };

  //todoItemStyle - inline style for TodoItem
  const todoItemStyle = {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    textDecoration: completed ? "line-through" : "none",
  };

  {
    /**
     * handleDelete is function used 
     * to handle the delete a particular todo and 
     * dispatch deleteTodo action to redux
     * 
     * 
     * @dispacth{deleteTodo}  
     */
  }
  const handleDelete = () => {
    dispatch(deleteTodo(todoId));
  };

  {
    /**
     * handleEdit is function used 
     * to handle the update for a particular todo 
     * and dispatch selectTodo action to redux
     *  
     * @dispacth{selectTodo}  
     */
  }
  const handleEdit = () => {
    dispatch(selectTodo({ todoId, text, completed }));
  };

  {
    /**
     * hanldeToggle is function used 
     * to handle the toggle for a particular todo 
     * from in-progress to complete and vise-versa
     * and dispatch toggleTodo action to redux
     *  
     * @dispacth{toggleTodo}  
     */
  }
  const hanldeToggle = () => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div style={todoItemStyle}>
      <Typography
        variant="h6"
        onMouseEnter={(value) => changeBackgroundStyle(value, "groove")}
        onMouseLeave={(value) => changeBackgroundStyle(value, "none")}
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
