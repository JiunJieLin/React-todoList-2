const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4">
            <p>{todo}</p>
            <button>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
