import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [startCounter, setStartCounter] = useState(0);
  const [lastCounter, setLastCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (lastCounter) {
        setCounter((presentCount) => {
          if (presentCount < lastCounter) {
            return presentCount + 1;
          } else {
            clearInterval(interval);
            return presentCount;
          }
        });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startCounter, lastCounter]);

  return (
    <div className="App">
      <h1>counter:{counter}</h1>
      start:
      <input
        onInput={(ele) => {
          setStartCounter(+ele.target.value);
          setCounter(+ele.target.value);
        }}
        type="number"
      />
      end:
      <input
        onInput={(ele) => {
          setLastCounter(+ele.target.value);
          setCounter(startCounter);
        }}
        type="number"
      />
    </div>
  );
}

export default App;