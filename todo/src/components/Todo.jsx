import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos?.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
