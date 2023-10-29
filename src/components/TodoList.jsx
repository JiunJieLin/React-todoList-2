import Todos from "./todos";
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <Todos
            id={todo.id}
            title={todo.title}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
