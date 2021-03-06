//Responsible for rendering a ToDo from the list

import { useState, useEffect } from "react"; //React Hooks
import "../styling/TodoList.scss";
import Todo from "./Todo";

function TodoList() {
  const [inputText, setInputText] = useState(""); //useState to update and get text in the input box from the user
  const [todos, setTodos] = useState([]); //useState to update the list for the todos

  const inputHandler = (event) => {
    setInputText(event.target.value); //changes the input text to a new value
  };

  const ToDoHandler = (jobs) => {
    jobs.preventDefault(); //prevents the default functioning of button
    setTodos([
      ...todos, //takes the previous list and appends the new text and key to it
      {
        text: inputText,
        key: todos.length + 1,
        complete: false,
      },
    ]);
    setInputText(""); //refreshed the input box to null
  };

  useEffect(() => {
    todos.map((todo) => {
      console.log(todo);
    });
  }, [todos]);

  return (
    <div className="ToDo">
      <div className="heading">
        <h2>What's on your work list?</h2>
      </div>
      <form action="#">
        <input
          value={inputText}
          onChange={inputHandler}
          placeholder="Add a task"
          type="text"
        />
        <button onClick={ToDoHandler} disabled={!inputText}>
          ADD
        </button>
      </form>
      <div className="todo_displayer">
        {todos.map(
          (
            todo //maps the todos to fetch each value in the todo list
          ) => (
            <Todo
              todo={todo}
              key={todo.key}
              setTodos={setTodos}
              todos={todos}
            /> // Props to be used in Todo.js
          )
        )}
      </div>
      {/* returns the number of items in our todos */}
      <p>JOB COUNT: {todos.length}</p>
    </div>
  );
}

export default TodoList;
