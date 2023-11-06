import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedValue, setEditedValue] = useState("");

  const onAdd = (value) => {
    const newArray = [...todos, value];
    setTodos(newArray);
  };
  const onEditTodo = (index, editedValue) => {
    if (index === editingIndex) {
      const newTodo = [...todos];
      newTodo[index] = editedValue;
      setTodos(newTodo);
      setEditingIndex(-1);
    } else {
      setEditingIndex(index);
    }
  };

  const handleDelete = (index) => {
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  };
  return (
    <div className="min-h-screen min-w-[200px]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Tasks</p>
        <AddTodo onAdd={onAdd} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          onEditTodo={onEditTodo}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          setEditedValue={setEditedValue}
          editedValue={editedValue}
        />
      </div>
    </div>
  );
};

export default Home;
