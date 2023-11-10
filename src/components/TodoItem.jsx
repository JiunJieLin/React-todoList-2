import { useState } from "react";
// import classNames from "classnames";
const TodoItems = ({ todo, onToggleEditMode, onDelete, onSave }) => {
  const [newContent, setNewTodoContent] = useState(todo.content);

  return (
    <li>
      {todo.isInEditMode ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewTodoContent(e.target.value)}
          ></input>
          <button onClick={() => onSave(todo.id, newContent)}>Save</button>
          <button onClick={() => onDelete(todo.id)}>Clear</button>
        </>
      ) : (
        <>
          <input></input>
          <button onClick={() => onToggleEditMode(todo.id)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Clear</button>
        </>
      )}
    </li>
  );
};
export default TodoItems;
