import { useState } from "react";

export const useCounter = (initial = 10) => {
  const [counter, setCounter] = useState(initial);

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initial);
  };

  return { counter: counter, increment, decrement, reset };
};
