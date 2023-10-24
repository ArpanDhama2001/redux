# Redux Toolkit Setup

## Install the Redux

> npm install @reduxjs/toolkit react-redux

## Configure the store

```javascript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

## Connect store to app

```javascript

  import { store } from "./redux/store"
  import { Provider } from 'react-redux'
  <Provider store={store}>
    <App />
  </Provider>,

```

## Create a Slice, export Slice, reducer and actions

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

## Add Slice to Store

```javascript

  reducer: {
    todo: todoReducer,
  },

```

## Use State and Actions in Components

```javascript
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
const todos = useSelector((state) => state.todo.todos);
const dispatch = useDispatch();
```
