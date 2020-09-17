import React, { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else {
    return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
