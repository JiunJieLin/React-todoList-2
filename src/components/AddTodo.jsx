import { useState } from "react";

const AddTodo = ({ submmitedItem }) => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = () => {
    if (newInput === "") return;
    submmitedItem(newInput);
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="mr-4 rounded-md bg-gray-200 p-1 focus:outline-blue-600"
        onChange={(e) => setNewInput(e.target.value)}
      ></input>
      <button>Add Task</button>
    </form>
  );
};

export default AddTodo;
