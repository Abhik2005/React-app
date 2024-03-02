import { useState } from "react";

function App() {
  var [counter, setCounter] = useState(0);
  var addvalue = () => {
    if (counter >= 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };
  var removevalue = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Abhik Mondal </h1>
      <button onClick={addvalue}>Add value : {counter}</button>

      <br />
      <button onClick={removevalue}>Remove value : {counter}</button>
    </>
  );
}

export default App;
