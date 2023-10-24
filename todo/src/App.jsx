import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1>Redux TODO</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
