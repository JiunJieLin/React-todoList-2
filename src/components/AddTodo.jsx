import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = () => {
    onAdd(newInput);
    setNewInput("");
  };
  return (
    <div className="flex">
      <input
        value={newInput}
        type="text"
        className="mr-4 rounded-md bg-gray-200 p-1 focus:outline-blue-600"
        onChange={(e) => setNewInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTodo;
