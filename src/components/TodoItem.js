import React from "react";

function TodoItem({ text, todo, todos, setTodos }) {
  //Event Handlers
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button onClick={completeHandler} className="complete-btn">
        <b>V</b>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <b>X</b>
      </button>
    </div>
  );
}

export default TodoItem;
