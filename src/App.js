import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset(e) {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          placeholder="0"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count}  days from today will be `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
