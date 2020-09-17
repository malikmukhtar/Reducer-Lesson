import React, { useReducer, useState } from "react";
function reducer(state, action) {
  if (action.type === "add-todo") {
    return { todos: [...state.todos, { text: action.text, completed: false }] };
  } else if (action.type === "decrement") {
    return state - 1;
  } else {
    return state;
  }
}

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
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
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
