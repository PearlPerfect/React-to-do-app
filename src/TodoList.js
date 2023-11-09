import React, { useState } from "react";
import "./App.css"

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="full">
      <div className="todo">
      <h1 className="todoHead">To-Do List</h1>
      <div className="form">
      <input
        type="text"
        value={newTodo}
        placeholder="Add your Todos here"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} className="add">Add</button>
      </div>
      <div className="todos">
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index} >
            <div className="eachTodo">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
            </div>
           
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default TodoList;
