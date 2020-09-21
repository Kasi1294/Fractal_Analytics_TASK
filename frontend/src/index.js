import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import createMiddleWare from "redux-saga";

import RootReducer from "./redux/reducers/rootReducer";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import rootSaga from "./saga/rootSaga";

const sagaMiddleWare = createMiddleWare()


const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleWare)
  );
  
  sagaMiddleWare.run(rootSaga);

const useStyles = makeStyles((theme) => ({
  fieldSpace: {
    padding: "8px 8px 10px 8px",
  },
  searchSpace: {
    padding: "24px 24px 0px 24px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container fixed={true} maxWidth={"md"} className={classes.searchSpace}>
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
