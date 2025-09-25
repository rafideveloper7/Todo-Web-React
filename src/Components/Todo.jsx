import React, { useState, useEffect, useContext } from "react";
import { RegisterUser } from "../Context/UserContext";
import ".././App.css";

function Todo() {
  const { user } = useContext(RegisterUser); // current logged-in user
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  //
  const storageKey = user.email;

  // Load tasks when component mounts or user changes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(storageKey)) || [];
    setTasks(savedTasks);
  }, [storageKey]);

  const addTask = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const newTasks = [...tasks, todo];
    setTasks(newTasks);
    localStorage.setItem(storageKey, JSON.stringify(newTasks));
    setTodo(""); // clear input
  };

  const delItem = (index) => {
    // make a copy of current tasks
    const updatedTasks = [...tasks];

    // remove 1 item at the given index
    updatedTasks.splice(index, 1);

    // update state and localStorage
    setTasks(updatedTasks);
    localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
  };

  return (
    <div className="todoContainer">
      <h2>Add Tasks</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="add item here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo">
        {tasks.length === 0 ? (
          <p style={{margin: "20% 40%", color: "#fff"}}>No tasks yet...</p>
        ) : (
          <ul className="todoList">
            {tasks.map((task, i) => (
              <li key={i}>
                <span>{i}</span> {task}
                <button className="del" onClick={() => delItem(i)}>
                  Del
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
