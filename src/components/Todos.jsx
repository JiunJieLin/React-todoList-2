const Todos = (id, title, deleteTodo) => {
  return (
    <div className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4">
      <p>{title}</p>
      <button onClick={() => deleteTodo(id)}>Clear</button>
    </div>
  );
};

export default Todos;
