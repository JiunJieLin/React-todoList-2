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
            className="relative mb-1 flex items-center rounded-md bg-gray-200 px-2 py-4"
          >
            <div className="flex items-center justify-between">
              <input type="checkbox" className="mr-2"></input>
              {index === editingIndex ? (
                <div className=" flex items-center ">
                  <input
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    className="rounded-md focus:py-1 focus:outline-blue-600"
                  />
                  <button
                    className="ml-2 rounded-md bg-blue-500 px-4 py-1 "
                    onClick={() => onEditTodo(index, editedValue)}
                  >
                    Save
                  </button>
                  <button
                    className=" m-2 rounded-md bg-red-500 px-4 py-1"
                    onClick={() => handleDelete(index)}
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <div className=" flex items-center">
                  <p className="font-bold">{todo}</p>
                  <div className="absolute right-2 top-1">
                    <button
                      className=" top-2 rounded-md bg-yellow-500 px-4 py-1"
                      onClick={() => setEditingIndex(index)}
                    >
                      edit
                    </button>
                    <button
                      className="m-2 rounded-md bg-red-500 px-4 py-1"
                      onClick={() => handleDelete(index)}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
