import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const onAdd = (value) => {
    const newArray = [...todos, value];
    setTodos(newArray);
  };

  const onEditTodo = (index) => {
    setEditingIndex(index);
  };

  const onSaveEdit = (index, editedValue) => {
    const newTodo = [...todos];
    newTodo[index] = editedValue;
    setTodos(newTodo);
    setEditingIndex = -1;
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
        />
        {editingIndex !== -1 && (
          <div>
            <input
              type="text"
              value={todos[editingIndex]}
              onChange={(e) => onSaveEdit(editingIndex, e.target.value)}
            />
            <button
              onClick={() => {
                onSaveEdit(editingIndex, todos[editingIndex]);
              }}
            >
              save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
