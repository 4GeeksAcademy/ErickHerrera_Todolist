import React, { useState } from "react";

const TodoList = () => {
  const [lista, setLista] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyPress = (e) => e.key === "Enter" && addTodo();

  const addTodo = () => {
    if (!input.trim()) return;
    setLista([...lista, { text: input }]);
    setInput("");
  };

  const removeTodo = (index) => setLista(lista.filter((_, i) => i !== index));

  return (
    <div className="paper">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Add a new task"
      />
      {lista.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {lista.map((todo, index) => (
            <li
              key={index}
              className="todo-item"
              onMouseEnter={(e) => e.currentTarget.classList.add("show-delete")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("show-delete")}
            >
              <span style={{ flex: 1 }}>{todo.text}</span>
              <button onClick={() => removeTodo(index)} className="delete-button">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;