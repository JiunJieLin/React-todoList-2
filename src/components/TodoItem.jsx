import { useState } from "react";
// import classNames from "classnames";
const TodoItems = ({ todo, onToggleEditMode, onDelete, onSave }) => {
  const [newContent, setNewTodoContent] = useState(todo.content);

  return (
    <li className="flex w-[400px] justify-between  rounded-md  bg-slate-300 px-2 py-2">
      {todo.isInEditMode ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewTodoContent(e.target.value)}
            className="bg-slate-300 font-bold focus:bg-white "
          />

          <button
            className="rounded-lg bg-blue-500 px-5 py-1 text-white"
            onClick={() => onSave(todo.id, newContent)}
          >
            Save
          </button>
          <button
            className="rounded-lg bg-red-500 px-5 py-1 text-white "
            onClick={() => onDelete(todo.id)}
          >
            Clear
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewTodoContent(e.target.value)}
            className="rounded-lg bg-slate-300 font-bold "
          />

          <button
            className="rounded-lg bg-yellow-500 px-5 py-1 text-white "
            onClick={() => onToggleEditMode(todo.id)}
          >
            Edit
          </button>
          <button
            className="rounded-lg bg-red-500 px-5 py-1 text-white "
            onClick={() => onDelete(todo.id)}
          >
            Clear
          </button>
        </>
      )}
    </li>
  );
};
export default TodoItems;
