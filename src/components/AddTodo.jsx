import Todos from "./todos";
const AddTodo = () => {
  const handleOnClick = () => {
    <Todos message={message} />;
  };
  return (
    <div className="flex">
      <input
        type="text"
        className="mr-4 rounded-md bg-gray-200 p-1 focus:outline-blue-600"
        onChange={(e) => e.target.value}
      ></input>
      <button onClick={handleOnClick}>Add Task</button>
    </div>
  );
};

export default AddTodo;
