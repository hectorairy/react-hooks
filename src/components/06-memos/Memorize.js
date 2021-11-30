import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h3>
        Counter: <Small value={counter} />
      </h3>
      <button onClick={() => increment()} className="btn btn-primary">
        Increment
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
