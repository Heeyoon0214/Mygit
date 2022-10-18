import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };

  return (
    <form>
      <div className="input">
        <input
          className="todo-input"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="오늘의 할 일"
        />
        <button
          className="todo-button"
          onClick={submitTodoHandler}
          type="submit"
        >
           <b>+</b> 
        </button>
      </div>
    </form>
  );
}

export default Form;
