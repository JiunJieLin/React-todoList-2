const TodoList = ({
  todos,
  handleDelete,
  onEditTodo,
  editingIndex,
  setEditingIndex,
  setEditedValue,
  editedValue,
}) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="flex h-full w-[400px] justify-between bg-gray-200 px-2 py-4"
          >
            <input type="checkbox"></input>
            <div>
              {index === editingIndex ? (
                <div>
                  <input
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                  <button onClick={() => onEditTodo(index, editedValue)}>
                    save
                  </button>
                </div>
              ) : (
                <span>{todo}</span>
              )}
              <button onClick={() => setEditingIndex(index)}>edit</button>
            </div>
            <button onClick={() => handleDelete(index)}>Clear</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
