import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter a todo..."
        value={input}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
