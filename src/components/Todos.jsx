const Todos = (id, message) => {
  return (
    <div className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4">
      <p>{message}</p>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};

export default Todos;
