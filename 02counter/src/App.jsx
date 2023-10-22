import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>React counter</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  );
}

export default App;
