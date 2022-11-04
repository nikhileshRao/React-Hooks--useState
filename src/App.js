import React, {useState} from "react";
import './App.css';

const App = () => {

  const [count , setCount] = useState(4);
  const [theme , setTheme] = useState("RED");

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const changeState = () => {
    setTheme("BLUE")
    theme === "RED" ? setTheme("BLUE") : setTheme("RED")
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={changeState}>{theme}</button>
    </div>
  );
}

export default App;
