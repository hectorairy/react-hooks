import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "../02-useEffect/effects.css";

export const MultipleHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];
  // console.log(quote, author);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          <blockquote className="blockquote text-right">
            <p>{quote}</p>
            <footer className="blockquote-footer"> {author} </footer>
          </blockquote>
          <button onClick={() => increment()} className="btn btn-primary">
            Next quote
          </button>
        </>
      )}
    </div>
  );
};
