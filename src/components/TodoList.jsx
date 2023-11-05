const TodoList = ({ todos, handleDelete, onEditTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4"
          >
            <input type="checkbox"></input>
            <p
              onClick={() => {
                onEditTodo(index);
              }}
            >
              {todo}
            </p>
            <button onClick={() => handleDelete(index)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
