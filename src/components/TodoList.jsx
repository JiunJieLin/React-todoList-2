const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4"
          >
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
console.log(todo);
