import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <h3>Counter: {memoProcesoPesado}</h3>
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
