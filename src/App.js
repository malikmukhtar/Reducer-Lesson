import React, { useReducer, useState } from "react";
function reducer(state, action) {
  if (action.type === "add-todo") {
    return {
      todos: [...state.todos, { text: action.text, completed: false }],
      todoCount: state.todoCount + 1,
    };
  } else if (action.type === "toggle-todo") {
    return {
      todos: state.todos.map((todo, idx) =>
        idx === action.idx ? { ...todo, completed: !todo.completed } : todo
      ),
      todoCount: state.todoCount,
    };
  } else {
    return state;
  }
}

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <h4>Number of todos: {todoCount}</h4>
      </form>
      {todos.map((todo, idx) => (
        <h1
          key={todo.text}
          onClick={() => dispatch({ type: "toggle-todo", idx })}
          style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
          {todo.text}
        </h1>
      ))}
    </div>
  );
}

export default App;
