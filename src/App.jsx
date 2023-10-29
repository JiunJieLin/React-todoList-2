import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = function () {
    setTodos((prevTodos) => {
      return [...(prevTodos + todos)];
    });
  };
  const deleteTodo = function (id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        todo.id !== id;
      });
    });
  };
  return (
    <div className="min-h-screen min-w-[200px]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Tasks</p>
        <AddTodo submmitedItem={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Home;
