import React from "react";
import ReactDOM from "react-dom";
import createMiddleWare from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import RootReducer from "./redux/reducers/rootReducer";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import rootSaga from "./saga/rootSaga";

//Middleware for the saga
const sagaMiddleWare = createMiddleWare()

//Redux store
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleWare)
  );

//Running the rootsaga in middleware
sagaMiddleWare.run(rootSaga);

//style the App components
const useStyles = makeStyles((theme) => ({
  fieldSpace: {
    padding: "8px 8px 10px 8px",
  },
  containerSpace: {
    padding: "24px 24px 0px 24px",
  },
}));

{
  /*
  * App component is the parent component for TODO application
  */
}
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container fixed={true} maxWidth={"md"} className={classes.containerSpace}>
        <Paper elevation={1} className={classes.fieldSpace}>
          <TodoInput />
        </Paper>
        <TodoList />
      </Container>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
