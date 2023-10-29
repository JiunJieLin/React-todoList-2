import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const onAdd = (value) => {
    const newArray = [...todos, value];
    setTodos(newArray);
  };

  return (
    <div className="min-h-screen min-w-[200px]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Tasks</p>
        <AddTodo onAdd={onAdd} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Home;
