import { useState } from "react";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoContent, setNewTodoContent] = useState("");
  const handleAddTodo = (content) => {
    if (content.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        content: content.trim(),
        isInEditMode: false,
      };
      setTodoItems(todoItems.concat(newTodo));
      setNewTodoContent("");
    }
  };
  const handleDeleteTodo = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };
  const handleToggleEditMode = (id) => {
    setTodoItems(
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, isInEditMode: !todo.isInEditMode } : todo
      )
    );
  };
  const handleSaveTodo = (id, content) => {
    setTodoItems(
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, content, isInEditMode: false } : todo
      )
    );
  };
  const handleInputChange = (event) => {
    setNewTodoContent(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(newTodoContent);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-white">Tasks</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodoContent}
          onChange={handleInputChange}
          className="focus:outline-none"
        ></input>
        <button type="submit" className="text-white">
          Add Task
        </button>
      </form>
      <ul>
        {todoItems.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleEditMode={handleToggleEditMode}
            onDelete={handleDeleteTodo}
            onSave={handleSaveTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
